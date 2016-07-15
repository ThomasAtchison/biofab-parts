/*
 *
 * 
 * 
 */

Ext.define('RandomPromoterLibraryDatasheet',
{
    extend: 'Ext.panel.Panel',
    id: 'randomPromoterLibraryDatasheet',
    title: 'Random Promoter Library',
    layout: 'absolute',
    tpl: '',
    closable: true,
    autoScroll: true,
    closeAction: 'destroy',
    
    record: null,
    parts: null,
    designPanel: null,
    collectionTextArea: null,
    performancePanel: null,

    constructor: function() {
        this.items = [
            {
                xtype: 'panel',
                title: '',
                height: 800,
                layout: 'border',
                width: 600,
                itemId: 'centerPanel',
                x: 25,
                y: 25,
                floating: false,
                shadowOffset: 6,
                autoShow: true,
                draggable: false,
                region:'center',
                items: [
                    {
                        xtype: 'panel',
                        itemId: 'designPanel',
                        title: 'Design',
                        layout: 'fit',
                        region: 'north',
                        split: true,
                        height:250,
                        items: [
                            {
                                xtype: 'textarea',
                                itemId: 'collectionTextArea'
                            },
                            
                        ]
                    },
                    {
                        xtype: 'panel',
                        title: 'Performance',
                        itemId: 'performancePanel',
                        layout: 'auto',
                        height: 450,
                        region:'center',
                        split: true
                    },
                    {
                        xtype:'panel',
                        title: 'Notes',
                        itemId: 'notesPanel',
                        layout: 'fit',
                        height: 100,
                        region: 'south',
                        split: true,
                        items:[
                            {
                                xtype: 'textarea',
                                value: 'The bars indicate the strength of each promoter in the library.  ' +
                                       'Hover the mouse over a bar to see the identifier of the promoter.\n',
                                hidden: false
                            }
                        ]

                    }
                ]
            }
        ];
        
        this.callParent();
        
        this.designPanel = this.getComponent('centerPanel').getComponent('designPanel');
        this.collectionTextArea = this.designPanel.getComponent("collectionTextArea");
        this.performancePanel = this.getComponent('centerPanel').getComponent('performancePanel');
    },
   
    //
    //  Public Methods
    //
    
    displayInformation: function(record)
    {
            var description = null;
            this.record = record;
            description = record.get('description');
            this.collectionTextArea.setValue(description);    
            this.displayBarChart();
    },
    
    /*
    *  Private Methods
    */

    displayBarChart: function()
    {
        if(this.record !== null)
        {
            var id = this.record.get('biofab-id');
            var element = this.performancePanel.getEl();

            var barChart = Ext.create('Ext.chart.Chart',
                {
                    theme: 'Category1',
                    width: 600,
                    height: 400,
                    renderTo: element.dom,
                    animate: false,
                    store: randomPromoterStore,
                    axes: [
                        {
                          type: 'Numeric',
                          position: 'left',
                          fields: ['strength'],
                          label: {
                              renderer: Ext.util.Format.numberRenderer('0,0'),
                              font: '11px Arial'
                          },
                          title: 'Strength (mean fluorescence per cell)',
                          grid: true,
                          minimum: 0,
                          labelTitle: {font: '12px Arial'}
                        }
                    ],
                    series: [
                        {
                            type: 'column',
                            axis: 'left',
                            xField: 'biofab-id',
                            yField: 'strength',
                            highlight: false,
                            style: {opacity: 1.0},
                            tips: {
                              trackMouse: true,
                              width: 120,
                              height: 28,
                              renderer: function(storeItem, item) {
                                this.setTitle('Part: ' + storeItem.get('biofab-id'));
                              }
                            }
                        }
                    ]
                }
            );

            this.performancePanel.removeAll(true);
            this.performancePanel.add(barChart);
            this.performancePanel.doLayout();
        }
        else
        {
          Ext.Msg.alert('Part Performance', 'There is an error. The part performance bar chart can not be generated.');
        }
    }
});
