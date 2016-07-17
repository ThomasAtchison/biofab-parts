/*
 * Electronic Datasheet Viewport
 *  
 */

Ext.define('ElectronicDatasheetViewport', { 
    extend: 'Ext.container.Viewport',
    layout: 'border',
    performanceStore: null,
    parts: null,
    libraryGridPanel: null,
    promoterGridPanel: null,
    terminatorGridPanel: null,
    infoTabPanel: null,
    partsToolbarText: null,
	
    constructor: function()
    {   
        this.items = [
            {
                xtype: 'panel',
                region: 'west',
                width: 500,
                layout: 'border',
                split: true,
                collapsible: true,
                id: 'inventoryContainer',
                items: [
                    {
                        xtype: 'grid',
                        id: 'libraryGridPanel',
                        store: 'libraryStore',
                        region: 'north',
                        split: true,
                        height: 175,
                        // autoExpandColumn: 1,
                        minColumnWidth: 60,
                        activeItem: 0,
                        columns: [
                            {
                                xtype: 'gridcolumn',
                                dataIndex: 'name',
                                header: 'Name',
                                sortable: true,
                                width: 280,
                                editable: false
                            },
                            {
                                xtype: 'gridcolumn',
                                header: 'Version',
                                sortable: true,
                                editable: false,
                                width: 100,
                                dataIndex: 'version'
                            },
                            {
                                xtype: 'gridcolumn',
                                header: 'Release Date',
                                sortable: true,
                                editable: false,
                                width: 120,
                                dataIndex: 'release-date'
                            }
                        ],
                        tbar: {
                            xtype: 'toolbar',
                            id: 'libraryToolbar',
                            items: [
                                {
                                    xtype: 'tbtext',
                                    html: '<b>Collections</b>'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Export',
                                    tooltip: 'Export library information in JSON format.',
                                    id: 'libraryGridExportButton'
                                }
                            ]
                        }
                    },
                    {
                        xtype: 'panel',
                        id: 'partsTabPanel',
                        autoScroll: true,
                        region: 'center',
                        split: true,
                        height: 400,
                        tbar:{
                            xtype: 'toolbar',
                            id: 'partsToolbar',
                            items: [
                                {
                                    xtype: 'tbtext',
                                    id: "partsToolbarText",
                                    style: {fontWeight:'bold'},
                                    text: 'Modular Promoter Library'
                                },
                                {
                                    xtype: 'tbfill'
                                }//,
                                // {
                                //     xtype: 'tbseparator'
                                // },
                                // {
                                //     xtype: 'button',
                                //     text: 'Export',
                                //     tooltip: 'Export the genetic parts in JSON format',
                                //     id: 'partsExportButton',
                                //     handler: this.partsExportButtonHandler,
                                //     hidden: true
                                // }
                            ]
                        },
                        items:[
                            {
                                xtype: 'gridpanel',
                                id: 'promoterGridPanel',
                                title: '',
                                store: modularPromoterStore, 
                                columnLines: true,
                                hidden: false,
                                columns: [
                                    {
                                        xtype: 'gridcolumn',
                                        dataIndex: 'biofab-id',
                                        header: 'BIOFAB ID',
                                        sortable: true,
                                        width: 125,
                                        editable: false
                                    },
                                    {
                                        xtype: 'numbercolumn',
                                        dataIndex: 'strength',
                                        header: 'Strength',
                                        sortable: true,
                                        width: 125,
                                        align: 'left',
                                        editable: false,
                                        format: '0,000'
                                    },
                                    {
                                        xtype: 'numbercolumn',
                                        dataIndex: 'standard-deviation',
                                        header: 'Standard Deviation',
                                        sortable: true,
                                        width: 125,
                                        align: 'left',
                                        editable: false,
                                        format: '0,000.00'
                                    }
                                ]
                            },
                            {
                                xtype: 'gridpanel',
                                id: 'randomPromoterGridPanel',
                                title: '',
                                store: randomPromoterStore, 
                                columnLines: true,
                                hidden: false,
                                columns: [
                                    {
                                        xtype: 'gridcolumn',
                                        dataIndex: 'biofab-id',
                                        header: 'BIOFAB ID',
                                        sortable: true,
                                        width: 125,
                                        editable: false
                                    },
                                    {
                                        xtype: 'numbercolumn',
                                        dataIndex: 'strength',
                                        header: 'Strength',
                                        sortable: true,
                                        width: 125,
                                        align: 'left',
                                        editable: false,
                                        format: '0,000'
                                    },
                                    {
                                        xtype: 'numbercolumn',
                                        dataIndex: 'standard-deviation',
                                        header: 'Standard Deviation',
                                        sortable: true,
                                        width: 125,
                                        align: 'left',
                                        editable: false,
                                        format: '0,000.00'
                                    }
                                ]
                            },
                            {
                                xtype: 'gridpanel',
                                id: 'tieGridPanel',
                                title: '',
                                store: tieStore, 
                                columnLines: true,
                                hidden: false,
                                columns: [
                                    {
                                        xtype: 'gridcolumn',
                                        dataIndex: 'biofab-id',
                                        header: 'Identifier',
                                        sortable: true,
                                        width: 125,
                                        editable: false
                                    },
                                    {
                                        xtype: 'gridcolumn',
                                        dataIndex: 'name',
                                        header: 'Name',
                                        sortable: true,
                                        width: 125,
                                        editable: false
                                    },
                                    {
                                        xtype: 'numbercolumn',
                                        dataIndex: 'strength',
                                        header: 'Strength',
                                        sortable: true,
                                        width: 125,
                                        align: 'left',
                                        editable: false,
                                        format: '0,000'
                                    },
                                    {
                                        xtype: 'numbercolumn',
                                        dataIndex: 'standard-deviation',
                                        header: 'Standard Deviation',
                                        sortable: true,
                                        width: 125,
                                        align: 'left',
                                        editable: false,
                                        format: '0,000.00'
                                    },
                                    {
                                        xtype: 'gridcolumn',
                                        dataIndex: 'strain-biofab-id',
                                        header: 'Strain ID',
                                        sortable: true,
                                        width: 125,
                                        editable: false
                                    },
                                    {
                                        xtype: 'gridcolumn',
                                        dataIndex: 'plasmid-biofab-id',
                                        header: 'Plasmid ID',
                                        sortable: true,
                                        width: 125,
                                        editable: false
                                    },
                                    {
                                        xtype: 'gridcolumn',
                                        dataIndex: 'cds-biofab-id',
                                        header: 'CDS ID',
                                        sortable: true,
                                        width: 125,
                                        editable: false
                                    }
                                ]
                            },
                            {
                                xtype: 'gridpanel',
                                id: 'terminatorGridPanel',
                                title: '',
                                hidden: true,
                                store: terminatorStore, 
                                columnLines: true,
                                //stripeRows: true,
                                //features: [{ftype:'grouping'}],
                                columns: [
                                    {
                                        xtype: 'gridcolumn',
                                        dataIndex: 'biofab-id',
                                        header: 'BIOFAB ID',
                                        sortable: false,
                                        width: 125,
                                        editable: false
                                    },
                                    {
                                        xtype: 'gridcolumn',
                                        dataIndex: 'description',
                                        header: 'Description',
                                        sortable: false,
                                        width: 150,
                                        editable: false
                                    },
                                    {
                                        xtype: 'numbercolumn',
                                        dataIndex: 'termination-efficiency',
                                        header: 'Termination Efficiency',
                                        sortable: false,
                                        width: 150,
                                        align: 'left',
                                        editable: false,
                                        format: '0,000'
                                    },
                                    {
                                        xtype: 'numbercolumn',
                                        dataIndex:'termination-efficiency-sd',
                                        header: 'SD',
                                        sortable: false,
                                        width: 80,
                                        align: 'left',
                                        editable: false,
                                        format: '0,000.00'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                activeTab: 0,
                region: 'center',
                split: true,
                id: 'infoTabPanel'
            }
        ];
        
        this.callParent();

        var libraryGridExportButton = Ext.ComponentManager.get('libraryGridExportButton'); 
        libraryGridExportButton.setHandler(this.libraryGridExportButtonClickHandler, this);
       
        this.libraryGridPanel = Ext.ComponentManager.get('libraryGridPanel');
        var libraryGridSelectionModel = this.libraryGridPanel.getSelectionModel();
        libraryGridSelectionModel.on('rowselect', this.libraryGridRowSelectHandler, this);
        
	    this.promoterGridPanel = Ext.ComponentManager.get('promoterGridPanel');
        var promoterGridSelectionModel = this.promoterGridPanel.getSelectionModel();
	    promoterGridSelectionModel.on('rowselect', this.promoterGridRowSelectHandler, this);

        Ext.ComponentManager.get('randomPromoterGridPanel').getSelectionModel().on('rowselect', this.randomPromoterGridRowSelectHandler, this);
            
        this.terminatorGridPanel = Ext.ComponentManager.get('terminatorGridPanel');
        var terminatorGridSelectionModel = this.terminatorGridPanel.getSelectionModel();
	    terminatorGridSelectionModel.on('rowselect', this.terminatorGridRowSelectHandler, this);
        
        this.partsToolbarText = Ext.ComponentManager.get('partsToolbarText');
        this.infoTabPanel = Ext.ComponentManager.get('infoTabPanel');

        // var datasheet = Ext.ComponentManager.get('modularPromoterLibraryDatasheet');
            
        // if(datasheet === undefined)
        // {
        //     datasheet = new ModularPromoterLibraryDatasheet();
        //     this.infoTabPanel.add(datasheet);
        // }
        
        // datasheet.displayInformation(record, store);
        
        // libraryGridSelectionModel.select(0);
    },
    
 /**********************
 * 
 *  Protected Methods
 * 
 **********************/
//         fetchParts:function()
//         {
//             Ext.Ajax.request({
//                        url: WEB_SERVICE_BASE_URL + 'parts?format=json',
//                        method: "GET",
//                        success: this.fetchPartsResultHandler,
//                        failure: this.fetchPartsErrorHandler,
// //                       params: {
// //                                    id: constructID,
// //                                    format: 'json'
// //                                },
//                        scope: this
//             });
//         },
        
        // fetchlibrary:function()
        // {
        //     Ext.Ajax.request({
        //                url: WEB_SERVICE_BASE_URL + 'library.json',
        //                method: "GET",
        //                success: this.fetchlibraryResultHandler,
        //                failure: this.fetchlibraryErrorHandler,
        //                scope: this
        //     });
        // },
	
        // showLibraryPanel: function(libraryRecord)
        // {
        //     var id = libraryRecord.get('id');
        //     var panel;

        //     // if(id === 1)
        //     // {
        //     //     panel = Ext.ComponentManager.get('pilotProjectPanel');
                
        //     //     if(panel === undefined)
        //     //     {
        //     //         panel = new PilotProjectPanel();
        //     //         this.infoTabPanel.add(panel);
        //     //     }
        //     // }

        //     if(id === 1)
        //     {
        //         panel = Ext.ComponentManager.get('modularPromoterLibraryPanel');
                
        //         if(panel === undefined)
        //         {
        //             panel = new ModularPromoterLibraryPanel();
        //             this.infoTabPanel.add(panel);
        //         }
        //     }

        //     if(id === 2)
        //     {
        //         panel = Ext.ComponentManager.get('randomPromoterLibraryPanel');
                
        //         if(panel === undefined)
        //         {
        //             panel = new RandomPromoterLibraryPanel();
        //             this.infoTabPanel.add(panel);
        //         }
        //     }

        //     if(id === 4)
        //     {
        //         panel = Ext.ComponentManager.get('terminatorLibraryPanel');
                
        //         if(panel === undefined)
        //         {
        //             panel = new TerminatorLibraryPanel();
        //             this.infoTabPanel.add(panel);
        //         }
        //     }
            
        //     this.infoTabPanel.setActiveTab(panel);
        //     panel.showInfo(libraryRecord, this.parts);
        // },

        showPartPanel: function(partRecord)
        {
            var datasheet = new GeneticPartDatasheet();
            this.infoTabPanel.add(datasheet);
            this.infoTabPanel.setActiveTab(datasheet);
            datasheet.showInfo(partRecord, this.parts);
        },
        
//        retrieveGecMeasurement: function(part)
//        {
//            var measurement = null;
//            var performance = part.performance;
//            var measurements;
//            var measurementsCount;
//
//            if(performance != undefined)
//            {
//                measurements = performance.measurements;
//                measurementsCount = measurements.length;
//                
//                for(var i = 0; i < measurementsCount; i += 1)
//                {
//                    if(measurements[i].type === 'GEC')
//                    {
//                        measurement = measurements[i];
//                    }
//                }
//
//            }
//            
//            return measurement;
//        },
        
        // REFACTOR: Place this function in a utility class
//        retrieveMeasurement: function(part)
//        {
//            var measurement;
//            var performance = part.performance;
//            var measurements;
//            var measurementsCount;
//            var bgeMeasurements = [];
//            var maxMeasurement;
//
//            if(performance != undefined)
//            {
//                measurements = performance.measurements;
//                measurementsCount = measurements.length;
//                
//                for(var i = 0; i < measurementsCount; i += 1)
//                {
//                    if(measurements[i].type === 'GEC')
//                    {
//                        //measurement = measurements[i];
//                        bgeMeasurements.push(measurements[i]);
//                    }
//                }
//
//                if(bgeMeasurements.length > 1)
//                {
//                    bgeMeasurements.sort(
//                        function(a,b)
//                        {
//                            return a.value - b.value;
//                        }
//                    );
//
//                    maxMeasurement = bgeMeasurements.pop();
//                    measurement = {label: 'Maximum ' + maxMeasurement.label, unit: maxMeasurement.unit, value: maxMeasurement.value};
//                }
//                else
//                {
//                    if(bgeMeasurements.length === 1)
//                    {
//                        measurement = bgeMeasurements[0];
//                    }
//                    else
//                    {
//                        measurement = {label: 'Unavailable', unit: 'None', value: 0};
//                    }
//                }
//            }
//            else
//            {
//                measurement = {label: 'Unavailable', unit: 'None', value: 0};
//            }
//            
//            return measurement;
//        },
    
    //******************
    //
    //  Event Handlers
    //
    //******************

    libraryGridExportButtonClickHandler: function(button, event)
    {
        var exportWindow = window.open(WEB_SERVICE_BASE_URL + 'libraries.json',"libraries","width=640,height=480");
        exportWindow.scrollbars.visible = true;
        exportWindow.alert("Use File/Save As in the menu bar to save this document.");
    },
    
    libraryGridRowSelectHandler: function(selectModel, rowIndex, record)
    {
        var id = record.get('id');
        var datasheet;
        var store;
        
        if(id === 1)
        {   
            Ext.ComponentManager.get('randomPromoterGridPanel').hide();
            Ext.ComponentManager.get('tieGridPanel').hide();
            Ext.ComponentManager.get('terminatorGridPanel').hide();
            Ext.ComponentManager.get('promoterGridPanel').show();
            
            datasheet = Ext.ComponentManager.get('modularPromoterLibraryDatasheet');
            
            if(datasheet === undefined)
            {
                datasheet = new ModularPromoterLibraryDatasheet();
                this.infoTabPanel.add(datasheet);
            }
            
            datasheet.displayInformation(record, store);
        }

        if(id === 2){
            Ext.ComponentManager.get('promoterGridPanel').hide();
            Ext.ComponentManager.get('tieGridPanel').hide();
            Ext.ComponentManager.get('terminatorGridPanel').hide();
            Ext.ComponentManager.get('randomPromoterGridPanel').show();

            // datasheet = Ext.ComponentManager.get('randomPromoterLibraryDatasheet');
            
            // if(datasheet === undefined) {
            //     datasheet = new RandomPromoterLibraryDatasheet();
            //     this.infoTabPanel.add(datasheet);
            //     datasheet.displayInformation(record);
            // }
            // else {
            //     datasheet.displayInformation(record);
            // }
        }
        
        if(id === 3)
        {    
            Ext.ComponentManager.get('promoterGridPanel').hide();
            Ext.ComponentManager.get('randomPromoterGridPanel').hide();
            Ext.ComponentManager.get('terminatorGridPanel').hide();
            Ext.ComponentManager.get('tieGridPanel').show();
        }

        if(id === 4)
        {
            Ext.ComponentManager.get('promoterGridPanel').hide();
            Ext.ComponentManager.get('randomPromoterGridPanel').hide();
            Ext.ComponentManager.get('tieGridPanel').hide();
            Ext.ComponentManager.get('terminatorGridPanel').show();
        }
        
        // this.infoTabPanel.setActiveTab(panel);
        // panel.showInfo(record, this.parts);
        var collectionName = record.get('name');
        this.partsToolbarText.setText(collectionName);
    },
    
    // promoterGridRowSelectHandler: function(selectModel, rowIndex, record)
    // {
    //    var partID = record.get("displayId");
    //    var description = record.get('description');
    //    var relationRecord = null;
    //    var constructID = null;
    //    var constructRecord = null;
    //    var constructRecords = null;
    //    var constructRecordsForDisplay = [];
    //    var relationPartID = null;
    //    var relationsCount = this.constructPartStore.getCount();

    //    for(var i = 0; i < relationsCount; i += 1)
    //    {
    //        relationRecord = this.constructPartStore.getAt(i);
    //        relationPartID = relationRecord.get("partID");

    //        if(relationPartID.toUpperCase() === partID.toUpperCase())
    //        {
    //                constructID = relationRecord.get("constructID");
    //                constructRecords = this.constructStore.query('biofab_id', new RegExp(constructID), false, false, true);
    //                constructRecord = constructRecords.itemAt(0);

    //                if(constructRecord !== null && constructRecord !== undefined)
    //                {
    //                    constructRecordsForDisplay.push(constructRecord);
    //                }
    //        }
    //    }

    //    if(constructRecordsForDisplay.length > 0)
    //    {
    //        this.constructsGridPanel.getStore().removeAll();
    //        this.constructsGridPanel.getStore().add(constructRecordsForDisplay);
    //        this.constructsLabel.setText('Constructs with ' + partID);
    //    }
    //    else
    //    {
    //        Ext.Msg.alert('Data Access Client', 'No construct has ' + description);
    //    }
    // },

    promoterGridRowSelectHandler: function(selectModel, rowIndex, record)
    {
        this.showPartPanel(record); 
    },

    randomPromoterGridRowSelectHandler: function(selectModel, rowIndex, record)
    {
        this.showPartPanel(record);
    },
    
    terminatorGridRowSelectHandler: function(selectModel, rowIndex, record)
    {
        this.showPartPanel(record);
    },
	
//        constructsGridRowSelectHandler: function(selectModel, rowIndex, record)
//	{
//	    var biofabID = record.get("biofab_id");
//            var id = record.get('id');
//
////            if(id === 2)
////            {
////                Ext.Msg.alert('Modular Promoter Library', 'At this time, only the promoter sequences are available for the constructs in the Modular Promoter Library.\n'+
////                'The complete sequence with annotations will be available in an upcoming release of the Data Access Client.');
////            }
////
////            if(id === 3)
////            {
////                Ext.Msg.alert('Random Promoter Library', 'At this time, only the promoter sequences are available for the constructs in the Random Promoter Library.\n'+
////                'The complete sequence with annotations will be available in an upcoming release of the Data Access Client.');
////            }
////
////            if(id === 4)
////            {
////                Ext.Msg.alert('Terminator Library', 'At this time, only the terminator sequences are available for the constructs in the Terminator Library.\n'+
////                'The complete sequence with annotations will be available in an upcoming release of the Data Access Client.');
////            }
//
//	    this.showDatasheet(biofabID);
//	},

//        constructStoreForDisplayLoadHandler: function(store, records, options)
//        {
//            if(this.constructStore === null)
//            {
//               this.constructStore = new ConstructStore();
//               this.constructStore.on('load', this.constructStoreLoadHandler, this);
//            }
//            
//            this.constructStore.load({callback: this.constructStoreLoadHandler, scope:this, add:false});
//        },
	
//	constructStoreLoadHandler: function(store, records, options)
//	{
//            var countA = this.constructStore.getCount();
//            var countB = this.constructsGridPanel.getStore().getCount();
//            this.constructLoadCount += 1;
//
//            if(countA !== countB && this.constructLoadCount < 10 && countA === 0)
//            {
//               this.constructStore.load({callback: this.constructStoreLoadHandler, scope:this, add:false});
//            }
//	},

        partsExportButtonHandler: function()
        {
            var exportWindow = window.open(WEB_SERVICE_BASE_URL + 'promoters.json', "Promoters", "width=640,height=480");
            exportWindow.scrollbars.visible = true;
            exportWindow.alert("Use File/Save As in the menu bar to save this document.");
        },

//        constructsGridExportButtonClickHandler: function(button, event)
//        {
//            var exportWindow = window.open(WEB_SERVICE_BASE_URL + 'constructs?format=csv',"Constructs","width=640,height=480");
//            exportWindow.scrollbars.visible = true;
//            exportWindow.alert("Use File/Save As in the menu bar to save this document.");
//        },

        // showAllPartsButtonHandler:function()
        // {
        //     Ext.getCmp('promoterGridPanel').getStore().clearFilter(false);
        //     Ext.getCmp('terminatorGridPanel').getStore().clearFilter(false);
        //     Ext.getCmp('partsToolbarText').setText('Parts');
        // },

//        showAllConstructsButtonClickHandler: function(button, event)
//        {
//            this.constructsGridPanel.getStore().clearFilter();
//            this.repopulateConstructStore();
//        },

        //Refactor!!!
//        repopulateConstructStore:function()
//        {
//            var record = null;
//            var constructRecordsForDisplay = [];
//            var count = this.constructStore.getCount();
//
//            for(var i = 0; i < count; i += 1)
//            {
//                record = this.constructStore.getAt(i);
//                constructRecordsForDisplay.push(record);
//            }
//
//            this.constructsGridPanel.getStore().removeAll();
//            this.constructsGridPanel.getStore().add(constructRecordsForDisplay);
//            this.constructsLabel.setText('Constructs');
//        },

        fetchlibraryResultHandler: function(response, opts)
        {
            var library = Ext.JSON.decode(response.responseText, true);
            var store = Ext.data.StoreManager.lookup('librarytore');
            store.loadData(library, false);

            // Temporary
            var index = store.find('id', '1', 0, false, false, true);
            store.removeAt(index);

            var libraryRecord = store.getAt(0);
            this.showCollectionPanel(libraryRecord);
        },
        
        fetchlibraryErrorHandler: function(response, opts)
        {
            Ext.Msg.alert('Fetch library', 'There was an error while attempting to fetch the library. Please reload the Data Access Client.\n' + 'Error: ' + response.responseText);
        },

        //TODO Refactor!!!
        fetchPartsResultHandler: function(response, opts)
        {
            var partsForStore = [];
            var terminators = [];
            var terminator;
            var part;
            var partForStore;
            var partsCount;
            var measurement;
            var performance;
            var measurements;
            var measurementsCount;
 
            if(response.responseText.length > 0)
            {
                this.parts = Ext.JSON.decode(response.responseText, true);
                partsCount = this.parts.length;

                for(var i = 0; i < partsCount; i += 1)
                {
                    part = this.parts[i];
                    
                    // Temporary Filter
                    if(part.type === 'promoter' && part.collectionID !== 1)
                    {
                        performance = part.performance;
                        
                        if(performance != undefined)
                        {
                            measurements = performance.measurements;
                            measurementsCount = measurements.length;

                            for(var j = 0; j < measurementsCount; j += 1)
                            {
                                if(measurements[j].type === 'MFC')
                                {
                                    measurement = measurements[j];
                                    partForStore = {
                                        collectionId: part.collectionID,
                                        displayId: part.displayID,
                                        type: part.type,
                                        description: part.description,
                                        dnaSequence: part.dnaSequence.nucleotides,
                                        meanFluorescencePerCell: measurement.value,
                                        meanFluorescencePerCellSD: measurement.standardDeviation,
                                        constructId: measurement.constructId
                                    }
                                    partsForStore.push(partForStore);
                                }
                            }
                        }
                    }
                    
                    if(part.type === 'terminator')
                    {
                        performance = part.performance;
                        
                        if(performance != undefined)
                        {
                            measurements = performance.measurements;
                            measurementsCount = measurements.length;

                            for(var k = 0; k < measurementsCount; k += 1)
                            {
                                if(measurements[k].type === 'TE')
                                {
                                    measurement = measurements[k];
                                    terminator = {
                                        collectionId: part.collectionID,
                                        displayId: part.displayID,
                                        type: part.type,
                                        description: part.description,
                                        dnaSequence: part.dnaSequence.nucleotides,
                                        terminationEfficiency: measurement.value,
                                        standardDeviation: measurement.standardDeviation,
                                        constructId: measurement.constructId
                                    }
                                    terminators.push(terminator);
                                }
                            }
                        }
                    }
                }
                
                this.promoterGridPanel.getStore().loadData(partsForStore, false);
                this.terminatorGridPanel.getStore().loadData(terminators, false);
                this.fetchlibrary();
            }
            else
            {
                  Ext.Msg.alert('Fetch Parts', 'There was an error while attempting to fetch the parts. Please reload the Data Access Client.\n' + 'Error: ' + response.responseText);
            }
        },

        fetchPartsErrorHandler: function(response, opts)
        {
            Ext.Msg.alert('Fetch Parts', 'There was an error while attempting to fetch the parts. Please reload the Data Access Client.\n' + 'Error: ' + response.responseText);
        }
});
