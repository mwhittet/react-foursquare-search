import React, { Component } from 'react';
import '../css/app.css';

class Search extends Component {
  constructor() {
    super();
    this.submitSearch = this.submitSearch.bind(this);
  }

  render() {
    return (
      <div>
        <form className="search" onSubmit={ (e) => this.submitSearch(e) }>
          <input type="text" required placeholder="Please enter a location" ref={ (input) => { this.searchInput = input} } />
          <button type="submit">Search</button>
        </form>
        
        <p>Your results:</p>
        <ul id="search-results"></ul>
      </div>
    );
  } // render

  // custom functions
  submitSearch(e) {
    e.preventDefault();
    var searchString = this.searchInput.value; // First grab the text from the input.
    var cleanValue = searchString.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''); // Next filter any special characters out.
    var finalValue = cleanValue.replace(/\s/g, '+'); // Join words with a + to make the query more friendly.
    console.log('Test input: ' +  finalValue);

    document.getElementsByTagName('form')[0].reset(); // Clear the input for a new search.
  }
}

export default Search;
