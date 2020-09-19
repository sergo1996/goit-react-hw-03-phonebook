import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handelcklick = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handelsubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handelsubmit}>
        <label>
          Name
          <br />
          <input onChange={this.handelcklick} name="name" value={name} />
        </label>
        <br />
        <label>
          Number
          <br />
          <input onChange={this.handelcklick} name="number" value={number} />
        </label>
        <br />
        <button type="submit"> Add contact </button>
      </form>
    );
  }
}
