export default {
  name: 'board',
  type: 'document',
  title: 'Board of Trustees',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'priority',
      type: 'number',
      title: 'Display Priority',
      description: 'Set the display order (lower number = higher priority)',
      validation: (Rule: any) => Rule.required().min(1),
    },
  ],
}
