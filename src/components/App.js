import React from "react";
import CTest from "./CTest";
import { tasks } from "../constants/tasks";

export default class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <img src="https://casls.uoregon.edu/wp-content/themes/caslstheme/images-programs/logos/IPIC-logo.png" />
        <h3>Please read these instructions carefully before starting the test.</h3>
        <p>
          <br />
          1. You must enter your participant number.
          <br />
          2. The following texts have been developed by deleting the second
          half of some words. Please fill in the blanks provided as best you
          can.
          <br />
          3. Pay attention to context, vocabulary, and grammar (e.g. subject-verb agreement, consistency of tense).
          <br />
          4. Skim each text to get its meaning before filling in the blanks.
          For some texts, you need to read and understand all the text to
          complete the gaps. All blanks are equal in length regardless of
          the length of the word.
          <br />
          5. After you fill in the gaps in each text, read over the text and make
          sure your answers are consistent with the rest of the text.
          <br />
          6. Some texts are considerably more difficult than others; but it is
          very important that you try your best to complete all blanks in all
          texts. Do not skip a text because you think it is difficult; just do your
          best to complete each blank.
          <br />
          7. The test is not timed; take the time you need for each text, but do
          not spend more than one hour on the full text.
          <br />
          8. Do not use a dictionary or any other aids in completing the test.
        </p>
        <CTest store={store} tasks={tasks} />
      </div>
    );
  }
}
