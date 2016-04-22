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
            url: WEB_SERVICE_BASE_URL + 'library.json',
            autoLoad: true,
            model: 'Library',
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