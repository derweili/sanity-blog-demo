import { SanityDocument, SanityImageAssetDocument } from "@sanity/client";

export type SanityNews = SanityDocument & {
	title: string;
}