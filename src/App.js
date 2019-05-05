import React from "react";
import logoGood from "./logo-bad.svg";
import logoBad from "./logo-good.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "Good"
    };
  }

  toggle() {
    const moodState = this.state.mood === "Good" ? "Bad" : "Good";

    this.setState({
      mood: moodState
    });
  }

  render() {
    return (
      <div className="App">
        <header
          className={
            this.state.mood === "Good" ? "App-header good" : "App-header bad"
          }
        >
          <img
            src={this.state.mood === "Good" ? logoGood : logoBad}
            className="App-logo"
            alt="logo"
          />

          <button
            className={this.state.mood === "Good" ? "btn bad" : "btn good"}
            onClick={() => this.toggle()}
          >
            {this.state.mood}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
