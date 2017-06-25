import React, { Component } from 'react';
import '../css/app.css';

class Search extends Component {
  render() {
    return (
      <form className="search" onSubmit={ (e) => this.submitSearch(e) }>
        <input type="text" required placeholder="Please enter a location" />
        <button type="submit">Search</button>
      </form>
    );
  } // render
}

export default Search;
