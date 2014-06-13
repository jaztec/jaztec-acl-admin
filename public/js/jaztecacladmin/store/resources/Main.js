/**
 * @class JaztecAclAdmin.store.resources.MasterDetail
 * Main store for the resources.
 * @author Jasper van Herpt <jasper.v.herpt@gmail.com>
 */
Ext.define('JaztecAclAdmin.store.resources.Main', {
    extend: 'Ext.data.Store',
    model: 'JaztecAclAdmin.model.Resource',
    autoLoad: true,
    proxy: JaztecAdmin.service.Store.createCrudProxy('jaztecacladmin-resources')
});