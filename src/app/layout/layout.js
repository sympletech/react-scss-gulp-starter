import React from 'react';
import {Link} from 'react-router-dom';

class Layout extends React.Component {
	render() {
		return (
			<div className='layout-wrapper'>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/page2">Page 2</Link>
				</nav>
				{this.props.children}
			</div>
		);
	}
}

export default Layout;
