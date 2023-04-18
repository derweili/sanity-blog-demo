import { SanityDocument, SanityImageAssetDocument } from "@sanity/client";
import { SanityBaseDocument } from "./SanityBaseDocument";
import { SanityImage } from "./image";
import { SanityReference } from "./reference";
import { SanitySlug } from "./slug";

export type CastMember = {
	_key: string;
	_type: "castMember";
	characterName: string;
	externalCreditId: number;
	externalId: number;
	person: SanityReference;
}

export type CrewMember = {
	_key: string;
	_type: "crewMember";
	department: string;
	externalCreditId: number;
	externalId: number;
	job: string;
	person: SanityReference;
}

export type SanityMovie = SanityDocument & {
	title: string;
	externalId: number,
	poster: SanityImageAssetDocument,
	slug: SanitySlug,
	releaseDate?: string,
	castMembers: CastMember[],
	overview: Array<any> // Todo: Figure out how to type this
}