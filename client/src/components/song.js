import React, {Component} from 'react';
import {connect} from 'react-redux';

class Song extends Component {
  componentWillMount(){
    console.log(this.props);
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

  renderSong(songData){
    // const transitionOptions = {
    //   transitionName: "fade",
    //   transitionEnterTimeout: 500,
    //   transitionLeaveTimeout: 500
    // }

    const songName = songData.name;
    const albumName = songData.album.name;
    const popularity = songData.popularity;
    const songPreview = songData.preview_url;
    const songURL = songData.external_urls.spotify;

    return(
        <tr key={songPreview}>
          <td><a href={songURL} target="_blank">{songName}</a></td>
          <td>{albumName}</td>
          <td>{popularity}</td>
          <td>
            <audio controls name="media">
              <source src={songPreview} type="audio/mpeg"></source>
            </audio>
          </td>
        </tr>
    )
  }
}

function mapStateToProps(state){
  return {songs: state.songs, artist: state.artist};
}

export default connect(mapStateToProps)(Song);
