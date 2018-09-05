import React from 'react';

import classes from '../Card/Card.scss'

class CardItem extends React.Component {
	
	state = {
		id: this.props.id,
		active: this.props.active,
		priority: this.props.data.priority,
		mouseOver: false,
		justChanged: false,
		deleted: false,
	}

	onTickClickHandler = () => {
		let newState = !this.state.active;
		this.props.eventStateChange(newState);
		this.setState({
			active: newState,
			justChanged: true
		});
	}

	onTickMouseOver = () => {
		this.setState({mouseOver: true})
	}

	onTickMouseLeave = () => {
		this.setState({
			mouseOver: false,
			justChanged: false,
		})
	}

	onItemPriorityChange = () => {
		this.setState({
			priority: !this.state.priority
		})
	}

	onItemDelete = () => {
		this.props.eventDelete();
		this.setState({
			deleted: true
		})
	}

	render() {
		let css = () => {
			let array = []
			if (!this.state.active) array.push(classes.checked);
			if (this.state.deleted) array.push(classes.deleted);
			if (this.state.active && this.state.priority) array.push(classes.priority);

			if (array.length > 0) {
				return ' ' + array.join(' ');
			}
			return '';
		}
		
		let bool = !this.state.active;
		if (this.state.mouseOver && !this.state.justChanged) bool = !bool;

		let checkbox = bool
			? <i className="far fa-check-square" />
			: <i className="far fa-square" />

		let priorClasses = this.state.priority ? 'fas fa-star' : 'far fa-star'

		return (
			<><li
				className={classes.CardItem + css()}>
				<div
					className={classes.Checkbox}
					onClick={this.onTickClickHandler}
					onMouseOver={this.onTickMouseOver}
					onMouseLeave={this.onTickMouseLeave}>
					{checkbox}
				</div>
				<div
					className={classes.Content}					
					>
					<span className={classes.Label}>
						{this.props.label}
					</span>
					<span className={classes.Description} >
						{this.props.description}
					</span>
				</div>
				<div
					className={classes.SettingsBox}>
						<i className={priorClasses} onClick={this.onItemPriorityChange} />
						<i className="far fa-edit" />
						<i
							className="fas fa-trash-alt"
							onClick={this.onItemDelete} />
				</div>
			</li></>
		);
	}
}

export default CardItem;