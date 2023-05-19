/**
 * External dependencies
 */
import { css, cx } from '@linaria/core';

/**
 * Internal dependencies
 */
import { typescale } from './typescale';
import { typography } from './typography';
import { colors } from './colors';
import { spacing } from './spacing';
import { normalize } from './normalize';

export const styles = cx(
	normalize,
	typescale,
	typography,
	colors,
	spacing
);
