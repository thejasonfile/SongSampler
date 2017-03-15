import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Song extends Component {
  render() {
    return (
        <tbody>
          {this.props.songs.map(this.renderSong)}
        </tbody>
    )
  }

  renderSong(songData){
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    }

    const songName = songData.name;
    const albumName = songData.album.name;
    const popularity = songData.popularity;
    const songPreview = songData.preview_url;
    const songURL = songData.external_urls.spotify;

    return(
      <ReactCSSTransitionGroup {...transitionOptions}>
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
      </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToProps(state){
  return {songs: state.songs};
}

export default connect(mapStateToProps)(Song);
