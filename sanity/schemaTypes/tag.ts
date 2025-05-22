interface TagField {
  name: string
  type: string
  title: string
  validation?: (Rule: any) => any
  options?: {
    source: string
  }
  description?: string
}

interface TagSchema {
  name: string
  type: string
  title: string
  fields: TagField[]
}

const tag: TagSchema = {
  name: 'tag',
  type: 'document',
  title: 'Tags',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tag Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Used to sort tags in a specific order',
      validation: (Rule) => Rule.required().integer().min(0),
    },
  ],
}

export default tag
