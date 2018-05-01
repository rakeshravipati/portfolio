import React from 'react'

import Tile from '../widgets/tile'

const Portfolio = ({ isVisibile, data }) => {
	const styles = {
		width: isVisibile ? '100%' : '0',
	}

	const projectList = () => {
		return data.map((item) => {
			return <Tile info={item} />
		})
	}

	return (
		<section className="portfolio-view" style={styles}>
			<div className="section-wrapper masonry-grid">{projectList()}</div>
		</section>
	)
}

export default Portfolio
