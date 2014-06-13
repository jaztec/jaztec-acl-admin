/**
 * @class JaztecAclAdmin.model.Role
 * Model configuration for Role
 * @author Jasper van Herpt <jasper.v.herpt@gmail.com>
 */
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