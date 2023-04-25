import { sanityClient } from "@data";
import { getMovieBySlug } from "@data/sanity/getMovieBySlug";
import { SanityMovie } from "@data/sanity/types/movie";
import MovieView from "@views/MovieView"
import { useRouter } from "next/router";
import { PreviewSuspense } from "next-sanity/preview";
import dynamic from 'next/dynamic'
import { GetServerSideProps, GetServerSidePropsResult } from "next";

const MovieViewPreview = dynamic(() => import("@views/MovieViewPreview"), { ssr: false });

type Props = {
	preview?: boolean,
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

export const getServerSideProps : GetServerSideProps<Props> = async ({ params, preview = false, query }: any) => {

	const { skipPreview } = query

  if (preview && !skipPreview) {
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

	