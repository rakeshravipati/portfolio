import React from 'react'
// import { Form, Button } from 'semantic-ui-react'

const Idioms = ({ isVisibile, data }) => {
	const styles = {
		width: isVisibile ? '100%' : '0',
	}

	console.log('idioms data', data)
	const list = () => {
		return data.map((item) => {
			return <li>{item.title}</li>
		})
	}

	return (
		<section className="idioms-view" style={styles}>
			<div className="section-wrapper">
				<ul>{list()}</ul>
			</div>
		</section>
	)
}

export default Idioms
