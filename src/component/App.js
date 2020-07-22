import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };


  handleClick = buttonName => {

    console.log(this.state.next);
    console.log(this.state.total);
    console.log(this.state.operation);
    
    this.setState(calculate(this.state, buttonName));

  };
    handleKey = event => {
      const keyPressedAllowed = ['0','1','2','3','4','5','6','7','8','9','c','%','/', 'x','-', '+', '=','.'];
      let KeyName = event.key;
      if(keyPressedAllowed.includes(KeyName)) {
        this.setState(calculate(this.state, KeyName));
      }
     
    };
  
  render() {
    return (
      <div className="component-app" tabIndex="0" onKeyUp={(e) => this.handleKey(e)}>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
