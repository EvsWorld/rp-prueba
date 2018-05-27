import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';


import config from '../../config.js';
import './MoviePage.css';

class MoviePage extends React.Component {
  state = {
    movie: '',
    activeIndex: 0
  };

  _handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  }
  componentWillMount () {
    (`Fetch movie ${this.props.match.params.id}`);
    this._fetchMovieData();
  }
  _fetchMovieData = () => {
    fetch(`http://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${config.api_key}`)
    .then(res => res.json() )
    .then(data => {
      this.setState({movie: data});
      ('this.state.movie = ', this.state.movie);
    }).catch(err => {
      (err);
    });
  };

  render () {
    const { overview, title, poster_path, release_date, runtime } = this.state.movie;
    const { activeIndex } = this.state;

    return (
      <div className="MoviePage">
        <div>
          <h1>{title}</h1>
          <a href="#"><img  src={`https://image.tmdb.org/t/p/w300/${poster_path}`} /></a>
        </div>
        <div className="details">
          <Accordion inverted className="accordion">
           <Accordion.Title active={activeIndex === 0} index={0} onClick={this._handleClick}>
             <Icon className="triangle" name='dropdown' />
             Description:
           </Accordion.Title>
           <Accordion.Content active={activeIndex === 0}>
             <p>
              {overview}
             </p>
           </Accordion.Content>
           <div className='date' >Release Date: {release_date}</div>
           <div>Runtiime: {runtime}</div>
                 </Accordion>
        </div>
      </div>
    );
  }


};

export default MoviePage;
