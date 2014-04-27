Ext.define('JaztecAclAdmin.view.privileges.MasterDetail', {
    extend: 'JaztecAdmin.view.base.editor.MasterDetail',
    alias: 'widget.jaztecacladmin-privileges-masterdetail',

    masterCfg: {
        showDeleteButton: true,
        columns: [
            {
                text: 'Type',
                dataIndex: 'Type',
                width: 45
            },
            {
                text: 'Role',
                dataIndex: 'RoleName',
                width: 45
            },
            {
                text: 'Privilege',
                dataIndex: 'Privilege',
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
            rolesStore = Ext.create('JaztecAclAdmin.store.roles.Main'),
            resourcesStore = Ext.create('JaztecAclAdmin.store.resources.Main'),
            typesStore;

        typesStore = Ext.create('Ext.data.Store', {
            fields: [
                {name: 'type'}
            ],
            data: [
                {type: 'allow'},
                {type: 'deny'}
            ]
        });

        this.detailCfg = Ext.apply({
            fields: [
                {
                    xtype: 'combobox',
                    name: 'Type',
                    fieldLabel: 'Type',
                    allowBlank: false,
                    valueField: 'type',
                    displayField: 'type',
                    store: typesStore
                },
                {
                    xtype: 'textfield',
                    name: 'Privilege',
                    fieldLabel: 'Privilege',
                    allowBlank: true
                },
                {
                    xtype: 'combobox',
                    name: 'Role',
                    fieldLabel: 'Role',
                    valueField: 'RoleID',
                    displayField: 'Name',
                    allowBlank: true,
                    store: rolesStore
                },
                {
                    xtype: 'combobox',
                    name: 'Resource',
                    fieldLabel: 'Resource',
                    valueField: 'ResourceID',
                    displayField: 'Name',
                    allowBlank: true,
                    store: resourcesStore
                }
            ]
        }, this.detailCfg);

        me.callParent(arguments);
    }
});