/**
 * CTA Button based on lineriajs
 */
import { css, cx } from '@linaria/core';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';

// Write your styles in `css` tag
const label = css`
  text-transform: uppercase;
  color: #fff;
	background-color: var(--c-primary);
	padding: var(--s-xxs) var(--s-s);
	text-align: center;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	border: none;
	text-decoration: none;
	font-size: var(--fs-xxs);

	&:hover {
		background-color: #000;
	}
`;

export default function Label({ children }: PropsWithChildren<{}>) {
	return (
		<span
			className={cx(label)}
		>
			{children}
		</span>
	);
}