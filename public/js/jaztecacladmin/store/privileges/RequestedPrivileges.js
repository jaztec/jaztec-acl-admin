/**
 * @class JaztecAclAdmin.store.privileges.RequestedPrivileges
 */
Ext.define('JaztecAclAdmin.store.privileges.RequestedPrivileges', {
    extend: 'Ext.data.Store',
    fields: [
        {
            name: 'Privilege',
            type: 'string'
        },
        {
            name: 'Resource',
            type: 'string'
        }
    ],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/jaztecacladmin-privileges',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});