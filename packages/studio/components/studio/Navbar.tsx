import React from 'react'
import { Stack, Card, Flex, Text } from '@sanity/ui'
import { NavbarProps } from 'sanity'

const Navbar = (props: NavbarProps) => {
	return (
		<Stack>
      <Card padding={3} tone="caution">
        <Flex justify="center">
          <Text>Important reminder! Remember this banner!</Text>
        </Flex>
      </Card>
      <>{props.renderDefault(props)}</>
    </Stack>
	)
}

export default Navbar