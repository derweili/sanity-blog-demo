/**
 * CTA Button based on lineriajs
 */
import { css, cx } from '@linaria/core';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';

// Write your styles in `css` tag
const button = css`
  text-transform: uppercase;
  color: #fff;
	background-color: var(--c-primary);
	padding: 10px 20px;
	text-align: center;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	border: none;
	text-decoration: none;

	&:hover {
		background-color: #000;
	}
`;

type CtaButton = ButtonHTMLAttributes<HTMLButtonElement>;

export default function CtaButton({ children, className, ...props }: PropsWithChildren<CtaButton>) {
	return (
		<button
			className={cx(button, className)}
			{...props}
		>
			{children}
		</button>
	);
}