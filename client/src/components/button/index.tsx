/**
 * @file The gatto spotted a button and swatted it.
 *
 * @author Josh Hubi
 * @since 4/7/2022
 */

import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props: any) {
	let styles = 'bg-dark text-white text-md font-medium py-2 px-4 rounded-full hover:bg-purple transition-all'
	
	switch (props.type) {
		case 'router':
			return (
				<Link
					to={props.to}
					onClick={props.customClickEvent}
					className={styles}>
					{props.title}
				</Link>
			)
		default:
			return (
				<a
					className={styles}
					rel="noreferrer"
					onClick={props.customClickEvent}
					target="_blank"
					href={props.to}>
					{props.title}
				</a>
			)
	}
}
