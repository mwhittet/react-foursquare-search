import React, { Component } from 'react';
import Search from './Search';
import '../css/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { // Setup our initial state
      searches: ''
    };
  }

  render() {
    return (
      <div>
        <Search onSubmit={ this.onSubmit.bind(this) } />
      </div>
    );
  } // render

  // custom function
  onSubmit(data) {
    this.setState({
      data
    })
  }
}

export default App;
