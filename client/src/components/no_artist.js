import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeSongs } from '../actions/index';

class NoArtist extends Component {
  componentDidMount() {
    this.props.removeSongs();
  }

  render() {
    return (
      <div>
        <h1>Please Choose an Artist</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { songs: state.songs }
}

export default connect(mapStateToProps, { removeSongs })(NoArtist);
