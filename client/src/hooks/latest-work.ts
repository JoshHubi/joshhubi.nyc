/**
 * @file Hook to pull latest work items from our Strapi CMS instance.
 * 
 * @author Josh Hubi
 * @since 4/8/2022
 */

import axios from 'axios'

export default async function latestWorkItems(limit: number) {
	
	return await axios.get('http://localhost:3001/api/works')
		.then(response => {
			console.log(response)
			return response
		}).catch((err: any) => {
			console.error(err)
		})
}
