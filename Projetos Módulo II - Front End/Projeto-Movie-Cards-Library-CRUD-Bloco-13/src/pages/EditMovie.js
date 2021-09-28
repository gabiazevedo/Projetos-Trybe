import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import { updateMovie, getMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.bringDetails = this.bringDetails.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    getMovie(id).then((movie) => {
      this.bringDetails(movie);
    });
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  bringDetails(movie) {
    this.setState({
      movie,
      status: false,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.number,
    },
  }).isRequired,
};

export default EditMovie;
