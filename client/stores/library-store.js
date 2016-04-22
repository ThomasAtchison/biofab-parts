/*
 *
 *
 *
 */

LibraryStore = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        LibraryStore.superclass.constructor.call(this, Ext.apply({
            storeId: 'libraryStore',
            url: 'data/library.json',
            autoLoad: true,
            fields: [
                {
                    name: 'id',
                    allowBlank: false,
                    type: 'int'
                },
                {
                    name: 'name',
                    allowBlank: false,
                    type: 'string'
                },
                {
                    name: 'description',
                    allowBlank: false,
                    type: 'string'
                },
                {
                    name: 'version',
                    allowBlank: false,
                    type: 'string'
                },
                {
                    name: 'release-date',
                    allowBlank: false,
                    type: 'string'
                }
            ]
        }, cfg));
    }
});
new LibraryStore();