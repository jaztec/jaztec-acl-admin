Ext.define('JaztecAclAdmin.view.main.Panel', {
    extend: 'JaztecAdmin.view.base.editor.MasterDetail',
    alias: 'widget.jaztecacladmin-mainPanel',
    layout: 'border',
    items: [],

    requires: [
        'JaztecAclAdmin.model.Resource'
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