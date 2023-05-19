'use client';

import { css, cx } from '@linaria/core';
import React, {FC, PropsWithChildren} from 'react'
import { typography } from './styles/typography';
import { styles } from './styles';


const Theme: FC<PropsWithChildren> = ({children}) => {
	return (
		<div className={cx(styles)}>
			{children}
		</div>
	)
}

export default Theme