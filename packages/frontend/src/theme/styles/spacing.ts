/**
 * External dependencies
 */
import { css } from '@linaria/core';
import { BP_XLARGE } from './breakpoints';

export const spacing = css`
	/* Initial Spacing */
	
	--s-baseline: 0.5rem; /* 8px */
	--s-base: var(--s-baseline); /* ~ 8px  */

	--s-xxs: calc(var(--s-baseline) * 0.5); /* 4px */
	--s-xs: calc(var(--s-baseline) * 0.75); /* 6px */
	--s-s: var(--s-baseline); /* 8px */
	--s-m: calc(var(--s-baseline) * 1.5); /* 12px */
	--s-l: calc(var(--s-baseline) * 2); /* 16px */
	--s-xl: calc(var(--s-baseline) * 3); /* 24px */
	--s-xxl: calc(var(--s-baseline) * 4); /* 32px */
`;
