import { css, cx } from '@linaria/core'
import React, { PropsWithChildren } from 'react'

const movieGridStyles = css`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

const MovieGrid = ({children}: PropsWithChildren) => {
	return (
		<div className={cx(movieGridStyles)}>
			{/* Loop over children and wrap with <Box> component */}
			{
				React.Children.map(children, (child) => {
					return (
						<div>
							{child}
						</div>
					)
				})
			}
		</div>
	)
}

export default MovieGrid