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

// Deprecated
Ext.define('ModularPromoter', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'collection-id', type: 'int'},
        {name: 'db-id', type: 'int'},
        {name: 'id', type: 'string'},
        {name: 'dna-sequence', type: 'string'},
        {name: 'mean-fluorescence-per-cell',type: 'float'},
        {name: 'standard-deviation', type: 'float'},
        {name: 'plasmid-id', type: 'string'}
    ]
});

Ext.define('Promoter', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'db-id', type: 'int'},
        {name: 'biofab-id', type: 'string'},
        {name: 'dna-sequence', type: 'string'},
        {name: 'strength',type: 'float'},
        {name: 'standard-deviation', type: 'float'},
        {name: 'plasmid-biofab-id', type: 'string'}
    ]
});

Ext.define('Terminator', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'collection-id', type: 'int'},
        {name: 'db-id',  type: 'int'},
        {name: 'biofab-id',  type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'dna-sequence', type: 'string'},
        {name: 'termination-efficiency',type: 'float'},
        {name: 'termination-efficiency-sd', type: 'float'},
        {name: 'plasmid-id', type: 'string'},
        {name: 'strain-id', type: 'string'},
    ]
});
      
Ext.define('PartPerformance', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'biofabId', type: 'string'},
                {name: 'value', type: 'float'}
            ]
});