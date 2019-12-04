import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ArtistSearch from './search/ArtistSearch';

const listennotes_key = process.env.REACT_APP_LISTENNOTES_KEY;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      searchValue: ''
    };
  }

  onChange = (event) => {
    this.setState({searchValue: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    let query = this.state.searchValue;
    axios.get('https://listen-api.listennotes.com/api/v2/search?', { 
      headers: {
        "X-ListenAPI-Key":listennotes_key
      },
      params: {
        'q': query
      }
    })
      .catch( error => {
        console.log('no results', error)
      })
      .then(response => {
        this.setState({
          searchResults: response.data.results,
          searchValue: ''
        })
      })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' value={this.state.searchValue} onChange={this.onChange}/>
          <button>Search</button>
        </form>
        <ArtistSearch results={this.state.searchResults}/>
      </div>
    )
  }
}

export default App;
