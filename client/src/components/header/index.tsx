/**
 * @file Header component
 *
 * @author Josh Hubi
 * @since 4/6/2022
 */

import React from 'react'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

import { ReactComponent as Logo } from 'assets/img/logo.svg'

function CustomLink({ children, to, ...props }: LinkProps) {
	let resolved = useResolvedPath(to)
	let match = useMatch({ path: resolved.pathname, end: true })

	return (
		<li>
			<Link
			className={match ? "text-purple" : "hover:text-purple"}
			to={to}
			{...props}
		>
			{children}
			</Link>
		</li>
	)
}

export default function Header() {
	return (
		<div className="w-full sm:px-12 py-7 flex items-center">
			<div className="flex-1">
				<Link to="/"><Logo /></Link>
			</div>
			<div className="justify-end text-lg font-bold pr-2">
				<ul className="flex space-x-7">
					<CustomLink to="/">Work</CustomLink>
					<CustomLink to="/about">About</CustomLink>
					<CustomLink to="/contact">Contact</CustomLink>
				</ul>
			</div>
		</div>
	)
}
