export default {
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'number',
            type: 'string',
            readOnly: true,
        },
        {
            name: 'title',
            title: 'Title',
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
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            name: 'subtitle',
            title: 'SubTitle',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        }
    ],
}
