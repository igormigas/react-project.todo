import React from 'react';

import classes from './CardBar.scss'

class CardBar extends React.Component {
	
	state = {
		inputValue: '',
	}

	onKeyPressHandler = (e) => {
		if (e.key === 'Enter') {
			const name = e.target.value;

			if (!name) {
				console.log('[Home]: Empty name of new card');
				return;
			}

			this.props.eventSubmit(name);
			this.setState({
				inputValue: ''
			})
		}
	}

	render() {
		return (
			<div className={classes.Bar}>
				New card:
				<input
					name="new-card"
					onChange={e => this.setState({inputValue: e.target.value})}
					onKeyPress={this.onKeyPressHandler}
					value={this.state.inputValue} />
			</div>
		);
	}
}

export default CardBar;