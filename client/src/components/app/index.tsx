/**
 * @file Root app component
 *
 * @author Josh Hubi
 * @since 5/25/2021
 */

import React from 'react'
import AppRoutes from 'router'

import Header from 'components/header'
import Footer from 'components/footer'

export default function App () {
	return (
		<div className="app">
			<Header />
			<AppRoutes />
			<Footer />
		</div>
	)
}
