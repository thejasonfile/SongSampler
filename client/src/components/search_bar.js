import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setTerm, fetchSongs } from '../actions/index';

class SearchBar extends Component {

  onInputChange(event) {
    this.props.setTerm(event.target.value);
  }

  onButtonClick(e) {
    //e.preventDefault()
    if(this.props.term){
      this.props.fetchSongs(this.props.term);
    }
  }

  render() {
    return (
      <div>
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="artist-search">Artist:</label>
            <input
              type="text"
              className="form-control"
              onChange={this.onInputChange.bind(this)}
              id="artist-search"
              placeholder="Search for an artist"
            />
              <Link to={this.props.term ? '/search/results' : '/search/noartist'}>
              <button
                type="submit"
                className="btn btn-default"
                value={this.props.term}
                onClick={this.onButtonClick.bind(this)}
              >
              Search
              </button>
              </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { term: state.term };
}

export default connect(mapStateToProps, { setTerm, fetchSongs })(SearchBar);
