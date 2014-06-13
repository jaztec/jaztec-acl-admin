/**
 * @class JaztecAclAdmin.store.privileges.Main
 */
Ext.define('JaztecAclAdmin.store.privileges.Main', {
    extend: 'Ext.data.Store',
    model: 'JaztecAclAdmin.model.Privilege',
    autoLoad: true,
    proxy: JaztecAdmin.service.Store.createCrudProxy('jaztecacladmin-privileges')
});