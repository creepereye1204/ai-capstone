import { render} from "react-dom";
import React, { Component } from "react"; 
export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        테스트
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<Main />, appDiv);