import React from 'react';

import classes from './Icon.scss';

const icon = (props) => {
	return (
		<i
			className={props.name + ' ' + classes.Icon}
			onClick={props.clickEvent} />
	);
};

export default icon;