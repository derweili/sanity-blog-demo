import { StructureResolver } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { MdFilter, MdFilter1, MdPeople, MdSettings } from "react-icons/md";

type SiteSettingsPage = {
	schemaType: string
	title: string
}

const siteSettingsPages: SiteSettingsPage[] = [
	{
		schemaType: 'siteSettings',
		title: 'Metadata',
	},
	{
		schemaType: 'colors',
		title: 'Site Colors',
	},
	{
		schemaType: 'navigation',
		title: 'Navigation',
	},
]

const hiddenTypes = [
	'workflow.metadata',
]

const JsonPreview = (props: any) => {
	console.log('JsonPreview', props)
	const { child } = props
	return (
  <>
    <h1>JsonPreview</h1>
		{/* {child} */}
  </>
	)
}

// get key names from siteSettingsPages
const settingPagesDocumentTypes = siteSettingsPages.map(page => page.schemaType)

export const myStructure: StructureResolver = (S) =>
	S.list()
		.title('Base content 📖')
		.items([
			...S.documentTypeListItems().filter(listItem => ![...settingPagesDocumentTypes, ...hiddenTypes].includes(listItem.getId() || '')),
			
			S.listItem()
				.title('Filtered Persons')
				.icon(MdPeople, MdSettings)
				.child(
					S.list()
						.title('Filters')
						.items([
							S.listItem().title('Actors').child(
								// S.component(JsonPreview).title('Actors').child(
								// 	S.documentList()
								// 		.title('Actors')
								// 		.filter('_type == "person"')
								// ),

								S.documentTypeList('movie')
									.title('Actors by movie')
									.child(async (movieId, ...other) => {
										// query movie document by id
										const query = `
											*[_type == "movie" && _id == $movieId ] {
												castMembers[] {
													person->{
														_id,
														name
													}
												}
											
											}[0].castMembers[].person
										`


										const actors = await S.context.getClient({apiVersion: 'v2021-10-21'}).fetch(query, { movieId })
										const movie = await S.context.getClient({apiVersion: 'v2021-10-21'}).fetch(`*[_type == "movie" && _id == $movieId ][0]`, { movieId })
										// console.log('document', S.context.getClient({apiVersion: 'v2021-10-21'}).fetch(`*[_type == "movie" && _id == $movieId ] {crewMembers}[0].crewMembers`, { movieId }).then(console.log))
										// return S.documentTypeList('person').title('Actors movieid: ' + movieId)
										// S.documentListItem().schemaType
										const { title : movieTitle = 'My new movie' } = movie || {}
										return S.list()
											// Sets a title for our new list
											.title('Actors in ' + movieTitle)
											// Add items to the array
											// Each will pull one of our new singletons
											.items(
												( actors && actors.length > 0) ? actors.map (({ _id, name }) => {
													console.log('actor', _id, name)

													return S.documentListItem().id(_id).schemaType('person');

												}) : []
											)
									}
								)
							),
							S.listItem().title('Crew').child(
								// S.component(JsonPreview).title('Actors').child(
								// 	S.documentList()
								// 		.title('Actors')
								// 		.filter('_type == "person"')
								// ),

								S.documentTypeList('movie')
									.title('Crew members by movie')
									.child(async (movieId, ...other) => {
										// query movie document by id
										const query = `
											*[_type == "movie" && _id == $movieId ] {
												crewMembers[] {
													person->{
														_id,
														name
													}
												}
											
											}[0].crewMembers[].person
										`


										const crewMembers = await S.context.getClient({apiVersion: 'v2021-10-21'}).fetch(query, { movieId })
										const movie = await S.context.getClient({apiVersion: 'v2021-10-21'}).fetch(`*[_type == "movie" && _id == $movieId ][0]`, { movieId })
										// console.log('document', S.context.getClient({apiVersion: 'v2021-10-21'}).fetch(`*[_type == "movie" && _id == $movieId ] {crewMembers}[0].crewMembers`, { movieId }).then(console.log))
										// return S.documentTypeList('person').title('Actors movieid: ' + movieId)
										// S.documentListItem().schemaType
										const { title : movieTitle = 'My new movie' } = movie || {}
										return S.list()
											// Sets a title for our new list
											.title('Crew Members in ' + movieTitle)
											// Add items to the array
											// Each will pull one of our new singletons
											.items(
												( crewMembers && crewMembers.length > 0) ? crewMembers.map (({ _id, name }) => 
													S.documentListItem().id(_id).schemaType('person')
												) : []
											)
									}
								)
							)
						])
				),

			S.listItem()
				.title('Settings')
				.icon(MdSettings)
				.child(
					S.list()
						// Sets a title for our new list
						.title('Settings Documents')
						// Add items to the array
						// Each will pull one of our new singletons
						.items(
							siteSettingsPages.map(({ schemaType, title }) => {
								return S.listItem()
									.title(title)
									.child(S.document().title(title).schemaType(schemaType).documentId(schemaType))
							})
						)
				),
		])