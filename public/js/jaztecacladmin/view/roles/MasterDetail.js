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
        var me = this;
        me.callParent(arguments);
    }
});