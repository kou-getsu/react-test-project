import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

//import "./styles.css";
import "./bootstrap.min.css";

class Button3 extends React.Component {
  state = { counter: 1 };

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
    console.log("button clicked");
  };

  onClick = () => {
    this.props.onButtonClick(true);
  };

  render() {
    return (
      <Button onClick={this.handleClick} bsStyle="primary">
        {this.state.counter}
      </Button>
    );
  }
}

export default Button3;
