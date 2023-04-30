import { SanityClient } from "@sanity/client";
import { SanityImage } from "./types/image";
import { SanitySlug } from "./types/slug";
import groq from "groq";
import { SanityMovie } from "./types/movie";
import { SanityNews } from "./types";

export const GetNewsQuery = groq`*[_type == "article"]  | order(_createdAt desc)`;

export const getNews = async (client: SanityClient) => {
	return client.fetch<SanityNews[]>(GetNewsQuery);
}

type SanityTransition = 'update' | 'disappear' | 'appear'

type SanitySubscriptionResult = {
	document: SanityNews | undefined,
	transition: SanityTransition,
	id: string | undefined,
}

export const subscribeToNews = async (client: SanityClient, callback: (data: SanitySubscriptionResult) => void) => {
	const subscription = client.listen(GetNewsQuery, {}, { includeResult: true }).subscribe((result) => {
		console.log('callback', result)
		callback({
			document: result.result as SanityNews | undefined,
			transition: result.transition,
			id: result.documentId as string,
		});
	});

	return subscription;
}