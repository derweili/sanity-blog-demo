'use client';
import CtaButton from "@components/CtaButton";
import { css, cx } from "@linaria/core";
import { usePathname, useRouter } from "next/navigation"

import React from 'react'
import { MouseEvent } from "react"

const isLoadedInIframe = () => {
  // on ssr always return false
  if (typeof window === 'undefined') {
    return false
  }
  try {
    return window.self !== window.top
  } catch (e) {
    return true
  }
}

const PreviewButton = () => {

	const {push} = useRouter()
	const pathname = usePathname()

	
	const handleExitPreview = (e: MouseEvent) => {
		e.preventDefault()
		push(`/api/disable-draft?path=${pathname}`)
	}

	/**
	 * Don't show preview button if loaded in iframe
	 */
	if( isLoadedInIframe() ) {
		return null
	}

	return (
		<div
				style={
				{
					position: 'fixed',
					bottom: '0',
					right: '0',
					backgroundColor: 'var(--c-grey-100)',
					padding: 'var(--s-m)',
					border: 'none',
					borderRadius: 'var(--s-xs)',
					cursor: 'pointer',
					fontSize: 'var(--fs-xxs)',
					fontWeight: 'bold',
					textTransform: 'uppercase',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--s-xs)',
				}
			}
		>
			Preview mode enabled

			<CtaButton
				onClick={handleExitPreview}
				>
				Exit Preview
			</CtaButton>
		</div>
	)
}

export default PreviewButton
