import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import MovieList from "./Movies/MovieList"

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />

      {/* Maybe save this for the Route above: render={props => <Movie {...props} savedList={savedList} */}


    </div>
  );
};

export default App;
