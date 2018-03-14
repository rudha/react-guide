import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'fasd', name: 'Max', age: 18 },
      { id: 'adsf', name: 'Chloe', age: 19},
      { id: 'afds', name: 'Steph', age: 18}
    ],
    showPersons: false
  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice(); // Copy the original array
    const persons = [...this.state.persons]; // Spread the original array
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] // Spread the array element into person
    };

    person.name = event.target.value; // Get the updated name into the copied person

    const persons = [...this.state.persons]; // Get a new array from persons
    persons[personIndex] = person; // Insert the updated name into the array

    this.setState({persons: persons}); // Send the updated array into the state
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const styleButton = {
      backgroundColor: '#eee',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I'm a React App!</h1>
        <button
          style={styleButton}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
