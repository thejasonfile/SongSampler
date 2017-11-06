import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchBar from './search_bar';
import SongList from './song_list';
import Landing from './landing';
import NoArtistError from './no_artist';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={SearchBar} />
            <Route path="/search/results" component={SongList} />
            <Route path="/search/noartist" component={NoArtistError} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
