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

export const styles = cx(
	typescale,
	typography,
	colors,
	spacing
);
