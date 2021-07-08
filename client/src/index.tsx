/**
 * @file Main app entry point
 *
 * @author Josh Hubi
 * @since 5/25/2021
 */

import React from 'react'
import ReactDOM from 'react-dom'

import './scss/main.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/app/'

ReactDOM.render (
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
