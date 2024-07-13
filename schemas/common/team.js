import { FiUsers } from 'react-icons/fi'

export default {
  title: 'Team Section',
  name: 'teamSection',
  type: 'object',
  icon: FiUsers,
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
    }
  ],
  preview: {
    select: {
      sectionTagline: 'sectionTagline',
    },
    prepare ({ sectionTagline }) {
      return {
        title: `*Team Block*: ${sectionTagline}`
      }
    }
  }
}