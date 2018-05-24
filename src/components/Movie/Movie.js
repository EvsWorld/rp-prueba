import React from 'react';

class Movie extends React.Component {
  state = {
    showComponent: false
  }

  showButton2 = () => {
    return (
      <button>showButton2</button>
    );
  }

  render() {
    return (
      <div>
        <div>Test from Movie</div>
        Title is: {this.props.movie.title}
      </div>
    );
  }
}

export default Movie;
