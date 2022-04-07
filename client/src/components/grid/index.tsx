/**
 * @file Grid component
 *
 * @author Josh Hubi
 * @since 4/6/2022
 */

import React from 'react'

import { Link } from 'react-router-dom'

import Button from 'components/button'
import ItemImage from 'assets/img/work_item.png'
//  import styles from './style.module.scss'

export default function Grid() {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
				<div className="">
					<Link to="/work/ea">
						<div className="relative hover:scale-[1.01] transition-all">
							<img alt="Item" className="rounded w-full" src={ItemImage} />
							<div className="rounded w-full h-full bg-purple absolute inset-0 opacity-0 hover:opacity-10 transition-all"></div>
						</div>
					</Link>
					<div className="pt-5">
						<Link to="/work/item">
							<h1 className="text-lg font-semibold hover:text-purple">
								Electronic Arts
							</h1>
							<div className="flex gap-2 text-gray-400">
								<span>Web Development</span>
								<span>/</span>
								<span>Design</span>
							</div>
						</Link>
					</div>
				</div>
				
			</div>

			<div className="flex justify-center my-20">
				<Button 
					title="Show more"
					to="https://google.com"
				/>
			</div>
		</>
	)
}
