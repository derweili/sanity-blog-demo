/**
 * External dependencies
 */
import { css } from '@linaria/core';
import { BP_XLARGE } from './breakpoints';

export const typescale = css`
	/* Initial Font Size */
	--fs-xs: 1.25rem; /* 22px */
	--fs-s: 1.5rem; /* 24px */
	--fs-m: 1.625rem; /* 26px */
	--fs-l: 1.75rem; /* 28px */
	--fs-xl: 1.875rem; /* 30px */

	@media (${BP_XLARGE}) {
		/* XL Font Sizes */
		--fs-xs: 1.375rem; /* 22px */
		--fs-s: 1.5rem; /* 24px */
		--fs-m: 1.75rem; /* 28px */
		--fs-l: 2rem; /* 32px */
		--fs-xl: 2.5rem; /* 40px */
	}

	/* Initial Line Height */
	--lh-xs: 1.5;
	--lh-s: 1.4545;
	--lh-m: 1.4167;
	--lh-l: 1.3846;

	@media (${BP_XLARGE}) {
		/* XL Line Heights */
		--lh-xs: 1.6;
		--lh-s: 1.3637;
		--lh-m: 1.2308;
		--lh-l: 1.4;
		--lh-xl: 1.3157;
	}
`;
