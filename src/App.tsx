import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  searchMovies = () => {
    const { query } = this.state;
    const searchMovie = moviesFromServer.filter(movie => (
      movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      || movie.description.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    ));

    return searchMovie;
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={this.state.query}
                  onChange={(event) => {
                    this.setState({ query: event.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.searchMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
