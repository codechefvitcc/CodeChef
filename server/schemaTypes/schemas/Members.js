export default{
    name : 'departmentMembers',
    title : 'Members',
    type : 'document',
    fields : [
        {
            name : 'departmentName',
            title : 'Department Name',
            type : 'string'
        },
        {
            name: 'members',
            title: 'Members',
            type: 'array',
            of: [{
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string'
                        },
                        {
                            name: 'linkedin',
                            title: 'LinkedIn',
                            type: 'url'
                        }
                    ]
                }]
        },
    ]
}