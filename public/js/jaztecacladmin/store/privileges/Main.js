Ext.define('JaztecAclAdmin.store.privileges.Main', {
    extend: 'Ext.data.Store',
    model: 'JaztecAclAdmin.model.Resource',
    proxy: {
        type: 'ajax',
        api: {
            create: '/jaztecacladmin-privileges/create',
            read: '/jaztecacladmin-privileges/read',
            update: '/jaztecacladmin-privileges/update',
            destroy: '/jaztecacladmin-privileges/destroy'
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