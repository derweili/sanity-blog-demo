import { DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

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
								? `http://localhost:3100/api/preview?slug=${doc.slug.current}`
								: `http://localhost:3100/api/preview`

							return previewUrl
						}
					})
					.title('Preview'),
			])
		default:
			return S.document().views([S.view.form()])
	}
}