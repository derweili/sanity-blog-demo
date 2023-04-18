import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanityClient';
import { SanityImage } from './types';

export const getSanityImageUrl = (image: SanityImage) => {
	if (!image) {
		return '';
	}
	return imageUrlBuilder(sanityClient).image(image).url();
}