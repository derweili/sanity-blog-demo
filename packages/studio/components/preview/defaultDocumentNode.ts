import { DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

// get base url from env if exist
const baseUrl = process.env.FRONTEND_BASE_URL || 'http://localhost:3100'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
	switch (schemaType) {
		case `movie`:
			return S.document().views([
				S.view.form(),
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
					.title('Preview'),
			])
		default:
			return S.document().views([S.view.form()])
	}
}