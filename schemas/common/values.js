import { FiInfo, FiLink, FiCheckCircle } from 'react-icons/fi'

export default {
  title: 'Values Section',
  name: 'valuesSection',
  type: 'object',
  description: 'Renders a section with a grid of values',
  fields: [
    {
      title: 'Section Tagline',
      description: 'Optional: Tagline above the blocks heading text',
      name: 'sectionTagline',
      type: 'string'
    },
    {
      title: 'Section Heading',
      name: 'sectionHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Section Text',
      name: 'sectionText',
      type: 'text', 
      description: 'Optional: Text below the hero heading text',
      rows: 3
    },
    {
      title: 'Values',
      name: 'values',
      type: 'array',
      of: [
        {
          title: 'Text',
          name: 'text',
          type: 'string',
          validation: Rule => Rule.required()
        },
      ],
      preview: {
        select: {
          text: 'text',
        },
        prepare ({ text }) {
          return {
            title: text
          }
        }
      }
    },
  ]
}