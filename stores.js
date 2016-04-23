/*
 *
 *
 *
 */

var libraryStore = new Ext.data.JsonStore({
    storeId: 'libraryStore',
    autoLoad: true,
    model: 'Library',
    proxy: {
        type: 'ajax',
        url: WEB_SERVICE_BASE_URL + 'library.json',
        reader: {
            type: 'json',
            root: 'libraries',
            idProperty: 'id'
        }
    }
});

var promoterStore = new Ext.data.Store({
    model: 'Promoter',
    proxy: {
        type: 'ajax',
        url : '',
        reader: {type: 'json'}
    },
    sorters: [
        {
            property : 'meanFluorescencePerCell',
            direction: 'DESC'
        }
    ],
    autoLoad: false
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