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