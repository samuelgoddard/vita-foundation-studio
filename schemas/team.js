import { FiInfo, FiUser, FiLink } from 'react-icons/fi'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  title: 'Team',
  name: 'team',
  icon: FiUser,
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    {
      title: 'Title',
      description: 'The name of this member',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    orderRankField({ type: 'team' }),
    {
      title: 'Position',
      description: 'The position this member holds at VITA, eg: "Founder and CEO of VITA"',
      name: 'position',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      description: 'Optional: Image of this member',
      name: 'image',
      type: 'defaultImage',
    },
  ],
  preview: {
    select: {
      title: 'title',
      position: 'position',
      image: 'image'
    },
    prepare(selection) {
      const {title, position, image} = selection
      return {
        title: title,
        subtitle: position,
        media: image ? image : null
      }
    }
  }
}