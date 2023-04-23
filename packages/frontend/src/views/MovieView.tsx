import React from 'react'
import DetailView from '@components/DetailView'
import { SanityMovie } from '@data/sanity/types/movie'
import { getSanityImageUrl } from '@data'
import { PortableText } from "@portabletext/react";
import MovieGrid from '@components/MovieGrid';
import PersonCard from '@components/PersonCard';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';

type Props = {
	movie: SanityMovie
}

const MovieView = ({movie}: Props) => {

	const {title, releaseDate, poster} = movie

	const imageUrl = getSanityImageUrl(poster)

	return (
		<>

			<Head>
        <title>{movie.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`http://localhost:3100/movie/${movie.slug.current || '#'}/`} />
      </Head>
			<DetailView
			 	title={title}
				subtitle={releaseDate?.split('-')[0] || ''}
				image={imageUrl || ''}
			>
				<PortableText value={movie.overview} />
			</DetailView>
			<SimpleGrid columns={1} spacing={5}>
				<Box>
					<Heading as='h2' size='2xl' textAlign={'center'}>
						Characters
					</Heading>
				</Box>
			</SimpleGrid>
			{
				movie.castMembers && (
					<MovieGrid>
						{
							movie.castMembers.map((castMember, index) => (
								<PersonCard
									key={index}
									name={''}
									description={castMember?.characterName || ''}
									// avatar={castMember?.person?.image?.asset?.url || ''}
								 />
							))
						}
					</MovieGrid>
				)
			}
		</>
	)
}

export default MovieView