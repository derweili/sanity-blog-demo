import { createClient } from "@sanity/client";

export const projectId = "qyygg2kr";
export const dataset = "production";

export const sanityClient = createClient(
	{
		projectId,
		dataset,
		apiVersion: '2021-03-25',
		useCdn: false,
	}
);