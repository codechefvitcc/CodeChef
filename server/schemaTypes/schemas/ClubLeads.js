// server/schemaTypes/schemas/ClubLeads.js
export default {
  name: 'clubLeads',
  title: 'Club Leads',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'College Email',
      type: 'string',
    },
    {
      name: 'batch',
      title: 'Batch',
      type: 'string',
      options: {
        list: [
          {title: '2023', value: '2023'},
          {title: '2024', value: '2024'},
          {title: '2025', value: '2025'}
        ]
      }
    },
    {
      name: 'imageUrl',
      title: 'Image Url',
      type: 'url',
    },
    {
      name: 'imageHashCode',
      title: 'Image Hash Code',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'position',
      title: 'Designation/Position',
      type: 'string',
      options: {
        list: [
          {title: 'President', value: 'President'},
          {title: 'Vice President', value: 'Vice President'},
          {title: 'General Secretary', value: 'General Secretary'},
          {title: 'Web Development', value: 'Web Development'},
          {title: 'Competitive Programming', value: 'Competitive Programming'},
          {title: 'Event Management', value: 'Event Management'},
          {title: 'Finance', value: 'Finance'},
          {title: 'Design', value: 'Design'},
          {title: 'Marketing & Sponsorship', value: 'Marketing & Sponsorship'},
          {title: 'Social Media & Content', value: 'Social Media & Content'}
        ]
      }
    },
  ],
}
