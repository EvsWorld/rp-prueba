import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviePage from '../MoviePage';
import './Movie.css'

class Movie extends React.Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
  }
  state = {
      showComponent: false,
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
            movie={this.props.movie} show={this.state.showComponent} />  :
          (
            // TODO: fix poster path base url
            <div className='Movie'>
              <Link to={`/movie/${this.props.movie.id}`}>
                <img alt="movie poster" src={'https://image.tmdb.org/t/p/w185/'+ this.props.movie.poster_path}
                />
              </Link>
              {this.props.movie.title}
            </div>
          )
        }
      </div>
    );
  }
}

export default Movie;

// Movie.propTypes = {
//   movie: PropTypes.object.isRequired,
//
// }
