Ext.define('JaztecAclAdmin.view.roles.MasterDetail', {
    extend: 'JaztecAdmin.view.base.editor.MasterDetail',
    alias: 'widget.jaztecacladmin-roles-masterdetail',
    
    masterCfg: {
        showDeleteButton: true,
        columns: [
            {
                text: 'Name',
                dataIndex: 'Name',
                flex: 1
            }
        ],
        width: 225
    },

    detailCfg: {

    },
    
    initComponent: function()
    {
        var me = this,
            store = Ext.create('JaztecAclAdmin.store.roles.Main');

        this.detailCfg = Ext.apply({
            fields: [
                {
                    xtype: 'textfield',
                    name: 'Name',
                    fieldLabel: 'Name',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    name: 'ParentID',
                    fieldLabel: 'Parent',
                    valueField: 'RoleID',
                    displayField: 'Name',
                    allowBlank: true,
                    forceSelection: true,
                    mode: 'remote',
                    store: store
                }
            ]
        }, this.detailCfg);

        me.callParent(arguments);
    }
});