import { addApolloState, initializeApollo } from "@data/client"
import { useMovies_By_SlugQuery, Movies_By_SlugDocument } from "@data/graphql/generated/graphql"

export default function Movie(props : any) {
	
	const { data, loading, error} = useMovies_By_SlugQuery({
		variables: {
			slug: props.slugs
		}
	})

	const movie = data && data.allMovie[0] || null

	global.console.log(data, loading, error)

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error: {error.message}</p>

	if (!movie) return <p>Not found</p>

	return (
		<>
			<h1>Movie</h1>
			<p>{movie.title}</p>
			<p>{movie.slug?.current}</p>

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

	