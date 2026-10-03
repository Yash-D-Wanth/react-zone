import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      topic: 'react'
    };
  }

  display = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name, this.state.topic);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>name:</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.display}
        />
        <br />

        <select
          value={this.state.topic}
          onChange={(e) => this.setState({ topic: e.target.value })}
        >
          <option value="react">react</option>
          <option value="angular">angular</option>
          <option value="bootstrap">bootstrap</option>
        </select>

        <button type="submit">submit</button>
        <p>Output: {this.state.name}</p>
      </form>
    );
  }
}