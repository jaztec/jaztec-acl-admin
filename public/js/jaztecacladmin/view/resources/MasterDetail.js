/**
 * @class JaztecAclAdmin.view.resources.MasterDetail
 * Master detail configuration for the resources
 * @author Jasper van Herpt <jasper.v.herpt@gmail.com>
 */
Ext.define('JaztecAclAdmin.view.resources.MasterDetail', {
    extend: 'JaztecAdmin.view.base.editor.MasterDetail',
    alias: 'widget.jaztecacladmin-resources-masterdetail',

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
        formCfg: {
            fieldDefaults: {
                maxWidth: 500
            }
        }
    },

    initComponent: function()
    {
        var me = this,
            store = Ext.create('JaztecAclAdmin.store.resources.Main');

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
                    valueField: 'ResourceID',
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