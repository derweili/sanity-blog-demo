import { css, cx } from '@linaria/core'
import Link from 'next/link'
import React from 'react'

const navStyles = css`
	margin-inline: auto;
	box-shadow: 0 0 0 1px var(--c-grey-100);
	margin-block-end: var(--s-xl);

	ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: var(--s-m);
		list-style: none;
		padding: var(--s-m) 0;
		margin-block: 0;
		background-color: var(--c-grey-100);
	}

	li {
		margin-block: 0;
	}

	a {
		text-decoration: none;
		font-weight: 600;
		font-size: var(--fs-xs);
		text-transform: uppercase;
		transition: all 0.3s ease-in-out;
		color: inherit
	}

	li.is-active {
		color: var(--c-primary);
	}
`

const navItems = [
	{
		title: 'Movies',
		href: '/'
	},
	{
		title: 'News',
		href: '/news/'
	},
	{
		title: 'Profile',
		href: '/profile/'
	}
]


type NavProps = {
  currentPath: string;
};

const Nav = ({currentPath}: NavProps) => {
	return (
		<nav className={cx(navStyles )}>
			<ul>
				{
					navItems.map((item) => (
						<li key={item.title} className={ item.href === currentPath ? 'is-active' : '' }>
							<Link href={item.href}>
								{item.title}
							</Link>
						</li>
					))
				}
			</ul>
		</nav>
	)
}

export default Nav