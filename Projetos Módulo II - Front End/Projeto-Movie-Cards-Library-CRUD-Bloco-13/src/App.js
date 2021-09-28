import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import movieData from './services/movieData';
import './App.css';

function App() {
  return (
    <div className="div-main">
      <BrowserRouter>
        <header className="header">Clássicos que marcaram época</header>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } movies={ movieData.id } /> }
          />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route component={ NotFound } />
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
