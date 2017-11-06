import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/index'
import Song from './song';

class SongList extends Component {
  componentDidMount() {
    this.props.fetchSongs(this.props.term);
  }

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Song Name</th>
              <th>Album Name</th>
              <th>Popularity</th>
              <th>Sample</th>
            </tr>
          </thead>
          <Song />
        </table>
      </div>
    );  
  }
}

function mapStateToProps(state) {
  return { term: state.term };
}

export default connect(mapStateToProps, { fetchSongs })(SongList);
