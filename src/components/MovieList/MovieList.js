import React from 'react';
import Movie from '../Movie';

class MovieList extends React.Component {

  // const { movies } = this.props;
  _movies = () => this.props.movies.map(movie => {
    return (
        <Movie
          markSeen={this.props.markSeen}
          key={movie.id}
          movie={movie} />
    );
  });

  render() {
    console.log(`From MovieList. 'this.props': `, this.props);
    return (
      <div className="MovieList">
        { this._movies() }
      </div>
    );
  }
}

export default MovieList;
