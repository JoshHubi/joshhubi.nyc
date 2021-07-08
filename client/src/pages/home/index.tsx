/**
 * @file Hold on, If love is the answer you're home.
 *
 * @author Josh Hubi
 * @since 5/25/2021
 */

import React from 'react'
import { ReactTitle } from 'react-meta-tags'

import styles from './style.module.scss'
import moon from 'assets/img/moon.svg'

export default function home() {
	return (
		<div className={styles.home}>
			<ReactTitle title='I am Josh Hubi' />
			<div className="font-crimson py-20 max-w-[59rem] m-auto relative overflow-hidden">
				<img className={styles.moon} src={moon} />
				<div className="text-center max-w-[42rem] m-auto text-[2.5rem] leading-[2.8rem]">
					I am Josh Hubi, a full stack developer and technologist crafting <strong><em className="font-crimson italic">digital products</em></strong>
				</div>
			</div>
		</div>
	)
}
