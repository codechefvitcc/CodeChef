export default{
    name : 'testimonials',
    title : 'Testimonials',
    type : 'document',
    fields: [
        {
            name : 'name',
            title : 'Name',
            type : 'string'
        },
        {
            name : 'image',
            title : 'Image',
            type : 'url'
        },
        {
            name : 'position',
            title : 'Designation/Position',
            type : 'string'
        },
        {
            name : 'testimonial',
            title : 'Testimonial',
            type : 'string'
        }        
    ]
}