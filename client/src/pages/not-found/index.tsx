/**
 * @file Where are we?!?
 *
 * @author Josh Hubi
 * @since 5/25/2021
 */

import React from 'react'
import { Helmet } from 'react-helmet'

import Button from 'components/button'

export default function home () {
	return (
		<div>
			<Helmet>
                <title>Page not found - Josh Hubi</title>
            </Helmet>
			<div className="p-16">
				<h2 className="text-7xl text-center font-semibold">404</h2>
				<p className="text-center text-3xl">The page you're looking for is not here but this cat is <img className="inline-block align-bottom h-10 rounded-full sm:mx-0 sm:shrink-0 hover:scale-125 transition-all" alt="Cat" src="https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/200w.webp" /></p>
				<div className="flex justify-center mt-5">
					<Button 
						type="router"
						title="Turn around"
						to="/"
					/>
				</div>
			</div>
		</div>
	)
}
