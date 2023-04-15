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
					image && <Image src={image} width={300} height={300} alt={`${title} poster`} />
				}
				<Stack mt='6' spacing='3'>
					<Heading size='md'>Living room Sofa</Heading>
					<Text>
						This sofa is perfect for modern tropical spaces, baroque inspired
						spaces, earthy toned spaces and for people who love a chic design with a
						sprinkle of vintage design.
					</Text>
					<Text color='blue.600' fontSize='2xl'>
						$450
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing='2'>
					<Link href='/'>
						<Button as="span" variant='solid' colorScheme='blue'>
							Buy now
						</Button>
					</Link>
					<Button variant='ghost' colorScheme='blue'>
						Add to cart
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	)
}

export default MovieCard