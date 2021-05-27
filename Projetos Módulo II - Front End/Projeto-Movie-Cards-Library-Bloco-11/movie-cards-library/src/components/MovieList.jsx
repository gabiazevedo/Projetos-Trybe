import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((item) => <MovieCard movie={ item } key={ item.title } />)}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequire,
      subtitle: PropTypes.string.isRequire,
      storyline: PropTypes.string.isRequire,
      rating: PropTypes.number.isRequire,
      imagePath: PropTypes.string.isRequire,
    }),
  ),
};

MovieList.defaultProps = {
  movies: {},
};
