import React from 'react';

import Card from '../Card/Card';
import CardBar from '../CardBar/CardBar';
import Credits from '../../components/Credits/Credits';

import { defaultCards, defaultTodos } from '../../defaults/todos';
import classes from './Home.css';

class Home extends React.Component {
	
	state = {
		cards: defaultCards,
		todos: this.mapTodos(defaultTodos),
	}

	onNewCardSubmit = (newName) => {
		let highestID = 0;
		for (let item of this.state.cards) {
			if (item.id > highestID) highestID = item.id;
		}

		this.setState( prevState => ({
			cards: [
				...prevState.cards,
				{id: highestID + 1, label: newName}
			]
		}))
	}

	onCardDelete = (id) => {
		setTimeout(() => {
			this.setState( prevState => ({
				cards: prevState.cards.filter( item => item.id !== id )
			}))
		}, 600);
	}

	mapTodos(defaults) {
		const todos = [...defaults];
		const newDatabase = [];
		for (let i=0, len=todos.length; i<len; i++) {
			if (newDatabase[todos[i].card_id] === undefined) {
				newDatabase[todos[i].card_id] = [];
			}
			newDatabase[todos[i].card_id].push(todos[i]);			
		}
		return newDatabase;
	}

	render() {
		return (
			<div className={classes.wrapper}>
				<Credits />
				<CardBar eventSubmit={this.onNewCardSubmit} />
				<div className={classes.FlexContainer}>
					{this.state.cards.map( card => (
						<Card
							key={card.id}
							label={card.label}
							data={this.state.todos[card.id]} //defaultTodos
							eventDelete={() => this.onCardDelete(card.id)} />
					))}
				</div>
			</div>
		);
	}
}

export default Home;