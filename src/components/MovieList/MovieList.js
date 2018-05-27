import React from 'react';
import Movie from '../Movie';

import './MovieList.css'

class MovieList extends React.Component {

  _movies = () => this.props.movies.map(movie => {
    // only allows movies who have posters to display
    if ( movie.poster_path) {
      return (
        <Movie
          key={movie.id}
          movie={movie} />
      );
    }
  });

  render () {
    const { props } = this.props;
    return (
      <div className="MovieList">
        {this._movies()}
      </div>
    );
  }
}

export default MovieList;
