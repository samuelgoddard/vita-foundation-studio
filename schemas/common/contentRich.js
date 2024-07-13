import contentDefault from './contentDefault'

export default {
  title: 'Content Rich',
  name: 'contentRich',
  type: 'array',
  of: [
    ...contentDefault.of,
    { type: 'defaultImage', name: 'image' },
    { type: 'blockquote', name: 'blockquote' },
  ],
}