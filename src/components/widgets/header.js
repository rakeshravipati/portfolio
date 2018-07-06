import React from 'react'
import { Sticky } from 'semantic-ui-react'

import '../../App.css'

const Header = ({ clickHandler }) => {
	return (
		<header className="app-header">
			<span className="header-my-name" onClick={clickHandler}>
				Dylan Grant
			</span>
			<ul className="header-nav">
				<li
					className="header-nav-item"
					onClick={clickHandler}
					data-view-visibility="ABOUT">
					About
				</li>
				<li
					className="header-nav-item"
					onClick={clickHandler}
					data-view-visibility="PORTFOLIO">
					Portfolio
				</li>
				{/* <li
					className="header-nav-item"
					onClick={clickHandler}
					data-view-visibility="IDIOMS">
					Idioms
				</li> */}
				<li
					className="header-nav-item"
					onClick={clickHandler}
					data-view-visibility="CONTACT">
					Contact
				</li>
			</ul>
		</header>
	)
}

export default Header
