import React from 'react'
import Link from 'next/link'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'

type MovieCardProps = {
	title: string
	description?: string
	year?: string,
	url: string
	image?: string
}

const MovieCard = ({title, description, year, url, image}: MovieCardProps) => {
	return (
		<Card maxW='sm'>
			<CardBody>
				{
					image && <Image src={image} width={500} height={300} alt={`${title} poster`} />
				}
				<Stack mt='6' spacing='3'>
					<Heading size='md'>{title}</Heading>
					<Text color='blue.600' fontSize='2xl'>
						{year}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing='2'>
					<Link href={url}>
						<Button as="span" variant='solid' colorScheme='blue'>
							More
						</Button>
					</Link>
				</ButtonGroup>
			</CardFooter>
		</Card>
	)
}

export default MovieCard