import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
	constructor(props) {
		super(props);
		console.log('[Person.js] Inside constructor', props);
	};
	
	componentWillMount() {
		console.log('[Person.js] Inside componentWillMount()');
	}
	
	componentDidMount() {
		console.log('[Person.js] Inside componentDidMount()');
		if (this.props.position === 0) {
			this.inputElement.focus();
		}
	}

	componentWillUnmount() {
		// Component is about to get removed => Perform any cleanup work here!
		console.log('[componentWillUnmount()] I\'m about to be removed!');
	}
	
	render () {
		console.log('[Person.js] Inside render()');
		return (
			<Fragment>
				<p onClick={this.props.click}>I'm {this.props.name}, and I'm {this.props.age}!</p>
				<p>{this.props.children}</p>
				<input
					ref={(inp) => { this.inputElement = inp }}
					type="text"
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Fragment>
		)
		// return ([
		// 	<p key="1" onClick={this.props.click}>I'm {this.props.name}, and I'm {this.props.age}!</p>,
		// 	<p key="2" >{this.props.children}</p>,
		// 	<input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
		// ])
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default withClass(Person, classes.Person);