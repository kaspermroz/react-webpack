import React from "react";

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

export default App;
