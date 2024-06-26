import React from "react";
import "./App.css";

import { connect } from "react-redux";

const App = ({ counter, increment, decrement}) => {
  return (
    <>
      <div className="container">
        <h1>Capitole Tech Challenge</h1>

        <div className="counter_example">
          <p>Counter: {counter}</p>
          <button className="increment" onClick={increment}>Increment</button>
          <button className="decrement" onClick={decrement}>Decrement</button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter.counter
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" })
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
