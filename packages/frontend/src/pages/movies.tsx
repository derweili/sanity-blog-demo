/**
 * This is the Movies page.
 */

import client from '../data/client';
import React from 'react';

export default function Movies({ movies }) {
	console.log(movies);
	return <div>This is the Movies page.</div>;
}

export async function getServerSideProps() {
	const movies = await client.fetch(`
	*[_type == "movie"]
`)

	return {
		props: {
			movies,
		},
	}
}
