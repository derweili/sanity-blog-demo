import MovieCard from '@components/MovieCard'
import MovieGrid from '@components/MovieGrid'
import React from 'react'
import { SanityMovie, getSanityImageUrl } from '@data'

type Props = {
	movies: SanityMovie[]
}

const MoviesArchiveView = ({movies}: Props) => {

	if (!movies) {
		return null
	}

	return (
		<MovieGrid>
			{ /* Loop over 5 times <MovieCard /> */ }

			{
				movies.map((movie) => {
					const { _id, title, slug: {current : currentSlug = ''}, poster, releaseDate } = movie || {}

					const imageUrl = getSanityImageUrl(poster)

					return (
						<MovieCard
							key={_id}
							title={title || ''}
							url={`/movie/${currentSlug || ''}`}
							description={''}
							year={releaseDate?.split('-')[0] || ''}
							image={imageUrl || ''}
						/>
					)
				})
			}
		</MovieGrid>
	)
}

export default MoviesArchiveView