import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
	const assignedClasses = [];
	let btnClass = classes.Button;
	if(props.showPersons){
		btnClass = [classes.Button, classes.Red].join(' ');
	}
    if(props.persons.length <= 2){
      assignedClasses.push(classes
      	.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
	return(
		<>
			<h1>React Application</h1>
	        <p className={assignedClasses.join(' ')}>TESTING</p>
	        <button
	          className={btnClass}
	          onClick={props.clicked}>Show Persons</button>
	    </>
	);
};

export default cockpit;
