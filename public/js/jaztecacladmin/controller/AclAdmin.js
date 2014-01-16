Ext.define('JaztecAclAdmin.controller.AclAdmin', {
    extend: 'JaztecAdmin.app.Module',
    stores: [],
    views: [
//        'JaztecAclAdmin.view.main.Panel'
    ],
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
     * after all dependancies have been loaded.
     * @returns {undefined}
     */
    registerControls: function()
    {
        var me = this;
        if (me.isRegistered()) {
            return;
        }
        me.addCard({
            xtype: 'jaztecacladmin-mainPanel'
//            xtype: 'panel'
        });
        me.addToolItem(1, {
            text: 'ACL Control',
            iconCls: 'icon-security-large'
        });
        me.setRegistered(true);
    }
});