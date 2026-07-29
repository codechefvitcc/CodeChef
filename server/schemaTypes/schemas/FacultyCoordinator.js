export default {
  name: 'facultyCoordinator',
  title: 'Faculty Coordinator',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote/Testimonial',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageUrl',
      title: 'Image URL (Fallback)',
      type: 'url',
    },
    {
      name: 'imageHashCode',
      title: 'Image Hash Code',
      type: 'string',
    },
  ],
}
