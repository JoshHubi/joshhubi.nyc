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
	Switch,
	Route,
	useLocation
} from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar'

const home = lazy(() => import('pages/home'))
const notFound = lazy(() => import('pages/not-found'))

const routes = [
	{
		exact: true,
		path: '/',
		component: home
	},
	{
		path: '*',
		component: notFound
	}
]

// Sub route wrapper
function RouteWithSubRoutes (route: any) {
	return (
		<Route
			path = { route.path }
			exact = { route.exact }
			render = { 
				props => (
					// pass the sub-routes down to keep nesting
					<route.component { ... props } routes = { route.routes } />
				)
			}
		/>
	)
}

export default function Routes () {
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
			<Switch>
				{ 
					routes.map ((route, i) => (
						<RouteWithSubRoutes key = { i } { ... route } />
					))
				}
			</Switch>
		</Suspense>
	)
}
