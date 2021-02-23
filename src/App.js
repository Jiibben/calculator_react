import './App.css';
import React from 'react';
import Buttons from './components/Buttons.js';
import Input from './components/Input.js';
import Clear from './components/Clear.js';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input:"",
      prev_num:"",
      operator:""
    }
  }
  removeInput = () => {
    this.setState({input: ""})
  };

  getInput = () => {
    return this.state.input
  }

  addInput = value =>{
    this.setState({input: this.state.input + value})
  };

  executeOperation = value =>{
    switch(value){

      case "+":
        this.setState({prev_num: this.getInput()});
        this.removeInput();
        this.setState({operator: "addition"});
        break;

      case "*":
        this.setState({prev_num: this.getInput()});
        this.removeInput();
        this.setState({operator: "multiply"});
        break;
  
      case "/":
        this.setState({prev_num: this.getInput()});
        this.removeInput();
        this.setState({operator: "divise"});
        break;
  
      case "-":
        this.setState({prev_num: this.getInput()});
        this.removeInput();
        this.setState({operator: "substract"});
        break;
      case "C":
        this.setState({
          input:"",
          prev_num:"",
          operator:"",
        })
        break;
      default:
        break;
        };
    };
  logei = () => console.log(this.state)

  equals = value =>{
    let curr_num = this.getInput()
    switch(this.state.operator){
      case "addition":
        this.setState({input: Number(curr_num) + Number(this.state.prev_num)});
        break;

      case "substract":
        this.setState({input: Number(curr_num) - Number(this.state.prev_num)});
        break;

      case "multiply":
        this.setState({input: Number(curr_num) * Number(this.state.prev_num)});
        break;

      case "divise":
        this.setState({input: Number(this.state.prev_num) / Number(curr_num)});
        break;
      
      default:
        break;
        };
        
    };

  render(){
    return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          < Input val={this.state.input}>"enter"</Input>
        </div>
        <div className="row">
          < Buttons handleclick={this.addInput}>7</Buttons>
          < Buttons handleclick={this.addInput}>8</Buttons>
          < Buttons handleclick={this.addInput}>9</Buttons>
          < Buttons handleclick={this.executeOperation}>/</Buttons>
        </div>
        <div className="row">
            < Buttons handleclick={this.addInput}>4</Buttons>
            < Buttons handleclick={this.addInput}>5</Buttons>
            < Buttons handleclick={this.addInput}>6</Buttons>
            < Buttons handleclick={this.executeOperation}>*</Buttons>
        </div>
        <div className="row">
          < Buttons handleclick={this.addInput}>1</Buttons>
          < Buttons handleclick={this.addInput}>2</Buttons>
          < Buttons handleclick={this.addInput}>3</Buttons>
          < Buttons handleclick={this.executeOperation}>+</Buttons>
        </div>
        <div className="row">
          < Buttons handleclick={this.addInput}>0</Buttons>
          < Buttons handleclick={this.addInput}>.</Buttons>
          
          < Clear handleclick={this.executeOperation}>C</Clear>
          < Buttons handleclick={this.executeOperation}>-</Buttons>
        </div>
        <div className="row">
          < Buttons handleclick={this.equals}>=</Buttons>
        </div>
      </div>
    </div>
    
  );
}
}

export default App;
