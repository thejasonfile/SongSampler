import React from 'react';

const Landing = () =>
  (
    <div id="title">
      <h1 className="app-name"><i className="fa fa-music" aria-hidden="true"></i>  Song Sampler  <i className="fa fa-music" aria-hidden="true"></i></h1>
      <p className="subtitle">Search for song clips from your favorite artists</p>
      <a href="/auth/spotify">
        <button className="btn btn-default btn-login"><i className="fa fa-spotify"></i> Login with Spotify</button>
      </a>
      <div className="disclaimer">
        <a href="https://developer.spotify.com/web-api/">
          Song data from Spotify's Web API
        </a>
      </div>
    </div>
  );

export default Landing;
