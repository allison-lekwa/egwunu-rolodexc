import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      egwunu : [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({egwunu: users}));
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value});
  }

  render() {
    const { egwunu, searchField } = this.state;
    const filteredEgwunu = egwunu.filter(egwunu =>
      egwunu.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Egwunu Rolodex</h1>
        
        <SearchBox 
          placeholder= "search egwunu"
          handleChange={this.handleChange}
        />

        <CardList egwunu={filteredEgwunu}></CardList>
       
      </div>
    );

  }
}



export default App;
