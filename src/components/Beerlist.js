import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

export default class Beerlist extends Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({ data: [...response.data] });
      console.log(this.state.data);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <ul className="list-group">
          {this.state.data.map((x) => {
            return (
              <li key={x._id} className="list-group-item">
                <div className="m-2 d-flex align-items-center p-1">
                  <Link to={`/beer/${x._id}`}>
                    <img src={x.image_url} width="30px" className="mr-5" />{' '}
                  </Link>
                  <div className="list-inline info-list">
                    <h2>{x.name}</h2>
                    <span>{x.tagline}</span>
                    <h6>
                      <strong>Created By: </strong>
                      {x.contributed_by}
                    </h6>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
