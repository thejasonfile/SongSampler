import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentUser } from '../actions/index';
import SearchBar from './search_bar';
import SongList from './song_list';
import Landing from './landing';
import NoArtist from './no_artist';

class App extends Component {
  componentWillMount() {
    this.props.getCurrentUser();
    this.renderRoutes();
  }

  renderRoutes() {
    if (!this.props.user) {
      return (
        <BrowserRouter>
          <div>
            <Route path="/" component={Landing} />
          </div>
        </BrowserRouter>
      )
    } else {
      return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={SearchBar} />
            <Route path="/search/results" component={SongList} />
            <Route path="/search/noartist" component={NoArtist} />
          </div>
        </BrowserRouter>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderRoutes()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { getCurrentUser })(App);
