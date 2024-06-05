export default{
    name : 'departments',
    title : 'Departments',
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string'
        },
        {
            name : 'icon',
            title : 'Icon',
            type : 'url'
        },
        {
            name : 'description',
            title : 'Description',
            type : 'string'
        },
        {
            name : 'members',
            title : 'Total Members',
            type : 'number'
        }
    ]
}