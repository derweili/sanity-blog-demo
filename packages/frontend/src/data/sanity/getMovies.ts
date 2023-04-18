import { SanityClient } from "@sanity/client";
import { SanityImage } from "./types/image";
import { SanitySlug } from "./types/slug";
import groq from "groq";
import { SanityMovie } from "./types/movie";

export const GetMoviesQuery = groq`*[_type == "movie"]  | order(releaseDate desc)`;

export const getMovies = async (client: SanityClient) => {
	return client.fetch<SanityMovie[]>(GetMoviesQuery);
}