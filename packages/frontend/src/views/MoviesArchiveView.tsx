import MovieCard from '@components/MovieCard'
import MovieGrid from '@components/MovieGrid'
import React from 'react'
import { useMoviesQuery, MoviesDocument } from '@data/graphql/generated/graphql'

type Props = {}

const MoviesArchiveView = (props: Props) => {
	
	const {data, loading, error} = useMoviesQuery()
	console.log('MoviesArchiveView', loading, data);
  const { allMovie } = data  || {}

	if (error) {
		return (
			<div>
				<p>Error</p>
				{ error.message }
			</div>
		)
	}

	return (
		<>
			{
				loading ? <p>Loading...</p> : <p>Loaded</p>
			}

			{
				allMovie && (
					<MovieGrid>
						{ /* Loop over 5 times <MovieCard /> */ }

						{
							allMovie.map((movie) => {
								const { title, releaseDate, slug, poster } = movie || {}
								const { asset } = poster || {}

								const { url : imageUrl } = asset || {}

								return (
									<MovieCard
										key={movie._id}
										title={movie.title || ''}
										url={`/movie/${slug?.current || ''}`}
										image={imageUrl || ''}
										description={''}
										year={releaseDate?.split('-')[0] || ''}
										/>
								)
							})
						}
					</MovieGrid>
				) 
			}
		</>
	)
}

export const MoviesViewQueries = [
	MoviesDocument
]

export default MoviesArchiveView