import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      title: 'Monsters',
      searchValue: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(monsters => this.setState({ monsters }));
  }

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { title, monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLocaleLowerCase()));

    return (
      <div className='App'>
        <h1 className='header'>{title}</h1>
        <SearchBox placeholder='Search for monsters' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
