import { SanityNews, getNews, sanityClient } from '@data'
import React from 'react'

type Props = {}

const NewsPage = async (props: Props) => {
	const news: SanityNews[] = await getNews(sanityClient) || []

	return (
		<>
			<div>NewsPage</div>
			{
				news.map((article) => (
					<article key={article._id}>
						<h2>{article.title}</h2>
					</article>
				))
			}
		</>
	)
}

export default NewsPage