Ext.define('JaztecAclAdmin.view.main.Panel', {
    extend: 'JaztecAdmin.view.base.panel.ToolbarPanel',
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
            }),
            cards = [];
        var roles = Ext.create('JaztecAclAdmin.view.roles.MasterDetail', {
            toolButton: {
                text: 'Role Management',
                iconCls: 'icon-roles-medium'
            }
        });
        var resources = Ext.create('JaztecAclAdmin.view.resources.MasterDetail', {
            toolButton: {
                text: 'Resources Management',
                iconCls: 'icon-resources-medium'
            }
        });
        var privileges = Ext.create('JaztecAclAdmin.view.privileges.MasterDetail', {
            toolButton: {
                text: 'Privilege Management',
                iconCls: 'icon-privileges-medium'
            }
        });
        cards.push(roles);
        cards.push(resources);
        cards.push(privileges);
        me.cards = cards;
        me.store = Ext.create('Ext.data.Store', storeCfg);

        me.callParent(arguments);
    }
});