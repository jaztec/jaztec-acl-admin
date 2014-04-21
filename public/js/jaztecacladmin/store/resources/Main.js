Ext.define('JaztecAclAdmin.store.resources.Main', {
    extend: 'Ext.data.Store',
    model: 'JaztecAclAdmin.model.Resource',
    autoLoad: true,
    proxy: JaztecAdmin.service.Store.createCrudProxy('jaztecacladmin-resources')
});