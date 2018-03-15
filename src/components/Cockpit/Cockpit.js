import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
	let buttonClass = '';
	if (props.showPersons) {
		buttonClass = classes.Red;
	}

	const buttonClasses = [];
    if (props.persons.length <= 2) {
      buttonClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      buttonClasses.push(classes.bold);
    }

	return (
		<div className={classes.Cockpit} >
			<h1>I'm a React App!</h1>
        	<p className={buttonClasses.join(' ')} >This works</p>
        	<button
    			className={buttonClass}
    			onClick={props.click}>Toggle Persons</button>
		</div>
	);
};

export default cockpit;