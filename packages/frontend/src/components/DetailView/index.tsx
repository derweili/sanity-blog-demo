import { css, cx } from '@linaria/core';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface Details {
  label: string;
  value: string;
}

interface DetailViewProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  labelsHeading?: string;
  labels?: string[];
  detailsHeading?: string;
  details?: Details[];
}


const personCardStyles = css`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: var(--s-m);

  & .main-content {
    grid-column: 1 / 3;
  }
`

export default function DetailView({title, subtitle, shortDescription, description, image, labelsHeading, labels, detailsHeading, details, children} : DetailViewProps) {

  return (
    <div className={cx(personCardStyles)}>
      {
        image && (
          <Image
            src={image}
            width={300}
            height={300}
            alt={`${title} poster`}
          />
        )
      }
      <div>
        <h1>{ title }</h1>
        {
          subtitle && (
            <h2>
              {subtitle}
            </h2>
          )
        }
        {
          shortDescription && (
            <p>
              {shortDescription}
            </p>
          )
        }
      </div>
      <div className="main-content">
        <div className="description">
        {
          description && (
            <p>
              {description}
            </p>
          )
        }
        { children }
        </div>
        <div className='labels'>
          {
            labelsHeading && (
              <h2>
                {labelsHeading}
              </h2>
            )
          }

          {
            labels && labels.length && (
              <ul>
                {
                  labels.map((feature, index) => (
                    <li key={index}>
                      {feature}
                    </li>
                  ))
                }
              </ul>
            )
          }

          {
              details && details.length && (
                <div className='details'>
                  {
                    detailsHeading && (
                      <h2>
                        {detailsHeading}
                      </h2>
                    )
                  }

                  <ul>
                    {
                      details.map((detail, index) => (
                        <li key={index}>
                          <strong>
                            {detail.label}:
                          </strong>{' '}
                          {detail.value}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              )
            }

        </div>
      </div>
    </div>
  );
}