import { FiUser} from 'react-icons/fi'

export default {
  title: 'Author',
  name: 'author',
  icon: FiUser,
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {    
      title: 'Image',
      name: 'image',
      type: 'defaultImage'
    }
  ],
  preview: {
    select: {
      image: 'image',
      name: 'name'
    },
    prepare ({ name, image }) {
      return {
        title: name,
        media: image
      }
    }
  }
}