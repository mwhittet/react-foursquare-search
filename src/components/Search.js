import React, { Component } from 'react';
import '../css/app.css';

class Search extends Component {
  render() {
    return (
      <form className="search" onSubmit={ (e) => this.submitSearch(e) }>
        <input type="text" required placeholder="Please enter a location" ref={ (input) => { this.searchInput = input} } />
        <button type="submit">Search</button>
      </form>
    );
  } // render

  // custom functions
  submitSearch(e) {
    e.preventDefault();
    var searchString = this.searchInput.value; // First grab the text from the input.
    console.log('Test input: ' +  searchString);
  }
}

export default Search;
