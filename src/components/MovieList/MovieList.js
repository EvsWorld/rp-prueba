import React from 'react';
import Movie from '../Movie';

class MovieList extends React.Component {

  _movies = () => this.props.movies.map(movie => {
     console.log('from _movies: movie = ', movie);
      return (
        <Movie
          markSeen={this.props.markSeen}
          key={movie.id}
          movie={movie} />
        );
      });

  render () {
    console.log(`From MovieList. 'this.props': `, this.props);
    return (
      <div className="MovieList">
        {this._movies()}
        test from MovieList
      </div>
    );
  }
}

export default MovieList;
