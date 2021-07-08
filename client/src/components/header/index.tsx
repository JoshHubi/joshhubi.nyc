/**
 * @file Header component
 *
 * @author Josh Hubi
 * @since 6/1/2021
 */

import React from 'react'
import { ReactComponent as Logo } from 'assets/img/logo.svg'
// import styles from './style.module.scss'

export default function Header() {
	return (
		<div className="w-full sm:px-12 py-7 flex items-center">
			<div className="flex-1">
				<Logo />
			</div>
			<div className="justify-end text-lg font-bold pr-2">
				<ul className="flex space-x-7">
					<li>
						<a className="text-purple" href="#">Work</a>
					</li>
					<li>
						<a className="hover:text-purple" href="#">About</a>
					</li>
					<li>
						<a className="hover:text-purple" href="#">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
