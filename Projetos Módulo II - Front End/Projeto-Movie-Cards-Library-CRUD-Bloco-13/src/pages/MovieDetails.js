import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    getMovie(id).then((movie) => {
      this.bringDetails(movie);
    });
  }

  bringDetails(movie) {
    this.setState({
      movie,
      loading: false,
    });
  }

  async removeMovie(id) {
    await deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, year, director, id } = movie;

    return (
      <div data-testid="movie-details" className="movie-details">
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } width="300px" />
        </div>
        <div className="details">
          <p>{`${title}`}</p>
          <p>{ `Diretor: ${director}` }</p>
          <p>{ `Sinopse: ${storyline}` }</p>
          <p>{ `Gênero: ${genre}` }</p>
          <p>{ `Ano de Lançamento: ${year}` }</p>
        </div>
        <div className="buttons">
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ () => this.removeMovie(id) }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.number,
    },
  }).isRequired,
};

export default MovieDetails;
