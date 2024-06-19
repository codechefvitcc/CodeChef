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
            name : 'subheading',
            title : 'Sub Heading/Gist',
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
        }
    ]
}