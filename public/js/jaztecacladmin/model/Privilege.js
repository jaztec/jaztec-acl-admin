Ext.define('JaztecAclAdmin.model.Privilege', {
    extend: 'Ext.data.Model',
    idProperty: 'PrivilegeID',
    fields: [
        {
            name: 'PrivilegeID',
            type: 'integer'
        },
        {
            name: 'Privilege',
            type: 'string'
        },
        {
            name: 'Resource',
            type: 'integer'
        },
        {
            name: 'ResourceName',
            type: 'string'
        },
        {
            name: 'Role',
            type: 'integer'
        },
        {
            name: 'RoleName',
            type: 'string'
        },
        {
            name: 'Type',
            type: 'string'
        }
    ]
});