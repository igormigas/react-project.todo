import React from 'react';

import classes from './Credits.scss'

const credits = (props) => {
	return (
		<div className={classes.Credits}>
			<p><b>Todo Application (Concept)</b><br />
			made with React<br />
			by Igor Migasiewcz (<a href="https://github.com/igormigas/react-project.todo">github</a>)</p>
			<p>last update: 5 Sept 2018</p>
		</div>
	);
};

export default credits;