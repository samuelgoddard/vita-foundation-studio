import { FiInfo, FiLink, FiCheckCircle } from 'react-icons/fi'

export default {
  title: 'Training',
  name: 'training',
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
      title: 'Training Types',
      name: 'types',
      icon: FiCheckCircle
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
      title: 'Training Types',
      name: 'trainingTypes',
      type: 'array',
      description: 'The list of training types that VITA offers.',
      group: 'types',
      of: [
        {
          type: 'object',
          icon: FiCheckCircle,
          fields: [
            {
              title: 'Title',
              name: 'title',
              description: 'The name of the training, eg: "Simulation Training"',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              title: 'Overview',
              name: 'overview',
              description: 'A short overview of the training.',
              type: 'contentSimple',
              validation: Rule => Rule.required()
            },
            {
              title: 'Details',
              name: 'details',
              description: 'What the training consists of, what VITA recommend',
              type: 'contentSimple'
            },
          ],
          preview: {
            select: {
              title: 'title',
              overview: 'overview'
            },
            prepare ({ title, overview }) {
              return {
                title: title,
                subtitle: overview[0]?.children.map(u => u.text).join(' ')
              }
            }
          }
        },
      ],
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo'
    }
  ]
}