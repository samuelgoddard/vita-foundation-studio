export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  description: 'The main heading block of the page',
  fields: [
    {
      title: 'Hero Tagline',
      description: 'Optional: Tagline above the hero heading text',
      name: 'heroTagline',
      type: 'string'
    },
    {
      title: 'Hero Heading',
      name: 'heroHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Text',
      name: 'heroText',
      type: 'text', 
      description: 'Optional: Text below the hero heading text',
      rows: 3
    },
  ]
}