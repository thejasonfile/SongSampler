import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchSongs} from '../actions/index';
import {setTerm} from '../actions/index';

class SearchBar extends Component {
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
              placeholder="Search for an artist">
            </input>
            <button className="btn btn-default" type="submit">Search</button>
          </div>
        </form>
      </div>
    )
  }

  onInputChange(event){
    this.props.setTerm(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchSongs(this.props.term);
  }
}

function mapStateToProps(state) {
  return {term: state.term}
}

export default connect(mapStateToProps, {fetchSongs, setTerm})(SearchBar);
