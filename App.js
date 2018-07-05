Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        this.add( {
            xtype: 'rallytextfield',
            fieldLabel: 'Workspace ID: ',
            value: Rally.environment.getContext().getWorkspace().ObjectID,
            readOnly: true,
            width: 600
        });
        this.add( {
            xtype: 'rallytextfield',
            fieldLabel: 'Project ID: ',
            value: Rally.environment.getContext().getProject().ObjectID,
            readOnly: true,
            width: 600
        });
        this.add( {
            xtype: 'rallytextfield',
            fieldLabel: 'User ID: ',
            value: Rally.environment.getContext().getUser().ObjectID,
            readOnly: true,
            width: 600
        });
        this.add( {
            xtype: 'rallytextfield',
            fieldLabel: 'User Name: ',
            value: Rally.environment.getContext().getUser().UserName,
            readOnly: true,
            width: 600
        });
    }
});
