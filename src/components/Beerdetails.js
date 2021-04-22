import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

export default class Beerdetails extends Component {
  state = {
    beer: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      );
      this.setState({ beer: response.data });
      console.log(this.state.beer);
    } catch (err) {
      console.error(err);
    }
  };

  componentDidUpdate = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      );
      this.setState({ beer: response.data });
      console.log(this.state.beer);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    if (this.state.beer) {
      return (
        <div className="container">
          <Navbar />
          <div className="card d-flex" style={{ width: '18rem' }}>
            <img
              width="30px"
              src={this.state.beer.image_url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.beer.name}</h5>
              <p className="card-text">{this.state.beer.description}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="spinner-border" role="status">
          <span class="visually-hidden"></span>
        </div>
      );
    }
  }
}
