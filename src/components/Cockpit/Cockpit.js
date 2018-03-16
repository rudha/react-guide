import React, {Fragment} from 'react';
import classes from './Cockpit.css';
//import Aux from '../../hoc/Aux';

const cockpit = (props) => {
	const assignedClasses = [];
	let buttonClass = classes.Button;
	if (props.showPersons) {
		buttonClass = [classes.Button, classes.Red].join(' ');
	}

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

	return (
		<Fragment>
			<h1>I'm a React App!</h1>
        	<p className={assignedClasses.join(' ')} >This works</p>
        	<button
    			className={buttonClass}
    			onClick={props.click}>Toggle Persons</button>
		</Fragment>
	);
};

export default cockpit;