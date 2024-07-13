import { FiList } from 'react-icons/fi'

export default {
  title: 'List Section',
  name: 'listSection',
  type: 'object',
  icon: FiList,
  description: 'Renders a section with a nicely formatted list',
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
      title: 'List Items',
      name: 'listItems',
      type: 'array',
      of: [
        {
          name: 'text',
          rows: 3,
          type: 'text',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      title: 'Footnotes',
      name: 'footnotes',
      description: 'Optionally add some footnotes for further notation',
      type: 'array',
      of: [
        {
          name: 'text',
          rows: 3,
          type: 'text',
          validation: Rule => Rule.required()
        }
      ]
    }
  ],
  preview: {
    select: {
      sectionTagline: 'sectionTagline',
    },
    prepare ({ sectionTagline }) {
      return {
        title: `*List Block*: ${sectionTagline}`
      }
    }
  }
}