import React from 'react';
import MovieList from '../MovieList';

class Main extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.fetchMovies();
  }

  _markSeen = (clickedId) => {
    const updatedMovies = this.state.movies.map(movie => {
      movie.seen = (movie.id === clickedId) ? !movie.seen : movie.seen;
      return movie;
    });
  };

  fetchMovies = () => {
    // TODO: put this in env variables
    console.log(`${process.env.REACT_APP_MOVIE_DB_KEY}`);
    fetch(`http://api.themoviedb.org/3/discover/movie/550?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}`)
    .then(response => response.json() )
    .then(data => {
      this.setState({movies: data});
    }).catch(err => {
      console.log(err);
    });
  };

  render () {
    return (
      <div className="Main">
        <div style={{padding:24}}>
          <MovieList
            markSeen={this._markSeen}
            movies={this.state.movies}/>
        </div>
      </div>
    );
  }

};

export default Main;
