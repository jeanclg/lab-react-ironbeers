import axios from 'axios';
import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Form extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        this.state
      );
      this.props.history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <label className="form-label">Tagline</label>
            <input
              type="text"
              className="form-control"
              name="tagline"
              onChange={this.handleChange}
              value={this.state.tagline}
            />
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
            <label className="form-label">Contributed By</label>
            <input
              type="text"
              className="form-control"
              name="contributed_by"
              onChange={this.handleChange}
              value={this.state.contributed_by}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
