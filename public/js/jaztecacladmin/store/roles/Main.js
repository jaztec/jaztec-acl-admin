/**
 * @class JaztecAclAdmin.store.roles.Main
 * Main store for the roles
 * @author Jasper van Herpt <jasper.v.herpt@gmail.com>
 */
Ext.define('JaztecAclAdmin.store.roles.Main', {
    extend: 'Ext.data.Store',
    model: 'JaztecAclAdmin.model.Role',
    autoLoad: true,
    proxy: JaztecAdmin.service.Store.createCrudProxy('jaztecacladmin-roles')
});