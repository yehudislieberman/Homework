import './App.css'
import { Component } from 'react';

export default class App extends Component {

  state = {
    current: '0',
    total: null,
    operator: null,
  }
  
  buttonClicked(btn) {
    switch (btn) {
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({
          current: '0',
          total: this.state.current,
          operator: btn
        })
        break;

      case '=':
        this.calculateResult();
        break;
      case 'C':
        this.setState({
          current: '0',
          total: 0,
          operator: null
        })
        break;

      default: {
        let newCurrent;
        if (this.state.operator) {
          newCurrent = btn.toString();
        } else {
          newCurrent = this.state.current === '0' ? btn.toString() : this.state.current + btn;
        }
        this.setState({
          current: newCurrent
        });
      }
    }
  }

  calculateResult = () => {
    const num1 = parseFloat(this.state.total);
    const num2 = parseFloat(this.state.current);
    let answer;

    switch (this.state.operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      case '/':
        answer = num1 / num2;
        break;
    }
    this.setState({
      current: answer
    });
  }
    render() {
      const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/']
        .map(btn => (
          <button key={btn} onClick={() => this.buttonClicked(btn)}>
            {btn}
          </button>
        ));

    return (
      <div className="calculator">
        <div className="display">
          <input type="text" value={this.state.current} readOnly />
        </div>
        <div className="buttons">
          {buttons}
        </div>
      </div>
    );
  }
}