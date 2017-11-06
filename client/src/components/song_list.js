import React from 'react';
import Song from './song';

const SongList = () => {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th className="table-header">Song Name</th>
            <th className="table-header">Album Name</th>
            <th className="table-header">Popularity</th>
            <th className="table-header">Sample</th>
          </tr>
        </thead>
        <Song />
      </table>
    </div>
  );
}

export default SongList;
