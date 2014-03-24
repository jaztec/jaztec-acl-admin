Ext.define('JaztecAclAdmin.view.roles.MasterDetail', {
    extend: 'JaztecAdmin.view.base.editor.MasterDetail',
    alias: 'widget.jaztecacladmin-roles-masterdetail',
    
    initComponent: function()
    {
        var me = this;

        me.masterCfg = {
            columns: [
                {
                    text: 'Name'
                }
            ]
        };

        me.store = Ext.create('JaztecAclAdmin.store.roles.Main');

        me.callParent(arguments);
    }
});