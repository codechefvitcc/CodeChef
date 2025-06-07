export default {
    name: 'presidentTestimonials',
    title: 'Presidents',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
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
            name: "email",
            title: "Email",
            type: "string",
        },
        {
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'url'
        },
        {
            name: "year",
            title: "Year",
            type: "string"
        },
        {
            name: 'testimonial',
            title: 'Testimonial',
            type: 'string'
        }
    ]
}