import MovieCard from '@components/MovieCard'
import MovieGrid from '@components/MovieGrid'
import React from 'react'
import { useMoviesQuery, MoviesDocument, useMovies_By_SlugQuery } from '@data/graphql/generated/graphql'
import DetailView from '@components/DetailView'
import PersonCard from '@components/PersonCard'

type Props = {
	slug: string
}

const MovieView = ({slug}: Props) => {
	
	const {data, loading, error} = useMovies_By_SlugQuery({
		variables: {
			slug
		}
	})
  const { allMovie } = data  || {}

	if (error) {
		return (
			<div>
				<p>Error</p>
				{ error.message }
			</div>
		)
	}

	if (loading) {
		return (
			<div>
				<p>Loading</p>
			</div>
		)
	}

	if ( !allMovie ) {
		return (
			<div>
				<p>No data</p>
			</div>
		)
	}

	// get first movie
	const movie = allMovie[0]

	return (
		<>
			<DetailView
			 	title={movie.title || ''}
				subtitle={movie.releaseDate?.split('-')[0] || ''}
				image={movie.poster?.asset?.url || ''}
			/>
			{
				movie.castMembers && (
					<MovieGrid>
						{
							movie.castMembers.map((castMember, index) => (
								<PersonCard
									key={index}
									name={castMember?.person?.name || ''}
									description={castMember?.characterName || ''}
									avatar={castMember?.person?.image?.asset?.url || ''}
								 />
							))
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

export default MovieView