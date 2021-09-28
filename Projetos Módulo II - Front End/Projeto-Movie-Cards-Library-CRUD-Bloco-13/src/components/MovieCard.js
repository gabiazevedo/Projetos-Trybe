import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, id } } = this.props;

    return (
          <Card
            id="movie-card"
            style={{ width: '16rem' }}
            data-testid="movie-card"
          >
            <Card.Img variant="top" src={ imagePath } alt={ title } width="200px" height="400px" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <button
                type="button"
              >
                <Link to={ `/movies/${id}` }>VER DETALHES</Link>
              </button>
            </Card.Body>
          </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
