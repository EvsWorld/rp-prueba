import React from 'react';

class Movie extends React.Component {
  state = {
    showComponent: false
  }

  _showButton2 = () => {
    return (
      <button>_showButton2</button>
    );
  }

  render() {
    return (
      <div>
        {this.props.movie.title}
        From Movie.js
      </div>
    );
  }
}

export default Movie;
