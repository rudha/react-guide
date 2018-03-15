import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

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
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        click={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
        showPersons={this.showPersons}
        persons={this.state.persons}
        click={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
