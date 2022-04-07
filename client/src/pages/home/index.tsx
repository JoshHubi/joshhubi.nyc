/**
 * @file Hold on, If love is the answer you're home.
 *
 * @author Josh Hubi
 * @since 5/25/2021
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Grid from 'components/grid'

import styles from './style.module.scss'
import moon from 'assets/img/moon.svg'
import me from 'assets/img/me.jpg'

export default function home() {
	return (
		<div className={styles.home}>
			<Helmet>
                <title>I am Josh Hubi</title>
            </Helmet>
			<div className="font-crimson py-20 max-w-[59rem] m-auto relative overflow-hidden p-5">
				<img className={styles.moon} alt="moon" src={moon} />
				<div className="text-center max-w-[42rem] m-auto text-[2.5rem] leading-[2.8rem]">
					I am Josh Hubi <Link to="/about">
						<img className="cursor-pointer inline-block align-bottom h-10 rounded-full sm:mx-0 sm:shrink-0 hover:scale-125 transition-all" alt="Josh Hubi" src={me} />
						</Link>, a full stack developer and producer crafting <strong><em className="font-crimson italic">digital products</em></strong>
				</div>
			</div>

			<div className="max-w-[1600px] mx-auto p-5">
				<Grid />
			</div>
		</div>
	)
}
