Ext.define('JaztecAclAdmin.view.main.Panel', {
    extend: 'JaztecAdmin.view.base.panel.ToolbarPanel',
    alias: 'widget.jaztecacladmin-mainPanel',
    items: [],

    requires: [
        'JaztecAclAdmin.model.Resource'
    ],

    initComponent: function()
    {
        var me = this,
            cards = [];
//        // Create an empty card in front of the rest.
//        cards.push({
//            xtype: 'panel',
//            layout: {
//                type: 'fit',
//                align: 'stretch'
//            },
//            items: []
//        });
        // Create and add the cards.
        var roles = me.getRoleCard();
        cards.push(roles);
        var resources = me.getResourceCard();
        cards.push(resources);
        var privileges = me.getPrivilegeCard();
        cards.push(privileges);

        me.cards = cards;

        me.callParent(arguments);
    },

    /**
     * Returns the configured masterdetail screen for role management.
     * @returns {JaztecAclAdmin.view.roles.MasterDetail}
     */
    getRoleCard: function()
    {
        var store = Ext.create('JaztecAclAdmin.store.roles.Main');

        return Ext.create('JaztecAclAdmin.view.roles.MasterDetail', {
            data: {
                store: store
            },
            toolButton: {
                text: 'Role Management',
                iconCls: 'icon-roles-medium'
            }
        });
    },

    /**
     * Returns the configured masterdetail screen for resource management.
     * @returns {JaztecAclAdmin.view.resources.MasterDetail}
     */
    getResourceCard: function()
    {
        var store = Ext.create('JaztecAclAdmin.store.resources.Main');

        return Ext.create('JaztecAclAdmin.view.resources.MasterDetail', {
            data: {
                store: store
            },
            toolButton: {
                text: 'Resources Management',
                iconCls: 'icon-resources-medium'
            }
        });
    },

    /**
     * Returns the configured masterdetail screen for privilege management.
     * @returns {JaztecAclAdmin.view.privileges.MasterDetail}
     */
    getPrivilegeCard: function()
    {
        var store = Ext.create('JaztecAclAdmin.store.privileges.Main');

        return Ext.create('JaztecAclAdmin.view.privileges.MasterDetail', {
            data: {
                store: store
            },
            toolButton: {
                text: 'Privilege Management',
                iconCls: 'icon-privileges-medium'
            }
        });
    },
});