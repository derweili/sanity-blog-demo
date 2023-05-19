'use client';
import { usePathname, useRouter } from "next/navigation"

import React from 'react'
import { MouseEvent } from "react"

const loadedInIframe = () => {
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

	const {push} = useRouter()
	const pathname = usePathname()

	if( loadedInIframe() ) {
		return <div>Test</div>
	}

	const handleExitPreview = (e: MouseEvent) => {
		e.preventDefault()
		push(`/api/exit-preview?path=${pathname}`)
	}

	return (
		<button
			onClick={handleExitPreview}
			>
			Exit Preview

			{pathname}
		</button>
	)
}

export default PreviewButton
