Ext.define('JaztecAclAdmin.view.resources.MasterDetail', {
    extend: 'JaztecAdmin.view.base.editor.MasterDetail',
    alias: 'widget.jaztecacladmin-resources-masterdetail',

    masterCfg: {
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
        var me = this;

        me.callParent(arguments);
    }
});