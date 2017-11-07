import React, {Component} from 'react';
import {connect} from 'react-redux';

class Song extends Component {
  renderSong(songData) {
    const songName = songData.name;
    const albumName = songData.album.name;
    const popularity = songData.popularity;
    const songPreview = songData.preview_url;
    const songURL = songData.external_urls.spotify;

    return(
      <tr key={songPreview}>
        <td className="table-data"><a href={songURL} target="_blank">{songName}</a></td>
        <td className="table-data">{albumName}</td>
        <td className="table-data">{popularity}</td>
        <td>
          <audio controls name="media">
            <source src={songPreview} type="audio/mpeg"></source>
          </audio>
        </td>
      </tr>
    )
  }
  
  render() {
    if(this.props.songs.length === 0) {
      return (<tbody><tr><td>Searching...</td></tr></tbody>)
    } else {
      return (
        <tbody>
          {this.props.songs.map(this.renderSong)}
        </tbody>
      )
    }
  }

}

function mapStateToProps(state){
  return {songs: state.songs, artist: state.artist};
}

export default connect(mapStateToProps)(Song);
