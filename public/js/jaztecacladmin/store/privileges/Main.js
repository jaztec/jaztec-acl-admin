/**
 * @class JaztecAclAdmin.store.privileges.Main
 * Main store for the privileges.
 * @author Jasper van Herpt <jasper.v.herpt@gmail.com>
 */
Ext.define('JaztecAclAdmin.store.privileges.Main', {
    extend: 'Ext.data.Store',
    model: 'JaztecAclAdmin.model.Privilege',
    autoLoad: true,
    proxy: JaztecAdmin.service.Store.createCrudProxy('jaztecacladmin-privileges')
});