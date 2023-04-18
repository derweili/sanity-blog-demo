import { addApolloState, initializeApollo } from "@data/client"
import { useMovies_By_SlugQuery, Movies_By_SlugDocument } from "@data/graphql/generated/graphql"
import MovieView from "@views/MovieView"
import { useRouter } from "next/router";

export default function Movie(props : any) {

	// get slug from route
	const router = useRouter()

	const { slug } = router.query

	if(!slug) return null

	return (
		<>
			<MovieView slug={ Array.isArray(slug) ? slug[0] : slug } />
		</>
	)
}

// Path: packages/frontend/src/pages/movies/[slug].tsx
export async function getServerSideProps({ params }: any) {
	const slug = params.slug
	const apolloClient = initializeApollo()

	await apolloClient.query({
		query: Movies_By_SlugDocument,
		variables: {
			slug: slug
		}
	})

	return addApolloState(apolloClient, {
    props: {
			slugs: slug
		},
  })
}

	