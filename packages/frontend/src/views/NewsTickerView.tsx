import MovieCard from '@components/MovieCard'
import MovieGrid from '@components/MovieGrid'
import React, { useEffect, useMemo, useState } from 'react'
import { SanityMovie, SanityNews, getNews, getSanityImageUrl, sanityClient, subscribeToNews } from '@data'
import CtaButton from '@components/CtaButton'
import { Box, Heading, ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react'
import Head from 'next/head'

type Props = {
	articles: SanityNews[]
}

const NewsTickerView = ({articles : _articles}: Props) => {

	const [articles, setArticles] = useState(_articles)

	useEffect(() => {
		const subscription = subscribeToNews(sanityClient, ({document, transition, id}) => {
	
			const isNewArticle = document && !articles.find((article) => article._id === document._id)

			if (transition === 'appear' && isNewArticle && document) {
				setArticles(( currentArticles ) => {
					return [document, ...currentArticles]
				})
			}
			
			if( transition === 'update' && ! isNewArticle && document) {

				setArticles(( currentArticles ) => {
					const newArticles = currentArticles.map((article) => {
						if (article._id === document._id) {
							return document
						}
		
						return article
					})

					return newArticles
				})
			}

			if (transition === 'disappear' && id) {
				const newArticles = articles.filter((article) => article._id !== id)

				setArticles(currentArticles => currentArticles.filter((article) => article._id !== id))
			}
		})


		return () => {
			console.log('unsubscribe', subscription)
			subscription.then((sub) => {
				console.log('unsubscribing', sub)
				sub.unsubscribe()
			})
		}
	}, [])
	

	// Sort articles by updated date
	const sortedArticles = useMemo(() => {
		return articles.sort((a, b) => {
			const aDate = new Date(a._updatedAt)
			const bDate = new Date(b._updatedAt)

			return bDate.getTime() - aDate.getTime()
		})
	}, [articles])

	if (!articles) {
		return null
	}

	return (
		<SimpleGrid columns={1} spacing={5}>
			<Heading as="h2" size="xl" mb={5}>News</Heading>
			<UnorderedList>
				{
					sortedArticles.map((article) => {
						const { _id, title } = article || {}


						return (
							<ListItem key={_id} marginBlockEnd={2}>
								<Heading as="h3" size="lg" mb={2}>{title}</Heading>
								
								{/* Updated time */}
								<Box as="span" fontSize="sm" color="gray.500">
									{new Date(article._updatedAt).toLocaleString('de-DE')}
								</Box>
							</ListItem>
						)
					})
				}
			</UnorderedList>
		</SimpleGrid>
	)
}

export default NewsTickerView