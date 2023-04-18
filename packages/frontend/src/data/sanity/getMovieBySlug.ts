import { SanityClient } from "@sanity/client";
import { SanityImage } from "./types/image";
import { SanitySlug } from "./types/slug";
import groq from "groq";
import { SanityMovie } from "./types/movie";

export const MovieBySlugQuery = groq`*[_type == "movie" && slug.current == $slug][0]`;

export type MovieBySlugQueryParams = {
	slug: string;
};

export const getMovieBySlug = async (client: SanityClient, slug: string) => {
	const params: MovieBySlugQueryParams = { slug };
	return client.fetch<SanityMovie>(MovieBySlugQuery, params);
}