import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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

      styleButton.backgroundColor = 'red';
      styleButton[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>I'm a React App!</h1>
          <p className={classes.join(' ')} >This works</p>
          <button
            style={styleButton}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
