/**
 * @class JaztecAclAdmin.controller.AclAdmin
 * 
 * Module to be housed inside the JaztecAdmin framework. Complies with the requested
 * function registerControls which includes the toolbar item and card into the main
 * frameworks toolbarpanel.
 * 
 * @author Jasper van Herpt <jasper.v.herpt@gmail.com>
 */
Ext.define('JaztecAclAdmin.controller.AclAdmin', {
    extend: 'JaztecAdmin.app.Module',
    stores: [],
    views: [],
    refs: [
        {ref: 'moduleMain', selector: 'jaztecacladmin-mainPanel'}
    ],

    init: function()
    {
        var me = this;
        me.callParent(arguments);
    },

    /**
     * This function adds the visual components to the application
     * after all dependencies have been loaded.
     * @returns {undefined}
     */
    registerControls: function()
    {
        var me = this;
        if (me.isRegistered()) {
            return;
        }
        var card = Ext.create('JaztecAclAdmin.view.main.Panel');
        me.addCard(card);
        me.addToolItem(1, {
            text: 'ACL',
            iconCls: 'icon-security-large'
        });
        me.setRegistered(true);
    }
});