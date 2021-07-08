/**
 * @file Where are we?!?
 *
 * @author Josh Hubi
 * @since 5/25/2021
 */

import React from 'react'
import { ReactTitle } from 'react-meta-tags'

import styles from './style.module.scss'

export default function home () {
	return (
		<div className={styles.home}>
			<ReactTitle title='Page Not Found - Josh Hubi'/>
			{`help computer`}
		</div>
	)
}
