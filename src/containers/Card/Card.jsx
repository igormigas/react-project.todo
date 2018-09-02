import React from 'react';

import CardItem from '../CardItem/CardItem';

import classes from './Card.scss';

class Card extends React.Component {
	
	constructor(props) {
		super(props);
		let todos, totalActive, totalTodos;

		if (this.props.data === undefined) {
			todos = [];
			totalActive = 0;
			totalTodos = 0;
		} else {
			todos = this.props.data;
			totalActive = this.countActiveTodos(this.props.data);
			totalTodos = this.props.data.length;
		}

		this.state = {
			label: this.props.label,
			todos: todos,
			totalActive: totalActive,
			totalTodos: totalTodos,
			valueNewLabelInput: this.props.label,
			valueNewTodoInput: '',
			isTodoInputFocused: false,
			isLabelEdit: false,
			isCardDeleted: false,
		}
	}

	countActiveTodos(array = this.state.todos) {
		let count = 0;
		for (let item of array) {
			if (item.active) count++;
		}
		return count;
	}

	onTodoStateChangeHandler = (i, activity) => {
		const newList = [...this.state.todos];
		newList[i] = {
			...this.state.todos[i],
			active: activity
		}
		this.setState({
			todos: newList,
			totalActive: this.countActiveTodos(newList),
		})
	}

	onTodoDeleteHandler = (i) => {
		const newList = this.state.todos.filter( (item, key) => key !== i );
		let newListCount = newList.length;
		setTimeout(() => {
			this.setState({
				todos: newList,
				totalTodos: newList.length,
				totalActive: this.countActiveTodos(newList),
			})
		}, 600);
	}

	onTodoInputFocused = () => {
		this.setState({
			isTodoInputFocused: true,
		})
	}

	onTodoInputBlurred = () => {
		this.setState({
			isTodoInputFocused: false,
			valueNewTodoInput: '',
		})
	}

	onTodoInputSubmit = (e) => {
		if (e.key === 'Enter') {
			const name = e.target.value;

			if (!name) {
				console.log('[Card]: Empty name of new todo');
				return;
			}

			const newList = [
				...this.state.todos,
				{id: new Date(), label: e.target.value, active: true}
			];

			this.setState({				
				todos: newList,
				totalTodos: newList.length,
				totalActive: this.countActiveTodos(newList),
				valueNewTodoInput: ''
			})
		}
	}

	onLabelEditHandler = () => {
		this.setState({
			isLabelEdit: true
		})
	}

	onLabelSubmitHandler = (e) => {
		if (e.key === 'Enter') {
			const name = e.target.value;

			if (!name) {
				console.log('[Card]: Empty name of new label');
				return;
			}

			this.setState({
				label: name,
				isLabelEdit: false
			})
		}
	}

	onLabelBlurredHandler = () => {
		this.setState({
			isLabelEdit: false
		})
	}

	onCardDelete = () => {
		this.props.eventDelete();
		this.setState({
			isCardDeleted: true
		});
	}

	renderTodos() {
		return this.state.todos.map( (item, i) => {
			return (
				<CardItem
					key={item.id}
					id={item.id}
					active={item.active}
					label={item.label}
					description={item.description}
					data={item}
					eventDelete={() => this.onTodoDeleteHandler(i)}
					eventStateChange={(act) => this.onTodoStateChangeHandler(i, act)} />
			);
		})
	}

	render() {
		let css = () => {
			let array = [];
			if (this.state.isCardDeleted) array.push(classes.deleted);

			if (array.length > 0) {
				return ' ' + array.join(' ');
			}
			return '';
		}

		let label = this.state.isLabelEdit ? (
			<input				
				onChange={e => this.setState({valueNewLabelInput: e.target.value})}
				onBlur={this.onLabelBlurredHandler}
				onKeyPress={this.onLabelSubmitHandler}
				ref={input => this.refInputLabel = input}
				value={this.state.valueNewLabelInput} />
		) : this.state.label;
		let progressBarWidth = this.state.totalTodos > 0 ? (1 - this.state.totalActive / this.state.totalTodos) * 100 : 0;

		return (
			<div className={classes.Card + css()}>
				<div className={classes.CardHeader}>
					<div
						className={classes.Label}
						onDoubleClick={this.onLabelEditHandler}>
						{label}</div>
					<div className={classes.SettingsBox}>
						<i
							className="far fa-edit"
							onClick={this.onLabelEditHandler} />
						<i
							className="fas fa-trash-alt"
							onClick={this.onCardDelete} />
					</div>
				</div>
				<div
					className={classes.ProgressBar}
					style={{'width': progressBarWidth + '%'}} />
				<ul className={classes.List}>
					{this.state.totalTodos > 0 ? this.renderTodos() : <li className={classes.CardNoTodos}>No todos here!</li>}
				</ul>
				<div
					onFocus={this.onTodoInputFocused}
					onBlur={this.onTodoInputBlurred}>
					<input
						name="new-todo"
						placeholder="new todo..."
						onChange={e => this.setState({valueNewTodoInput: e.target.value})}
						onKeyPress={this.onTodoInputSubmit}
						value={this.state.valueNewTodoInput} />
						{this.state.isTodoInputFocused ? <input name="new-description" placeholder="description (optional)" /> : null}
					</div>
			</div>
		);
	}

	componentDidUpdate() {
		if (this.state.isLabelEdit) {
			this.refInputLabel.focus();
		}
	}
}

export default Card;