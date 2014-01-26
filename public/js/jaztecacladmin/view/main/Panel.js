Ext.define('JaztecAclAdmin.view.main.Panel', {
    extend: 'JaztecAdmin.view.base.panel.ToolbarPanel',
    alias: 'widget.jaztecacladmin-mainPanel',
    layout: 'border',
    items: [],

    requires: [
        'JaztecAclAdmin.model.Resource'
    ],

    toolItems: [
        {
            text: 'dit is al iets!'
        }
    ],

    initComponent: function()
    {
        var me = this,
            storeCfg = JaztecAdminApp.data.createStoreConfig({
                module: 'test',
                model: 'JaztecAclAdmin.model.Resource',
                action: 'iets'
            });

        me.store = Ext.create('Ext.data.Store', storeCfg);

        me.callParent(arguments);
    }
});