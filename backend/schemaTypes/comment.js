import {defineField, defineType} from 'sanity'

export const comment = defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'postedBy',
      title: 'PosterBy',
      type: 'postedBy',
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
    }),
  ],
})
