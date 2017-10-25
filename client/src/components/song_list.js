import React, {Component} from 'react';
import Song from './song';

export default class SongList extends Component {
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
