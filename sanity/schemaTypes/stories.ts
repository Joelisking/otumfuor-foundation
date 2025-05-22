export default {
  name: 'stories',
  type: 'document',
  title: 'Stories',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of story article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your story article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Primary Banner Image',
    },
    {
      name: 'secondaryImage',
      type: 'image',
      title: 'Secondary Banner Image',
      description: 'Optional second banner image for the same story',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Short Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          name: 'inlineImage',
          title: 'Inline Image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'additionalImages',
      type: 'array',
      title: 'Additional Images',
      description: 'Add more images to be displayed below the content',
      of: [
        {
          type: 'image',
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'recentStory',
      type: 'boolean',
      title: 'Recent Story',
      description: 'Toggle this to display this story in the Recent Stories section.',
    },
    {
      name: 'showInHeroCarousel',
      type: 'boolean',
      title: 'Show in Hero Carousel?',
      description: 'Toggle this to display this story in the hero carousel on the homepage.',
    },
    {
      name: 'carouselPriority',
      type: 'number',
      title: 'Carousel Priority',
      description: 'Set the display priority in the carousel (lower number = higher priority)',
      hidden: ({document}: {document?: Record<string, any>}) => !document?.showInHeroCarousel,
    },
    {
      name: 'upcoming',
      type: 'boolean',
      title: 'Upcoming Story?',
      description: 'Toggle this to display tag this story as an upcoming story.',
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
      description: 'The date of the story.',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
      description: 'Add tags to categorize your story',
    },
  ],
}
