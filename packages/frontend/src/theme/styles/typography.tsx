import { css } from "@linaria/core";

export const typography = css`
	:global() {
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
	}

	--font-family: 'Inter', sans-serif;
	--font-weight-regular: 400;
	--font-weight-bold: 700;


	font-family: var(--font-family);

	:where(h1) {
		font-size : var(--font-size-xl);
		line-height : var(--line-height-xl);
	}

	:where(h2) {
		font-size : var(--font-size-l);
		line-height : var(--line-height-l);
	}

	:where(h3) {
		font-size : var(--font-size-m);
		line-height : var(--line-height-m);
	}

	:where(h4) {
		font-size : var(--font-size-s);
		line-height : var(--line-height-s);
	}

	:where(h5) {
		font-size : var(--font-size-xs);
		line-height : var(--line-height-xs);
	}

	:where(h6) {
		font-size : var(--font-size-xs);
		line-height : var(--line-height-xs);
	}

	:where(p) {
		font-size : var(--font-size-xs);
		line-height : var(--line-height-xs);
	}
`