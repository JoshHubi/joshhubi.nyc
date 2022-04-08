/**
 * @file Grid component
 * 
 * TODO:
 * - Find a better way to load in default items. react.DefaultProps does not work well with the skeleton.
 *
 * @author Josh Hubi
 * @since 4/6/2022
 */

import React from 'react'

import { Link } from 'react-router-dom'

import Button from 'components/button'

interface Props {
	items: Array<Object>
}

function grid(props: Props) {
	let items: Array<Object>
	let title: any
	let image: any
	let tags: any
	let slug: string
	let classes: string

	items = props.items

	const listItems = items.map((item: any) => 
	{
		image = (
			<img alt="Item" className="rounded w-full" src={item.thumbnail}/>
		)
		title = item.title
		slug = `/work/${item.slug}`
		tags = (
			<>
				<span>Web Development</span>
				<span>/</span>
				<span>Design</span>
			</>
		)

		if (!item.slug) {
			classes = `animate-pulse`

			image = (
				<div className="w-full h-[25vw] max-h-[400px]"></div>
			)

			title = (
				<div className="bg-gray-200 rounded w-48 text-gray-200 text-center">:(</div>
			)

			tags = (
				<div className="bg-gray-200 rounded w-40 text-gray-200 text-center mt-2">:(</div>
			)

			slug = '#'
		}

		return (
			<div key={item.id} className={classes}>
				<Link to={slug}>
					<div className="relative hover:scale-[1.01] transition-all bg-gray-200 rounded">
						{image}
						<div className="rounded w-full h-full bg-purple absolute inset-0 opacity-0 hover:opacity-10 transition-all"></div>
					</div>
				</Link>
				<div className="pt-5">
					<Link to={slug}>
						<h1 className="text-lg font-semibold hover:text-purple">
							{title}
						</h1>
						<div className="flex gap-2 text-gray-400">
							{tags}
						</div>
					</Link>
				</div>
			</div>
		)	
	})

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
				{listItems}
			</div>
			<div className="flex justify-center my-20">
				<Button 
					title="Show more"
					to="#"
				/>
			</div>
		</>
	)
}

grid.defaultProps = {
    items: [{id: 1}, {id: 2}, {id: 3}]
}

export default grid
