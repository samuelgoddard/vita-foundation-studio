import { FiAtSign } from "react-icons/fi"

export default {
  title: 'Contact',
  name: 'company',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Registered Charity Number',
      name: 'registeredCharityNumber',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Email Address',
      name: 'emailAddress',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Socials',
      name: 'socials',
      type: 'array',
      of: [
        {
          type: "object",
          icon: FiAtSign,
          name: "social",
          fields: [
            {
              title: 'Platform',
              name: 'platform',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              title: 'URL',
              name: 'url',
              type: 'url',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    },
  ]
}