Ext.define('JaztecAclAdmin.controller.AclAdmin', {
    extend: 'JaztecAdmin.app.Module',
    stores: [],
    views: [
        'JaztecAclAdmin.view.main.Panel'
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
     * This function should implement code to register actions related
     * to this controller into the global system.
     * @param {JaztecUtils.app.Application} app
     */
    registerSystem: function(app)
    {
        var me = this;
        me.setApplicationData(app);
        if (!me.isRegistered()) {
            me.addCard({
                xtype: 'jaztecacladmin-mainPanel'
            });
            me.addToolItem(1, {
                text: 'ACL Control',
                iconCls: 'icon-security-large'
            });
            me.setRegistered(true);
        }
    }
});