import { DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import { SEOPane } from 'sanity-plugin-seo-pane'

// get base url from env if exist
const baseUrl = process.env.FRONTEND_BASE_URL || 'http://localhost:3100'

/**
 * Resolve movie production url
 * 
 * @param document 
 * @returns {url} string
 */
const resolveMovieProductionUrl = (document: any) => {
	const slug = document?.slug?.current
	const url = `${baseUrl}/movie/${slug}/`

	return url
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
	switch (schemaType) {
		case `movie`:
			return S.document().views([
				S.view.form(),
				S.view
					.component(SEOPane)
					.options({
						// Retrieve the keywords and synonyms at the given dot-notated strings
						keywords: `seo.keywords`,
						synonyms: `seo.synonyms`,
						url: (doc: any) => resolveMovieProductionUrl(doc),

						// Alternatively, specify functions (may be async) to extract values
						// keywords: doc => doc.seo?.keywords,
						// synonyms: async(doc) => client.fetch('some query to get synonyms', {id: doc._id}),
						// url: async(doc) => client.fetch('some query to construct a url with refs', {id: doc._id})
					})
					.title('SEO'),
				S.view
					.component(Iframe)
					.options({
						url: (doc: any) => {
							const previewUrl = doc?.slug?.current
								? `${baseUrl}/api/preview?slug=${doc.slug.current}`
								: `${baseUrl}/api/preview`

							return previewUrl
						}
					})
					.title('Preview')
			])
		default:
			return S.document().views([S.view.form()])
	}
}