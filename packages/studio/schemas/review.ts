import { defineField, defineType } from 'sanity'
import { MdLocalMovies as icon } from 'react-icons/md'

export default defineType({
  name: 'review',
  title: 'Review',
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
      name: 'movie',
      title: 'Movie',
      type: 'reference',
      to: [{ type: 'movie' }],
    }),
    defineField({
      name: 'score',
      title: 'score',
      type: 'number',
    }),
  ]
})
