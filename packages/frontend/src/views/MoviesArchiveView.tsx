import MovieCard from '@components/MovieCard'
import MovieGrid from '@components/MovieGrid'
import React, { useEffect, useState } from 'react'
import { SanityMovie, getSanityImageUrl, sanityClient, subscribeToNews } from '@data'
import CtaButton from '@components/CtaButton'

type Props = {
	movies: SanityMovie[]
}

const MoviesArchiveView = ({movies}: Props) => {

	if (!movies) {
		return <div>No movies</div>
	}

	return (
		<MovieGrid>
			{
				movies.map((movie) => {
					const { _id, title, slug: {current : currentSlug = ''} = {}, poster, releaseDate } = movie || {}

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