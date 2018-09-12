import React from 'react';

// Main CSS source
//import './styles/bootstrap/bootstrap-grid.css';
import './styles/global.scss';

// React Components
import Layout from './containers/Layout';
import Home from './containers/Home/Home';

class App extends React.Component {
	render() {
		return (
			<Layout>
				<Home />
			</Layout>
		);
	}
}

export default App;