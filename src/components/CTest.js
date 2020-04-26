import React from "react";
import "./CTest.css";
import emailjs from "emailjs-com";
import Task from "./Task";
import { Button, Box } from "@material-ui/core";

class CTest extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { submitted: "" }
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
  }

  onSubmit = (event) => {
    const { store } = this.props;
    event.preventDefault();
    const data = { data: JSON.stringify(store.getState()) };
    if(this.handleValidation(store.getState())) {
      emailjs.send('gmail', 'ctest', data, process.env.REACT_APP_EMAILJS_API_KEY).then((result) => {
          alert("Submitted!");
          this.setState({submitted: "y"});
      }, (error) => {
          console.log(error.text);
      });
    } else {
      alert("Participant number is required.")
    }
  };

  handleValidation = (data) => {
    let index = data.findIndex(task => task.title === "Participant Number");
    return index !== -1 && data[index].answers.a1;
  }

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
        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          onClick={this.onSubmit} 
          style={{marginTop: "10px"}}
          disabled={this.state.submitted === "y"}>
          Submit
        </Button>
        </Box>
      </div>
    );
  }
}

export default CTest;
