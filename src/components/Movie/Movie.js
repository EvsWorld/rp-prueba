import React from 'react';
import { Link } from 'react-router-dom';

import MoviePage from '../MoviePage';

class Movie extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        showComponent: false,
    }
    this._onImgClick = this._onImgClick.bind(this);
  }
  _onImgClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        {this.state.showComponent              ?
          <MoviePage
            movie={this.props.movie} show={this.state.showComponent}/>  :
          (
            <div className="Movie">
            <Link to={`/movie/${this.props.movie.id}`}><img alt="not sure what image" src={`http://api.themoviedb.org/3/${this.props.movie.poster_path}`  /></Link>
            {this.props.movie.title}
            </div>
          )
        }
      </div>
    );
  }
}

export default Movie;
