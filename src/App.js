import React, { Component } from 'react'

import Header from './components/widgets/header'
import Home from './components/containers/Home'

import logo from './logo.svg'

import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="home-picture" />
				<Header />
				<Home />

				<footer className="app-footer">
					<p>Footer</p>
				</footer>
			</div>
		)
	}
}

export default App
