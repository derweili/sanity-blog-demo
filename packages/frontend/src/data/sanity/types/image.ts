import { SanityBaseDocument } from "./SanityBaseDocument"

export type SanityImage = SanityBaseDocument & {
	asset?: {
		_ref: string,
		_type: 'reference',
	},
	crop?: {
		bottom?: number,
		left?: number,
		right?: number,
		top?: number,
	},
	hotspot?: {
		height?: number,
		width?: number,
		x?: number,
		y?: number,
	},
	caption?: string,
}
