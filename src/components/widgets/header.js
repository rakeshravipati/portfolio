import React from 'react'
import { Sticky } from 'semantic-ui-react'

import '../../App.css'

const Header = () => {
	return (
		<header className="app-header">
			<span className="header-my-name">Dylan Grant</span>
			<ul className="header-nav">
				<li className="header-nav-item">Home</li>
				<li className="header-nav-item">About</li>
				<li className="header-nav-item">Portfolio</li>
				<li className="header-nav-item">Idioms</li>
				<li className="header-nav-item">Contact</li>
			</ul>
		</header>
	)
}

export default Header
