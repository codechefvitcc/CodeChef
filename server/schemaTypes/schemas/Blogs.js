export default{
    name : 'blogs',
    title : 'Blogs',
    type : 'document',
    fields: [
        {
            name : 'heading',
            title : 'Heading',
            type : 'string'
        },
        {
            name : 'about',
            title : 'About',
            type : 'string'
        },
        {
            name: 'blog',
            title: 'The Blog!', 
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name : 'imageUrl',
            title : 'Image URL',
            type : 'string'
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
        }
    ]
}