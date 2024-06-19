export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
    },
    {
      name: 'imageHashCode',
      title: 'Image Hash Code',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Designation/Position',
      type: 'string',
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'string',
    },
  ],
}
