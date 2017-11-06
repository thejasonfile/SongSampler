import React from 'react';
import Song from './song';

const SongList = () => {
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

export default SongList;
