import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 18 },
      { name: 'Chloe', age: 19},
      { name: 'Steph', age: 18}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 18 },
        { name: 'Chloe', age: 19},
        { name: 'Steph', age: 19}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 18 },
        { name: event.target.value, age: 19},
        { name: 'Steph', age: 18}
      ]
    })
  }

  render() {
    const styleButton = {
      backgroundColor: '#eee',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>I'm a React App!</h1>
        <button
          style={styleButton}
          onClick={() => this.switchNameHandler('Maxine')}>Change Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>My hobbies: Shooting</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
