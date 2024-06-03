export default{
    name : 'gallery',
    title : 'Gallery',
    type : 'document',
    fields: [
        {
            name : 'image',
            title : 'Image',
            type : 'url'
        },
        {
            name : 'altText',
            title : 'Alternate Text',
            type : 'url'
        },
        {
            name : 'imageId',
            title : 'Image Id',
            type : 'string'
        }
    ]
}