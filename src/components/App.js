import React, { Component } from "react";
import buttons from "../extras/buttons";
import Screen from "./Screen";
import ButtonContainer from "./ButtonContainer";
import "./App.css";

class App extends Component {
  state = { buttons: [] };

  componentWillMount() {
    this.setState({ buttons: [...buttons] });
  }

  render() {
    return (
      <main>
        <Screen />
        <ButtonContainer buttons={this.state.buttons} />
      </main>
    );
  }
}

export default App;
