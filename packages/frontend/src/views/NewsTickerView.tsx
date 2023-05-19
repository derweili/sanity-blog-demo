'use client';
import React, { useEffect, useMemo, useState } from 'react'
import { SanityMovie, SanityNews, getNews, getSanityImageUrl, sanityClient, subscribeToNews } from '@data'
import CtaButton from '@components/CtaButton'
import Head from 'next/head'

type Props = {
	articles: SanityNews[]
}

const NewsTickerView = ({articles : _articles}: Props) => {

	const [articles, setArticles] = useState(_articles)

	/**
	 * Subscribe to news
	 */
	useEffect(() => {
		const subscription = subscribeToNews(sanityClient, ({document, transition, id}) => {
			
			// Check if article is new
			const isNewArticle = document && !articles.find((article) => article._id === document._id)

			// Add the article to the list of articles
			if (transition === 'appear' && isNewArticle && document) {
				setArticles(( currentArticles ) => {
					return [document, ...currentArticles]
				})
			}
			
			// Update the article in the list of articles
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

			// Remove the article from the list of articles
			if (transition === 'disappear' && id) {

				setArticles(currentArticles => currentArticles.filter((article) => article._id !== id))
			}
		})


		return () => {
			// Clean up subscription
			subscription.then((sub) => {
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
		<div>
			<h2>Newsticker</h2>
			<ul>
				{
					sortedArticles.map((article) => {
						const { _id, title } = article || {}

						return (
							<li key={_id}>
								<strong>{title}</strong><br />
								
								{/* Updated time */}
								<span>
									{new Date(article._updatedAt).toLocaleString('de-DE')}
								</span>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default NewsTickerView