Ext.define('JaztecAclAdmin.store.privileges.Main', {
    extend: 'Ext.data.Store',
    model: 'JaztecAclAdmin.model.Privilege',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        extraParams: {
            type: 'privileges'
        },
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