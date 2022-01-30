/**
 * @file Routes component for the router
 * 
 * @author Josh Hubi
 * @since 5/25/2021
 */

import React, {
	lazy,
	useLayoutEffect,
	useEffect,
	Suspense,
	useRef
} from 'react'

import {
	Routes,
	Route,
	useLocation
} from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar'

const Home = lazy(() => import('pages/home'))
const NotFound = lazy(() => import('pages/not-found'))

export default function AppRoutes () {
	const { pathname } = useLocation()

	// scroll to the top of the window BEFORE the dom is updated to prevent jank when switching routes
	useLayoutEffect(() => {
		window.scrollTo (0, 0)
	}, [pathname])

	const Loading = () => {
		const loadingRef = useRef<any>(null)

		useEffect(() => {
			loadingRef.current.continuousStart()
		})

		return (
			<LoadingBar color='#FFE66D' ref={loadingRef} />
		)
	}

	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	)
}
