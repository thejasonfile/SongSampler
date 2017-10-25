import React, { Component } from 'react';

import SearchBar from './search_bar';
import SongList from './song_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SongList />
      </div>
    );
  }
}
