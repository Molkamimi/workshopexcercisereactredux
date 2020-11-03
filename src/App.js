import React from "react";
import { increment, decrement } from "./Action/action";
import "./App.css";
import { connect } from "react-redux";
function App(props) {
  return (
    <div className="App">
      <h1>hello redux</h1>
      the value of counter is :{props.count}
      <div>
        <button onClick={() => props.increment()}>Increment</button>
        <button onClick={() => props.count > 0 && props.decrement()}>
          Decrement
        </button>
      </div>
    </div>
  );
}
const mapStatetoProps = (state) => ({
  count: state.counter,
});
const mapDispatchtoProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "Increment" }),
    decrement: () => dispatch({ type: "Decrement" }),
  };
};
export default connect(mapStatetoProps, { increment, decrement })(App);
