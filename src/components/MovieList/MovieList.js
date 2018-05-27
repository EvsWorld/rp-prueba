import React from 'react';
import Movie from '../Movie';

import './MovieList.css'

class MovieList extends React.Component {

  _movies = () => this.props.movies.map(movie => {
    ('from _movies: movie = ', movie);
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
    (`From MovieList. Using object destructuring 'props': `, props);
    return (
      <div className="MovieList">
        {this._movies()}
      </div>
    );
  }
}

export default MovieList;
