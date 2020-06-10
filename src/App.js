import React, {Component}  from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';
import users from './users';

class App extends Component{
  constructor(){
    super();
    this.state = { 
      monsters:  [],
      searchField:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({monsters: users});
  }

handleChange = e => {
this.setState({ searchField: e.target.value})
}
  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
<h1>Monsters Cards</h1>
 <SearchBox
 placeholder='search monsters'
 handleChange={this.handleChange}
 />
<CardList monsters={filteredMonsters} /> 
    </div>
    );

  }
}
  


export default App;
