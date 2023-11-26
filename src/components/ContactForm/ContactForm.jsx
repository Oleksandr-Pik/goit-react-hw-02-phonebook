import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleAddContact = e => {
    e.preventDefault();
    this.props.createContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleAddContact}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          id="number"
          required
          onChange={this.handleChange}
          value={this.state.number}
        />
        <button type="submin">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
