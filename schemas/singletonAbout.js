import { FiInfo, FiLink } from 'react-icons/fi'

export default {
  title: 'About',
  name: 'about',
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
      group: 'content'
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo'
    }
  ]
}