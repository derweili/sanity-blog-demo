import { SanityNews, getNews, sanityClient } from '@data'
import NewsTickerView from '@views/NewsTickerView'
import React from 'react'

type Props = {}

const NewsPage = async (props: Props) => {
	const news: SanityNews[] = await getNews(sanityClient) || []


	return (
		<>
			<NewsTickerView articles={news} />
		</>
	)
}

export default NewsPage