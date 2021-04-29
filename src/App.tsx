import React from "react";
import "./App.css";

export interface AppProps {}

export interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h1 className="App__counter-heading">{this.state.counter}</h1>
        <div className="App__button-toolbar">
          <button
            className="primary-btn"
            onClick={this.handleIncrement.bind(this)}
          >
            Increment
          </button>
          <button className="primary-btn" onClick={this.handleReset.bind(this)}>
            Reset
          </button>
          <button
            className="primary-btn"
            onClick={this.handleDecrement.bind(this)}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }

  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement() {
    const { counter } = this.state;

    let decrementedNumber = counter === 0 ? 0 : counter - 1;
    this.setState({ counter: decrementedNumber });
  }

  handleReset() {
    this.setState({ counter: 0 });
  }
}

export default App;
