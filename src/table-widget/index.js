import React, { Component } from 'react';
import TableView from '../table-view';
import UserDetails from './user-details';
import ExpandData from './expand-data';
import CheckboxData from './checkbox-data';

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
            data: ExpandData,
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
                          onSortChange={this.handleSortChange}
                          // onLimitChange={this.handleLimitChange}
                      />
            </div>
        )
    }
    
}

export default TableWidget;