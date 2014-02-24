Ext.define('JaztecAclAdmin.store.resources.Main', {
    extend: 'Ext.data.Store',
    model: 'JaztecAclAdmin.model.Resource',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        extraParams: {
            type: 'resources'
        },
        api: {
            create: '/jaztecacladmin-resources/create',
            read: '/jaztecacladmin-resources/read',
            update: '/jaztecacladmin-resources/update',
            destroy: '/jaztecacladmin-resources/destroy'
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