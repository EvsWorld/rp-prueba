import React from 'react';
import MovieList from '../MovieList';
import config from '../../config.js';

class Main extends React.Component {
  state = {
    searchString: '',
    movies: []
  }


  _handleChange = (e) => {
   this.setState({ searchString:e.target.value });
   let searchString = this.state.searchString.trim().toLowerCase();
   if (searchString.length > 0) {
     this._fetchMovies('search', searchString)
   } else {
     this._fetchMovies('popular', null);
   }
 }

  componentWillMount() {
    this._fetchMovies('popular');
  }

  _fetchMovies = (searchOrPopular, searchTerm) => {
    const fetchURL = (searchOrPopular === 'search' && searchTerm ) ?
      `http://api.themoviedb.org/3/${searchOrPopular}/movie?api_key=${config.api_key}&language=en-US&query=${searchTerm}` :
      `http://api.themoviedb.org/3/movie/${searchOrPopular}?api_key=${config.api_key}&language=en-US`;

    fetch(fetchURL, {
      credentials: 'omit'
    })
    .then(response => response.json() )
    .then(data => {
      ('data = ', data);
      this.setState({movies: data.results});
    }).catch(err => {
      (err);
    });
  };

  render () {
    return (
      <div className="Main">
        <input id="input" type="text" value={this.state.searchString} onChange={this._handleChange} placeholder="Search terms  here..."/>
        <MovieList style={{padding:24}}
          movies={this.state.movies}/>
      </div>
    );
  }
}

export default Main;


// mock state
// state = {
//   searchString: '',
//   movies: [
//     {vote_count: 3911, id: 299536, video: false, vote_average: 8.5, title: "Avengers: Infinity War"},
//     {vote_count: 8, id: 510819, video: false, vote_average: 2.9, title: "Dirty Dead Con Men"},
//     {vote_count: 865, id: 383498, video: false, vote_average: 8, title: "Deadpool 2"},
//     {vote_count: 1882, id: 337167, video: false, vote_average: 6, title: "Fifty Shades Freed"},
//     {vote_count: 6350, id: 284053, video: false, vote_average: 7.4, title: "Thor: Ragnarok"},
//     {vote_count: 5505, id: 284054, video: false, vote_average: 7.3, title: "Black Panther"},
//     {vote_count: 14853, id: 293660, video: false, vote_average: 7.5, title: "Deadpool"},
//     {vote_count: 8740, id: 297762, video: false, vote_average: 7.2, title: "Wonder Woman"},
//     {vote_count: 13043, id: 118340, video: false, vote_average: 7.9, title: "Guardians of the Galaxy"},
//     {vote_count: 577, id: 427641, video: false, vote_average: 5.9, title: "Rampage"},
//     {vote_count: 1169, id: 401981, video: false, vote_average: 6.4, title: "Red Sparrow"},
//     {vote_count: 7261, id: 269149, video: false, vote_average: 7.7, title: "Zootopia"},
//     {vote_count: 23, id: 499772, video: false, vote_average: 5, title: "Meet Me In St. Gallen"},
//     {vote_count: 5496, id: 181808, video: false, vote_average: 7.1, title: "Star Wars: The Last Jedi"},
//     {vote_count: 4481, id: 354912, video: false, vote_average: 7.8, title: "Coco"},
//     {vote_count: 8233, id: 321612, video: false, vote_average: 6.8, title: "Beauty and the Beast"},
//     {vote_count: 14859, id: 24428, video: false, vote_average: 7.5, title: "The Avengers"},
//     {vote_count: 7877, id: 198663, video: false, vote_average: 7, title: "The Maze Runner"},
//     {vote_count: 2020, id: 333339, video: false, vote_average: 7.8, title: "Ready Player One"},
//     {vote_count: 664, id: 445571, video: false, vote_average: 7, title: "Game Night"}
//   ]
// };
