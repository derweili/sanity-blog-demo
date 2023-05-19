import { SanityNews, getMovies, getNews, sanityClient } from '@data'
import { getMovieBySlug } from '@data/sanity/getMovieBySlug'
import MovieView from '@views/MovieView'
import MovieViewPreview from '@views/MovieViewPreview'
import { PreviewSuspense } from 'next-sanity/preview'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import React from 'react'

const MoviePage = async ({ params }: { params: { slug: string } }) => {

	const slug = params.slug
	const movie = await getMovieBySlug(sanityClient, slug)


	const { isEnabled: isDraftModeEnabled } = draftMode();

	if ( isDraftModeEnabled ) {
		return (
			<MovieViewPreview slug={ slug } />
		)
	}

	if (!movie) return <div>No movie</div>

	return <MovieView movie={movie} />
}

export default MoviePage

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const movies = await getMovies(sanityClient) || []
 
  return movies.map((movie) => ({
    slug: movie.slug
  }));
}