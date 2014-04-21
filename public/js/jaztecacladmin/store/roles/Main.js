Ext.define('JaztecAclAdmin.store.roles.Main', {
    extend: 'Ext.data.Store',
    model: 'JaztecAclAdmin.model.Role',
    autoLoad: true,
    proxy: JaztecAdmin.service.Store.createCrudProxy('jaztecacladmin-roles')
});