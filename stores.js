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
        url: WEB_SERVICE_BASE_URL + 'collections.json',
        reader: {
            type: 'json',
            root: 'collections',
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
            idProperty: 'db-id'
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
    storeId: 'terminatorStore',
    model: 'Terminator',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url : WEB_SERVICE_BASE_URL + 'terminators.json',
        reader: {
            type: 'json',
            root: 'terminators',
            idProperty: 'db-id'
        }
    },
    sorters:[
        {
            property : 'termination-efficiency',
            direction: 'DESC'
        }
    ]
});