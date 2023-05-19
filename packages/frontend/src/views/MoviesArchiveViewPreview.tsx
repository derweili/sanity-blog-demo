'use client';
import MovieCard from '@components/MovieCard'
import MovieGrid from '@components/MovieGrid'
import React from 'react'
import { GetMoviesQuery, SanityMovie, getSanityImageUrl } from '@data'
import { usePreview } from '@data'
import MoviesArchiveView from './MoviesArchiveView'

const MoviesArchiveViewPreview = () => {

	const movies : SanityMovie[] = usePreview(null, GetMoviesQuery);

	return (
		<MoviesArchiveView movies={movies} />
	)
}

export default MoviesArchiveViewPreview