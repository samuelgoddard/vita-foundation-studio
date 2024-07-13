import { FiInfo, FiLink, FiCheckCircle } from 'react-icons/fi'

export default {
  title: 'Network',
  name: 'network',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
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
      name: 'title',
      type: 'string',
      group: 'content',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero',
      name: 'hero',
      type: 'hero',
      group: 'content',
    },
    {
      title: 'About Section',
      name: 'aboutSection',
      type: 'object',
      group: 'content',
      fields: [
        {
          title: 'About Section Text',
          name: 'aboutSectionText',
          type: 'array',
          of: [{type: 'block'}],
          validation: Rule => Rule.required()
        },
        {
          title: 'About Section Image',
          name: 'aboutSectionImage',
          type: 'defaultImage',
          validation: Rule => Rule.required()
        },
      ]
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo'
    }
  ]
}