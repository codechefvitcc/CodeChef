export default{
    name : 'events',
    title : 'Events',
    type : 'document',
    fields : [
        {
            name : 'banner',
            title : 'Banner Image URL',
            type : 'url'
        },
        {
            name : 'eventName',
            title : 'Event Name',
            type : 'string'
        },
        {
            name : 'workFlow',
            title : 'Work Flow',
            description : 'Enter each step with commas  Example: Intro,Workshop...',
            type : 'string'
        },
        {
            name : 'eventFlow',
            title : 'Event Flow',
            description : 'Enter each step with commas  Example: Intro,Workshop...',
            type : 'string'
        },
        {
            name: 'description',
            title: 'Description', 
            type: 'array', 
            of: [{type: 'block'}]
        },
    ]
}