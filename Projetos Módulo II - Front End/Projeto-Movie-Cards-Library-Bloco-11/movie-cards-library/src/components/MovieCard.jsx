import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movieCard">
        <img src={ imagePath } alt="Olá filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <div><Rating rating={ rating } /></div>
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
