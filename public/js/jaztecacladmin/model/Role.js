Ext.define('JaztecAclAdmin.model.Role', {
    extend: 'Ext.data.Model',
    idProperty: 'RoleID',
    fields: [
        {
            name: 'RoleID',
            type: 'integer'
        },
        {
            name: 'Name',
            type: 'string'
        },
        {
            name: 'Parent',
            type: 'string'
        },
        {
            name: 'ParentID',
            type: 'integer'
        }
    ]
});