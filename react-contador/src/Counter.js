import React, { Component } from 'react'

export class Counter extends Component {
  state = {
    contador: 0
  }

  handleDecrement = () => {
    this.setState({ contador: this.state.contador - 1 })
  }

  handleIncrement = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  render() {
    return (
      <div>
        <div>
          Contador: <span>{this.state.contador}</span>
        </div>

        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}