import MovieCard from '@components/MovieCard'
import MovieGrid from '@components/MovieGrid'
import React from 'react'
import DetailView from '@components/DetailView'
import PersonCard from '@components/PersonCard'
import { SanityMovie } from '@data/sanity/types/movie'
import { getSanityImageUrl, usePreview } from '@data'
import { MovieBySlugQuery, MovieBySlugQueryParams } from '@data/sanity/getMovieBySlug'
import MovieView from './MovieView'

type Props = {
	slug: string
}

const MovieViewPreview = ({slug}: Props) => {

	const queryParams : MovieBySlugQueryParams = {
		slug
	}

	const movie : SanityMovie = usePreview(null, MovieBySlugQuery, queryParams);

	return (
		<MovieView movie={movie} />
	)
}

export default MovieViewPreview