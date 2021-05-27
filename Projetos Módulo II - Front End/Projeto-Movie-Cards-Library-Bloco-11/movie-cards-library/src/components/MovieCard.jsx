import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className='movie-card-body'>
      <div className='movie-card'>
        <img className='movie-card-image' src={ imagePath } alt="Olá filme" />
        <h4 className='movie-card-title'>{title}</h4>
        <h5 className='movie-card-subtitle'>{subtitle}</h5>
        <p className='movie-card-storyline'>{storyline}</p>
        <div className='movie-card-rating'><Rating rating={ rating } /></div>
      </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequire,
      subtitle: PropTypes.string.isRequire,
      storyline: PropTypes.string.isRequire,
      rating: PropTypes.number.isRequire,
      imagePath: PropTypes.string.isRequire,

    }),
  ),
};

MovieCard.defaultProps = {
  movie: {},
};
