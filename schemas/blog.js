import { FiInfo, FiLink } from 'react-icons/fi'
import slugify from '../utils/slugify'

export default {
  title: 'Blog',
  name: 'blog',
  type: 'document',
  groups: [
    {
      title: 'Content',
      name: 'content',
      default: true,
      icon: FiInfo
    },
    {
      title: 'SEO / Share',
      name: 'seo',
      icon: FiLink
    }
  ],
  fields: [
    {
      title: 'Title',
      description: 'The name of this article',
      name: 'title',
      type: 'string',
      group: 'content',
      validation: Rule => Rule.required()
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
      group: 'content',
      validation: Rule => Rule.required()
    },
    {
      title: 'Published Date',
      name: 'publishedDate',
      type: 'date',
      options: {
        dateFormat: 'DD MMMM YYYY',
        calendarTodayLabel: 'Today'
      },
      group: 'content',
      validation: Rule => Rule.required()
    },
    {
      title: 'Content',
      name: 'content',
      type: 'contentRich',
      group: 'content'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      group: 'content',
      description: 'This is required for page routing and can be auto-generated by pressing "generate"',
      options: {
        source: (doc) => {
          let titleSlug = ''
          if (doc.title) {
            titleSlug = `${doc.title}`
          } else {
            titleSlug = ''
          }

          return `${titleSlug}`;
        },
        maxLength: 96,
        slugify: (input) => slugify(`${input}`)
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedDate',
      author: 'author.name'
    },
    prepare(selection) {
      const {title, date, author} = selection
      return {
        title: title,
        subtitle: `${new Date(date).toLocaleDateString()} - ${author}`
      }
    }
  }
}