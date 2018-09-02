import React from 'react';

// Main CSS source
//import './styles/bootstrap/bootstrap-grid.css';
import './styles/global.scss';

// React Components
import Home from './containers/Home/Home';

class App extends React.Component {
	render() {
		return <Home />;
	}
}

export default App;