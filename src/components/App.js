import React from "react";
import CTest from "./CTest";
import { tasks } from "../constants/tasks";

export default class App extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <CTest store={store} tasks={tasks} />
      </div>
    );
  }
}
