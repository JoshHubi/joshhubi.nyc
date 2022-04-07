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

function MenuLink({ children, to, ...props }: LinkProps) {
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
		<div className="w-full flex items-center px-5 py-7 lg:px-12">
			<div className="flex-1">
				<div className="w-fit">
					<Link to="/"><Logo /></Link>
				</div>
			</div>
			<div className="justify-end text-lg font-bold pr-2">
				<ul className="flex space-x-7">
					<MenuLink to="/">Work</MenuLink>
					<MenuLink to="/about">About</MenuLink>
					<MenuLink to="/contact">Contact</MenuLink>
				</ul>
			</div>
		</div>
	)
}
