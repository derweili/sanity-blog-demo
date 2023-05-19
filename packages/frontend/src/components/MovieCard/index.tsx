import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { css, cx } from '@linaria/core'
import CtaButton from '@components/CtaButton'

type MovieCardProps = {
	title: string
	description?: string
	year?: string,
	url: string
	image?: string
}

const movieCardStyles = css`
	border: 1px solid var(--c-grey-100);
	border-radius: var(--s-s);
	overflow: hidden;
`

const movieCardImage = css`
	width: 100%;
	height: 150px;
	position: relative;
`

const movieCardContentStyles = css`
	padding: var(--s-m) var(--s-m) var(--s-l) var(--s-m);

	h2 {
		margin-block-start: 0;
	}
`

const MovieCard = ({title, description, year, url, image}: MovieCardProps) => {
	return (
		<div className={cx(movieCardStyles)}>
				{
					image && <div className={cx(movieCardImage)}><Image src={image} fill style={{objectFit: 'cover'}} alt={`${title} poster`} /></div>
				}
				<div className={cx(movieCardContentStyles)}>
					<h2>{title}</h2>
					<p>
						<strong>{year}</strong>
					</p>
					<Link href={url}>
						<CtaButton>
							More
						</CtaButton>
					</Link>
				</div>
		</div>
	)
}

export default MovieCard