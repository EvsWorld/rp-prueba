import React from 'react';

class MoviePage extends React.Component {
  state = {
    movie: ''
  };

componentDidMount () {
  console.log(`Fetch movie ${this.props.match.params.id}`);
  this.fetchMovieData();
}
_fetchMovieData = () => {
  // TODO: figure out what this URL is for 'themoviedb'
  fetch(`/movie/${this.props.id}`)
  .then(res => res.json() )
  .then(data => {
    this.setState({movie: data});
    console.log('this.state.movie = ', this.state.movie);
  }).catch(err => {
    console.log(err);
  });
};

_fetchReviews = () => {

}

render () {
  return (
    <div className="MoviePage">

      <a href="#"><img  src={`https://image.tmdb.org/t/p/w300/${this.state.movie.poster_path}`} /></a>
      {this.state.movie.title} <br/>
      {this.state.movie.id}
    </div>
  );
}


}

export default MoviePage;
