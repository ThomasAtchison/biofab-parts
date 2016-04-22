Ext.define('Library', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'version', type: 'string'},
        {name: 'release-date',type: 'string'}
    ]
});

Ext.define('Promoter', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'collectionId', type: 'int'},
        {name: 'displayId', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'dnaSequence', type: 'string'},
        {name: 'meanFluorescencePerCell',type: 'float'},
        {name: 'meanFluorescencePerCellSD', type: 'float'},
        {name: 'constructId', type: 'string'}
    ]
});

Ext.define('Terminator', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'collectionId', type: 'int'},
        {name: 'displayId',  type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'dnaSequence', type: 'string'},
        {name: 'terminationEfficiency',type: 'float'},
        {name: 'standardDeviation', type: 'float'},
        {name: 'constructId', type: 'string'}
    ]
});
      
Ext.define('PartPerformance', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'biofabId', type: 'string'},
                {name: 'value', type: 'float'}
            ]
});