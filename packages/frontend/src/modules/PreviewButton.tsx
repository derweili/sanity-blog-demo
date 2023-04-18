import { Box, Button } from "@chakra-ui/react"

import React from 'react'

const loadedInIframe = () => {
  console.log('loadedInIframe')
  // on ssr always return false
  if (typeof window === 'undefined') {
    console.log('window is undefined', false)
    return false
  }
  try {
    console.log(loadedInIframe, window.self !== window.top)
    return window.self !== window.top
  } catch (e) {
    return true
  }
}

const PreviewButton = () => {
	if( loadedInIframe() ) {
		return null
	}
	return (
		<Box position="fixed" bottom="0" right="0" p="4">
			<Button
				colorScheme="blue"
				onClick={() => {
					window.location.href = '/api/exit-preview'
				}
			}>
				Exit Preview
			</Button>
		</Box>
	)
}

export default PreviewButton
