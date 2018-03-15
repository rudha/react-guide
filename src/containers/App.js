import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor');
    this.state = { // Initializing state in constructor...
      persons: [
        { id: 'fasd', name: 'Max', age: 18 },
        { id: 'adsf', name: 'Chloe', age: 19},
        { id: 'afds', name: 'Steph', age: 18}
      ],
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
	// 	return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
	// }

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
	}

	componentDidUpdate () {
		console.log('[UPDATE App.js] Inside componentDidUpdate');
	}
  
  // state = { // As opposed to initializing it here
  //   persons: [
  //     { id: 'fasd', name: 'Max', age: 18 },
  //     { id: 'adsf', name: 'Chloe', age: 19},
  //     { id: 'afds', name: 'Steph', age: 18}
  //   ],
  //   showPersons: false
  // }

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
    console.log('[App.js] Inside render()');
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
        <button onClick={() => {this.setState({showPersons: true})}} >Show Persons</button>
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
