Ext.define('JaztecAclAdmin.view.privileges.MasterDetail', {
    extend: 'JaztecAdmin.view.base.editor.MasterDetail',
    alias: 'widget.jaztecacladmin-privileges-masterdetail',

    masterCfg: {
        columns: [
            {
                text: 'Type',
                dataIndex: 'Type',
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
        var me = this;

        me.callParent(arguments);
    }
});