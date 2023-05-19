import { css, cx } from '@linaria/core'
import React, { PropsWithChildren } from 'react'

type Props = {}

const baseLayoutStyles = css`
	width: min(calc(90vw - 40px), 800px);
	margin-inline: auto;
`

const BaseLayout = ({children}: PropsWithChildren) => {
	return (
		<div className={cx(baseLayoutStyles)}>
			{children}
		</div>
	)
}

export default BaseLayout