import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSongs, setTerm } from '../actions/index';

class SearchBar extends Component {

  onInputChange(event) {
    this.props.setTerm(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchSongs(this.props.term);
    //window.location.replace('/search/results');
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.onFormSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="artist-search">Artist:</label>
            <input
              type="text"
              className="form-control"
              onChange={this.onInputChange.bind(this)}
              id="artist-search"
              placeholder="Search for an artist"
            />
            <button className="btn btn-default" type="submit">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { term: state.term };
}

export default connect(mapStateToProps, { fetchSongs, setTerm })(SearchBar);
