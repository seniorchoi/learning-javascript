import React, { Component } from 'react';
import './App.css';
import BookList from './container/book-list';
import BookDetail from './container/book-detail';


class App extends Component {
  render() {
    return (
      <div className="App">
          <BookList/>
          <BookDetail/>
      </div>
    );
  }
}

export default App;
