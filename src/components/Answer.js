import React from "react";
import TextField from '@material-ui/core/TextField';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;
    this.props.onChange(this.props.name, text);
  }

  render() {
    return (
      <TextField
        className="answer"
        name={this.props.name}
        type="text"
        onChange={this.handleChange}
      />
    );
  }
}

export default Answer;
