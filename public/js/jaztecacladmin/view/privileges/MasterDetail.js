/**
 * @class JaztecAclAdmin.view.privileges.MasterDetail
 * Master detail configuration for the privileges
 * @author Jasper van Herpt <jasper.v.herpt@gmail.com>
 */
Ext.define('JaztecAclAdmin.view.privileges.MasterDetail', {
    extend: 'JaztecAdmin.view.base.editor.MasterDetail',
    alias: 'widget.jaztecacladmin-privileges-masterdetail',

    masterDetailLayout: 'overview-center',
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
                flex: 1
            },
            {
                text: 'Resource',
                dataIndex: 'ResourceName',
                flex: 1
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
        formCfg: {
            fieldDefaults: {
                maxWidth: 500
            }
        }
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
                    editable: false,
                    forceSelection: true,
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
                    forceSelection: true,
                    mode: 'remote',
                    store: rolesStore
                },
                {
                    xtype: 'combobox',
                    name: 'Resource',
                    fieldLabel: 'Resource',
                    valueField: 'ResourceID',
                    displayField: 'Name',
                    forceSelection: true,
                    allowBlank: true,
                    mode: 'remote',
                    store: resourcesStore
                }
            ]
        }, this.detailCfg);

        me.callParent(arguments);
    }
});