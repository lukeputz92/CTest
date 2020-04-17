import React from "react";
import reactStringReplace from "react-string-replace";
import Answer from "./Answer";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAnswerChange = (name, value) => {
    this.setState( { title: this.props.title, answers: {[name]: value} },  () => this.props.onChange(this.state));
  }
  
  render() {
    let number = 1;
    return (
      <div className="task" style={{marginTop: "10px"}}>
        <h3>{this.props.title}</h3>
          {reactStringReplace(this.props.text, "$", (match, i) => (
            <Answer 
              key={number} 
              name={`a${number++}`}
              onChange={this.handleAnswerChange} />
          ))}
      </div>
    );
  }
}

export default Task;
