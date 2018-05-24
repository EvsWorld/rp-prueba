import React from 'react';
import MovieList from '../MovieList';
import config from '../../config.js';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [
{vote_count: 3911, id: 299536, video: false, vote_average: 8.5, title: "Avengers: Infinity War"},
{vote_count: 8, id: 510819, video: false, vote_average: 2.9, title: "Dirty Dead Con Men"},
{vote_count: 865, id: 383498, video: false, vote_average: 8, title: "Deadpool 2"},
{vote_count: 1882, id: 337167, video: false, vote_average: 6, title: "Fifty Shades Freed"},
{vote_count: 6350, id: 284053, video: false, vote_average: 7.4, title: "Thor: Ragnarok"},
{vote_count: 5505, id: 284054, video: false, vote_average: 7.3, title: "Black Panther"},
{vote_count: 14853, id: 293660, video: false, vote_average: 7.5, title: "Deadpool"},
{vote_count: 8740, id: 297762, video: false, vote_average: 7.2, title: "Wonder Woman"},
{vote_count: 13043, id: 118340, video: false, vote_average: 7.9, title: "Guardians of the Galaxy"},
{vote_count: 577, id: 427641, video: false, vote_average: 5.9, title: "Rampage"},
{vote_count: 1169, id: 401981, video: false, vote_average: 6.4, title: "Red Sparrow"},
{vote_count: 7261, id: 269149, video: false, vote_average: 7.7, title: "Zootopia"},
{vote_count: 23, id: 499772, video: false, vote_average: 5, title: "Meet Me In St. Gallen"},
{vote_count: 5496, id: 181808, video: false, vote_average: 7.1, title: "Star Wars: The Last Jedi"},
{vote_count: 4481, id: 354912, video: false, vote_average: 7.8, title: "Coco"},
{vote_count: 8233, id: 321612, video: false, vote_average: 6.8, title: "Beauty and the Beast"},
{vote_count: 14859, id: 24428, video: false, vote_average: 7.5, title: "The Avengers"},
{vote_count: 7877, id: 198663, video: false, vote_average: 7, title: "The Maze Runner"},
{vote_count: 2020, id: 333339, video: false, vote_average: 7.8, title: "Ready Player One"},
{vote_count: 664, id: 445571, video: false, vote_average: 7, title: "Game Night"}
]
};
  }

  componentWillMount() {
    // this._fetchMovies();
  }
  // _markSeen = (clickedId) => {
  //   const updatedMovies = this.state.movies.map(movie => {
  //     movie.seen = (movie.id === clickedId) ? !movie.seen : movie.seen;
  //     return movie;
  //   });
  // };

  _fetchMovies = () => {
    fetch(config.movieDbDiscoverURL, {
      credentials: 'omit'
    })
    .then(response => response.json() )
    .then(data => {
      console.log('data = ', data);
      this.setState({movies: data.results});
      console.log('state.movies after fetch = ', this.state.movies);
    }).catch(err => {
      console.log(err);
    });
  };

  render () {
    console.log(`From Main.js. 'this.state.movies': `,this.state.movies);

    return (
      <div className="Main">
        <div style={{padding:24}}>
          <MovieList
            // markSeen={this._markSeen}
            movies={this.state.movies}/>
        </div>
      </div>
    );
  }

}

export default Main;
