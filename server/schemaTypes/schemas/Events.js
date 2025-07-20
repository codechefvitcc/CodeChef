export default {
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'imageUrl',
            title: 'Image URL',
            type: 'image',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            name: 'subtitle1',
            title: 'SubTitle1',
            type: 'string',
        },
        {
            name: 'description1',
            title: 'Description1',
            type: 'string',
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'image' }],
        },
        {
            name: 'subtitle2',
            title: 'SubTitle2',
            type: 'string',
        },
        {
            name: 'description2',
            title: 'Description2',
            type: 'string',
        }
    ],
}
