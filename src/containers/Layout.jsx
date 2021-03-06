import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Layout.css'

class Layout extends React.Component {
	
	state = {
		showSidebar: false,
		scrolling: false,
	}	

	toggleSidedrawerHandler = () => {
		this.setState({
			showSidebar: !this.state.showSidebar
		})
	}

	closeSidedrawerHandler = () => {
		this.setState({
			showSidebar: false
		})
	}

	handleScroll = () => {
		console.log('scrolling...');
		let windowY = window.scrollY;
		if (this.state.scrolling === false && windowY > 100) {
			this.setState({
				scrolling: true
			});
		}
		if (this.state.scrolling === true && windowY < 100) {
			this.setState({
				scrolling: false
			});
		}
	}

	componentDidMount() {
		//window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		//window.removeEventListener('scroll', this.handleScroll);
	}

	render() {

		return (
			<div className={'App ' + classes.App}>
				
				<main className={classes.Main}>
					{this.props.children}
				</main>
			</div>
		);
	}
}

export default Layout;