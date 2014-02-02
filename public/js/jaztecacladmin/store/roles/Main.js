Ext.define('JaztecAclAdmin.store.roles.Main', {
    extend: 'Ext.data.Store',
    model: 'JaztecAclAdmin.model.Resource',
    proxy: {
        type: 'ajax',
        api: {
            create: '/jaztecacladmin-roles/create',
            read: '/jaztecacladmin-roles/read',
            update: '/jaztecacladmin-roles/update',
            destroy: '/jaztecacladmin-roles/destroy'
        },
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json',
            root: 'data',
            encode: true
        }
    }
});