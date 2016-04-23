/*
 *
 *
 *
 */

var libraryStore = new Ext.data.JsonStore({
    storeId: 'libraryStore',
    model: 'Library',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: WEB_SERVICE_BASE_URL + 'libraries.json',
        reader: {
            type: 'json',
            root: 'libraries',
            idProperty: 'id'
        }
    }
});

var promoterStore = new Ext.data.Store({
    storeId: 'promoterStore',
    model: 'Promoter',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url : WEB_SERVICE_BASE_URL + 'promoters.json',
        reader: {
            type: 'json',
            root: 'promoters',
            idProperty: 'id'
        }
    },
    sorters: [
        {
            property : 'mean-fluorescence-per-cell',
            direction: 'DESC'
        }
    ]
});
        
var terminatorStore = new Ext.data.Store({
    model: 'Terminator',
    proxy: {
        type: 'ajax',
        url : '',
        reader: {type: 'json'}
    },
    sorters:[
        {
            property : 'terminationEfficiency',
            direction: 'DESC'
        }
    ],
    autoLoad: false
});