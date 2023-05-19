import React, { ReactNode } from 'react';

import { ReactText } from 'react';
import Link from 'next/link';
import { css, cx } from '@linaria/core';

const layoutStyles = css`
  width: min(calc(90vw - 40px), 600px);
  margin-inline: auto;
`;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={cx(layoutStyles)}>
        {children}
    </div>
  );
}
