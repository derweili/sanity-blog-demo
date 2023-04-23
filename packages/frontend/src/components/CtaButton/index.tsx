/**
 * CTA Button based on lineriajs
 */
import { css, cx } from '@linaria/core';
import React, { PropsWithChildren } from 'react';

// Write your styles in `css` tag
const button = css`
  text-transform: uppercase;
  color: #fff;
	background-color: green;
	padding: 10px 20px;
	text-align: center;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:hover {
		background-color: #000;
	}

	&:active {
		transform: scale(0.95);
	}

	&:focus {
		outline: none;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	&:disabled:hover {
		background-color: green;
	}

	&:disabled:active {
		transform: none;
	}

	&:disabled:focus {
		outline: none;
	}

	&:disabled {
		opacity: 0.5;
	}
`;

export default function CtaButton({ children, ...props }: PropsWithChildren<{}>) {
	return (
		<div
			className={cx(button)}
			{...props}
		>
			{children}
		</div>
	);
}