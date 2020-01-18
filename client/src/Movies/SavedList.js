import React from 'react';
import { Link, Route } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link className="home-button" to="/">Home</Link>

    <Route exact path="/" />
  </div>
);

export default SavedList;
