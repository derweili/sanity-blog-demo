import { sanityClient } from "@data";
import { getMovieBySlug } from "@data/sanity/getMovieBySlug";
import { SanityMovie } from "@data/sanity/types/movie";
import MovieView from "@views/MovieView"
import { useRouter } from "next/router";
import { PreviewSuspense } from "next-sanity/preview";
import dynamic from 'next/dynamic'

const MovieViewPreview = dynamic(() => import("@views/MovieViewPreview"), { ssr: false });

type Props = {
	preview: boolean,
	movie?: SanityMovie
}

export default function Movie({movie, preview}: Props) {

	// get slug from route
	const router = useRouter()

	const { slug } = router.query

	if(!slug) return null

	if ( preview ) return (
		<>
			<PreviewSuspense fallback="Loading...">
				<MovieViewPreview slug={ slug as string } />
			</PreviewSuspense>
		</>
	)

	if (!movie) return null

	return (
		<>
			<MovieView movie={movie} />
		</>
	)
}

// Path: packages/frontend/src/pages/movies/[slug].tsx
export async function getServerSideProps({ params, preview = false }: any) {
  if (preview) {
    return { props: { preview } };
  }

	const slug = params.slug

	const movie = await getMovieBySlug(sanityClient, slug)

	return {
		props: {
			movie,
		},
	}
}

	