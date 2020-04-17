import React from "react";
import "./CTest.css";
import emailjs from "emailjs-com";
import Task from "./Task";
import { Button, Box } from "@material-ui/core";

class CTest extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(task) {
    const { store } = this.props;
    store.dispatch({
      type: 'ADD_TASK',
      task: {
        title: task.title,
        answers: task.answers
      }
    })
    console.log(store.getState())
  }

  onSubmit = (event) => {
    const { store } = this.props;
    event.preventDefault();
    console.log(store.getState());
    const data = { data: JSON.stringify(store.getState()) };
    emailjs.send('gmail', 'ctest', data, process.env.REACT_APP_EMAILJS_API_KEY).then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  render() {
    const tasks = this.props.tasks.map((task) => (
      <Task 
        title={task.title} 
        text={task.text} 
        key={task.title}
        id={task.title}
        onChange={this.handleChange}/>
    ));

    return (
      <div className="ui container" style={{marginTop: "10px"}}>
        <Box>
        {tasks}
        <Button variant="contained" color="primary" type="submit" onClick={this.onSubmit} style={{marginTop: "10px"}}>
          Submit
        </Button>
        </Box>
      </div>
    );
  }
}

export default CTest;
