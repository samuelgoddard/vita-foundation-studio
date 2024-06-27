import { FiInfo, FiLink, FiCheckCircle } from 'react-icons/fi'

export default {
  title: 'Stats Section',
  name: 'stats',
  type: 'object',
  description: 'The statistics grid block',
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
      title: 'Stats',
      name: 'stats',
      type: 'array',
      description: 'The list of statistics',
      of: [
        {
          type: 'object',
          icon: FiCheckCircle,
          fields: [
            {
              title: 'Meta Text',
              name: 'metaText',
              description: 'The meta text that appears in the orange label, eg: "2/3rds"',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              title: 'Text',
              name: 'text',
              type: 'contentMinimal',
              validation: Rule => Rule.required()
            },
          ],
          preview: {
            select: {
              text: 'text',
              metaText: 'metaText'
            },
            prepare ({ text, metaText }) {
              return {
                title: metaText,
                subtitle: text[0]?.children.map(u => u.text).join(' ')
              }
            }
          }
        },
      ],
    },
  ]
}