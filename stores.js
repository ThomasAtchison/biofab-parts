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

var modularPromoterStore = new Ext.data.Store({
    storeId: 'modularPromoterStore',
    model: 'Promoter',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url : WEB_SERVICE_BASE_URL + 'modular-promoters.json',
        reader: {
            type: 'json',
            root: 'modular-promoters',
            idProperty: 'db-id'
        }
    },
    sorters: [
        {
            property : 'strength',
            direction: 'DESC'
        }
    ]
});

var randomPromoterStore = new Ext.data.Store({
    storeId: 'randomPromoterStore',
    model: 'Promoter',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url : WEB_SERVICE_BASE_URL + 'random-promoters.json',
        reader: {
            type: 'json',
            root: 'random-promoters',
            idProperty: 'db-id'
        }
    },
    sorters: [
        {
            property : 'strength',
            direction: 'DESC'
        }
    ]
});

var tieStore = new Ext.data.Store({
    storeId: 'tieStore',
    model: 'TranslationInitiationElement',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url : WEB_SERVICE_BASE_URL + 'translation-initiation-elements.json',
        reader: {
            type: 'json',
            root: 'translation-initiation-elements',
            idProperty: 'db-id'
        }
    },
    sorters: [
        {
            property : 'biofab-id',
            direction: 'ASC'
        },
        {
            property : 'strength',
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
