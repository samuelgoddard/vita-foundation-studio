import { FiUser } from "react-icons/fi";

export default {
  title: 'Block Quote',
  name: 'blockquote',
  icon: FiUser,
  type: 'object',
  fields: [
    {
      title: 'Quote Text',
      name: 'text',
      type: 'string',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Quote Author',
      name: 'author',
      type: 'string'
    }
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare ({ text }) {
      return {
        title: `*Quote Block*: ${text}`
      }
    }
  }
}