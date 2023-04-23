import { Box, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"

import React from 'react'
import { MouseEvent } from "react"

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

	const {asPath, push} = useRouter()

	if( loadedInIframe() ) {
		return null
	}

	const handleExitPreview = (e: MouseEvent) => {
		e.preventDefault()
		push(`/api/exit-preview?path=${asPath}`)
	}

	return (
		<Box position="fixed" bottom="0" right="0" p="4">
			<Button
				colorScheme="blue"
				onClick={handleExitPreview}
				>
				Exit Preview
			</Button>
		</Box>
	)
}

export default PreviewButton
