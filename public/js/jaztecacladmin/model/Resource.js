/**
 * @class JaztecAclAdmin.model.Resource
 * Model configuration for Resource
 * @author Jasper van Herpt <jasper.v.herpt@gmail.com>
 */
Ext.define('JaztecAclAdmin.model.Resource', {
    extend: 'Ext.data.Model',
    idProperty: 'ResourceID',
    fields: [
        {
            name: 'ResourceID',
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