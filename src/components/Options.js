import React from 'react';
import { Link } from 'react-router-dom';

export default function Options(props) {
  return (
    <div>
      <Link to={props.to}>
        <img src={props.image} />
      </Link>
      <h1>{props.title}</h1>
      <p>{props.resume}</p>
    </div>
  );
}
