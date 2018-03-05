import React from 'react'

import * as image from '../../assets/images/me.jpg'
import '../../App.css'

const Home = () => {
	return (
		<main className="home-view">
			{/* <picture className="home-picture">
				<source className="home-background-image" srcset={image} />
				<img className="home-background-image" src={image} alt="Dylan Grant" />
			</picture> */}
			<p className="home-tag-line">Some cathcy tag line</p>
		</main>
	)
}

export default Home
