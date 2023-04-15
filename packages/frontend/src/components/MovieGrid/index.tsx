import React, { PropsWithChildren } from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'

const MovieGrid = ({children}: PropsWithChildren) => {
	return (
		<SimpleGrid columns={4} spacing={10}>
			{/* Loop over children and wrap with <Box> component */}
			{
				React.Children.map(children, (child) => {
					return (
						<Box>
							{child}
						</Box>
					)
				})
			}
		</SimpleGrid>
	)
}

export default MovieGrid