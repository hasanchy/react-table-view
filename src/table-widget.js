import React, { Component } from 'react';
import TableView from './table-view';
import UserDetails from './user-details';

class TableWidget extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchKeyword:"",
            checkAll: false,
            selectionInfo:"",
            ajax: {
                "status":true,
                "total_records":58,
                "page_limit":25,
                "current_page":1
            },
            data: this.getViewModelData(),
            totalRecords: 5,
            tableKey: Math.random(),
            sort:{
                key:"name",
                direction:"asc"
            },
            page:1,
            limit:25
        }
    }
    
    getViewModelData(){
         
         var viewModelData = {  
            "thead":{  
               "tr":[
                 {  
                 "th":[ 
                     // {  
                     //     "text":""
                     // }, 
                    {  
                        "text":"",
                        "checkable":true
                    },
                    {  
                        "text":"NAME",
                        "sort":{
                            "key":"name",
                            "direction":"asc"
                        }
                    },
                    {  
                       "text":"EMAIL",
                       "sort":{
                           "key":"email"
                       }
                    },
                    {  
                       "text":"ROLE",
                       "sort":{
                           "key":"role"
                       }
                    },
                    {  
                       "text":"DIVISION",
                       "sort":{
                           "key":"division"
                       }
                    },
                    {  
                       "text":"# LOGINS",
                       "sort":{
                           "key":"login_count"
                       }
                    },
                    {  
                       "text":"LAST LOGIN",
                       "sort":{
                           "key":"last_login"
                       }
                    },
                    {  
                       "text":"ACTIONS"
                    }
                 ],
                 "style":"",
                 "checkbox":{
                     "checked":false
                 }
             }
             ]
            },
            "tbody":{  
               "tr":[  
                  {  
                     "td":[  
                         // {  
                         //     "text":"",
                         //     "style":{
                         //         "padding":"0px"
                         //     },
                         //     "expandable":true
                         // },
                         {  
                             "text":"",
                             "style":{
                                 "padding":"0px"
                             },
                             "expandable":true
                         },
                         {  
                           "text":"Anne Fedi"
                        },
                        {  
                           "text":"anne_fedi@ses.dta.customergauge.com"
                        },
                        {  
                           "text":"User"
                        },
                        {  
                           "text":"Global"
                        },
                        {  
                           "text":8
                        },
                        {  
                           "text":"2019-02-04 11:45:41"
                        },
                        {  
                           "text":""
                        }
                     ],
                     "style":"",
                     "expand":{
                         "status":false,
                         "component":{
                             "name":"UserDetails",
                             "data": {
                                 "description":"This is a test user."
                             }
                         }
                     },
                     "checkbox":{
                         "checked":false,
                         "value":23
                     }
                  },
                  {  
                     "td":[  
                         // {  
                         //     "text":"",
                         //     "style":{
                         //         "padding":"0px"
                         //     },
                         //     "expandable":true
                         // },
                         {  
                             "text":"",
                             "style":{
                                 "padding":"0px"
                             },
                             "checkable":true
                         },
                         {  
                           "text":"Gavin Striegler"
                        },
                        {  
                           "text":"gavin_striegler@ses.dta.customergauge.com"
                        },
                        {  
                           "text":"Admin"
                        },
                        {  
                           "text":"APAC"
                        },
                        {  
                           "text":25
                        },
                        {  
                           "text":"2018-09-27 08:58:48"
                        },
                        {  
                           "text":""
                       }
                     ],
                     "style":"",
                     "expand":{
                         "status":false,
                         "component":{
                             "name":"UserDetails",
                             "data": {
                                 "description":"This is a test user."
                             }
                         }
                     },
                     "checkbox":{
                         "checked":false,
                         "value":2
                     }
                  },
                  {  
                     "td":[  
                         // {  
                         //     "text":"",
                         //     "style":{
                         //         "padding":"0px"
                         //     },
                         //     "expandable":true
                         // },
                         {  
                             "text":"",
                             "style":{
                                 "padding":"0px"
                             },
                             "checkable":true
                         },
                         {  
                           "text":"Stella Wohlfeil",
                           "style":{  
                              "color":"#aaa"
                           }
                        },
                        {  
                           "text":"stella_wohlfeil@ses.dta.customergauge.com",
                           "style":{  
                              "color":"#aaa"
                           }
                        },
                        {  
                           "text":"User",
                           "style":{  
                              "color":"#aaa"
                           }
                        },
                        {  
                           "text":"Global",
                           "style":{  
                              "color":"#aaa"
                           }
                        },
                        {  
                           "text":19,
                           "style":{  
                              "color":"#aaa"
                           }
                        },
                        {  
                           "text":"2019-05-16 13:50:07",
                           "style":{  
                              "color":"#aaa"
                           }
                        },
                        {  
                           "text":""
                       }
                     ],
                     "style":"",
                     "expand":{
                         "status":false,
                         "component":{
                             "name":"UserDetails",
                             "data": {
                                 "description":"This is a test user."
                             }
                         }
                     },
                     "checkbox":{
                         "checked":false,
                         "value":66
                     }
                  },
                  {  
                     "td":[  
                         // {  
                         //     "text":"",
                         //     "style":{
                         //         "padding":"0px"
                         //     },
                         //     "expandable":true
                         // },
                         {  
                             "text":"",
                             "style":{
                                 "padding":"0px"
                             },
                             "checkable":true
                         },
                         {  
                           "text":"Nicola Frauendorf"
                        },
                        {  
                           "text":"nicola_frauendorf@ses.dta.customergauge.com"
                        },
                        {  
                           "text":"Admin"
                        },
                        {  
                           "text":"EMEA"
                        },
                        {  
                           "text":74
                        },
                        {  
                           "text":"2019-03-07 10:18:35"
                        },
                        {  
                           "text":""
                        }
                     ],
                     "style":"",
                     "expand":{
                         "status":false,
                         "component":{
                             "name":"UserDetails",
                             "data": {
                                 "description":"This is a test user."
                             }
                         }
                     },
                     "checkbox":{
                         "checked":false,
                         "value":10
                     }
                  },
                  {  
                     "td":[  
                         // {  
                         //     "text":"",
                         //     "style":{
                         //         "padding":"0px"
                         //     },
                         //     "expandable":true
                         // },
                         {  
                             "text":"",
                             "style":{
                                 "padding":"0px"
                             },
                             "checkable":true
                         },
                         {  
                           "text":"JP Tognon"
                        },
                        {  
                           "text":"jp_tognon@ses.dta.customergauge.com"
                        },
                        {  
                           "text":"Admin"
                        },
                        {  
                           "text":"Global"
                        },
                        {  
                           "text":43
                        },
                        {  
                           "text":"2018-11-01 16:47:08"
                        },
                        {  
                           "text":""
                       }
                     ],
                     "style":"",
                     "expand":{
                         "status":false,
                         "component":{
                             "name":"UserDetails",
                             "data": {
                                 "description":"This is a test user."
                             }
                         }
                     },
                     "checkbox":{
                         "checked":true,
                         "value":8
                     }
                  }
               ]
           }
         }
         
         return viewModelData;
     }
    
     handleRowSelect = ( rowValues ) => {
       console.log( rowValues );
       var total = rowValues.length;
       var users = ( total === 1 ) ? "user" : "users";
       var selectionInfo = ( rowValues.length > 0 ) ? rowValues.length + " " + users + " selected" : "";
       this.setState({
          selectionInfo: selectionInfo
       });
   }
    
    render() {
        var externalComponents = {
            "UserDetails":UserDetails
        };
        
        return (
            <div style={{ width: '100%' }}>
                <span style={{float:"left"}}>{this.state.selectionInfo}</span>
                <TableView
                          data={this.state.data}
                          totalRecords ={this.state.totalRecords}
                          page={this.state.page}
                          sort={this.state.sort}
                          limit={this.state.limit}
                          searchKeyword={this.state.searchKeyword}
                          externalComponents={externalComponents}
                          onRowSelect={this.handleRowSelect}
                          // onPageChange={this.handlePageChange}
                          // onSortChange={this.handleSortChange}
                          // onLimitChange={this.handleLimitChange}
                      />
            </div>
        )
    }
    
}

export default TableWidget;