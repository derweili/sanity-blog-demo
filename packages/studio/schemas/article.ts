import { defineField, defineType } from 'sanity'
import { MdPages as icon } from 'react-icons/md'
import AsyncSelect from '../components/inputs/CatSelect'

const getCatBreeds = async (): Promise<Array<{ title: string, value: string }>> => {
  const catBreeds = await fetch('https://catfact.ninja/breeds')
    .then(res => res.json())
    .then(json => json.data.map((cat: any) => ({
      title: cat.breed,
      value: cat.breed.toLowerCase().split(' ').join('-')
    })))

  return catBreeds
}


export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
      options: {
        collapsible: true,
      }
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'catBreed',
      title: 'Related cat breed',
      type: 'string',
      components: {
        input: AsyncSelect
      }
    }),
  ],
  preview: {
    select: {
      title: 'title',
      // date: 'releaseDate',
      media: 'featuredImage',
    },
    prepare(selection) {
      // const year = selection.date && selection.date.split('-')[0]

      return {
        title: selection.title,
        // date: selection.date,
        media: selection.media,
      }
    },
  },
})
