import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";

class App extends React.Component {
  state = {
    count: 0
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello world</h1>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
