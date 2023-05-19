import { SanityMovie, getMovies, sanityClient } from '@data'
import MoviesArchiveView from '@views/MoviesArchiveView'
import MoviesArchiveViewPreview from '@views/MoviesArchiveViewPreview'
import { draftMode } from 'next/headers'
import React from 'react'

type Props = {}

const Homepage = async (props: Props) => {
	const movies = await getMovies(sanityClient) || []

	const { isEnabled } = draftMode();

	if ( isEnabled ) {
		return <MoviesArchiveViewPreview />
	}

	if (!movies) {
		return <div>No movies</div>
	}

	return (
		<>
			<MoviesArchiveView movies={movies} />
		</>
	)
}

export default Homepage