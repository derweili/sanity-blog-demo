import CtaButton from '@components/CtaButton';
import Label from '@components/Label';
import { css, cx } from '@linaria/core';
import Image from 'next/image';
import Link from 'next/link';

interface CTAProps {
	label: string;
	href: string;
}

interface PersonCardProps {
	name: string;
	username?: string;
	avatar?: string;
	description?: string;
	labels?: string[];
	ctaPrimary?: CTAProps;
	ctaSecondary?: CTAProps;
}

const personCardStyles = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	h3 {
		margin-block: var(--s-s)
	}

	p {
		margin-block: var(--s-xs)
	}

	.labels {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--s-xs);
		margin-block: var(--s-s);
	}
`

export default function PersonCard({ name, avatar, username, description, labels, ctaPrimary, ctaSecondary }: PersonCardProps) {

  return (
    <div className={cx(personCardStyles)}>

			{
				avatar && (
					<Image
						src={avatar}
						width={96}
						height={96}
						alt={name}
						style={{ borderRadius: '50%', objectFit: 'cover' }}
					/>
				)
			}
        <h3>
          {name}
        </h3>
				{
					username && (
						<p>
							{username}
						</p>
					)
				}
				{
					description && (
						<p>
							{description}
						</p>
					)
				}

				{
					labels && (
						<div className='labels'>
							{
								labels.map((label, index) => (
									<Label key={index}>
										{label}
									</Label>
								))
							}
						</div>
					)
				}
      </div>
  );
}