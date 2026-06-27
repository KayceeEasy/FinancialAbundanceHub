import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Posts',
  type: 'document',

  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      subtitle: 'publishedAt'
    }
  },

  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Wealth Building", value: "wealth" },
          { title: "Real Estate", value: "real-estate" },
          { title: "Investing", value: "investing" },
          { title: "Mindset", value: "mindset" }
        ]
      }
    },
    
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Displayed on the blog listing page.',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.max(200)
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),

    defineField({
      name: 'featured',
      title: 'Featured Post',
      description: 'Highlight this article on the homepage.',
      type: 'boolean',
      initialValue: false
    }),

    defineField({
      name: 'body',
      title: 'Article',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ],
      validation: Rule => Rule.required()
    }),
  ]
});

export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  category
}`;