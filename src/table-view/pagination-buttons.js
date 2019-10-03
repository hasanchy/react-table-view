import React, { Component } from 'react';

class PaginationButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    shouldComponentUpdate(nextProps, nextState){
        var shouldComponentUpdate = ( this.props.limit !== nextProps.limit || this.props.page !== nextProps.page || this.props.totalRecords !== nextProps.totalRecords ) ? true : false;
        return shouldComponentUpdate;
    }
    
    render() {
        
        console.log( 'rendering pagination buttons' );
        
        var limit = this.props.limit;
        var total = this.props.totalRecords;
        var current_page = this.props.page;
        
        var total_page = Math.ceil(total / limit);
        
        var start_page_number;
        var end_page_number;
        
        if ( current_page < 4) {
            start_page_number = 1;
        } else {
            start_page_number = (current_page > (total_page - 4)) ? (total_page - 4) : current_page - 2;
            start_page_number = (start_page_number < 1) ? 1 : start_page_number;
        }
        end_page_number = ((start_page_number + 4) > total_page) ? total_page : (start_page_number + 4);

        var pages = [];
        
        var active;
        for (var i = start_page_number; i <= end_page_number; i++) {
            active = ( i === current_page ) ? "active" : ""; 
            pages.push(<li key={Math.random()} className={"btn pagination_button " + active} onClick={this.props.onPageChange.bind(this,i)}>{i}</li>);
        }
        var prevClass = ( current_page > 1 ) ? "" : "disabled";
        var nextClass = ( current_page < total_page ) ? "" : "disabled";
        
        var prevPage = current_page - 1;
        var nextPage = current_page + 1;
        
        return (
            <ul style={{listStyleType:"none",display:"inline-block",float:"right",marginTop:"10px",paddingLeft:"0px"}} className="WG_010_pagination_bottom">
                <li className={"btn pagination_button " + prevClass} onClick={this.props.onPageChange.bind(this,1)}>
                    <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                </li>
                <li className={"btn pagination_button " + prevClass} onClick={this.props.onPageChange.bind(this,prevPage)}>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </li>
                {pages}
                <li className={"btn pagination_button " + nextClass} onClick={this.props.onPageChange.bind(this,nextPage)}>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </li>
                <li className={"btn pagination_button " + nextClass} onClick={this.props.onPageChange.bind(this,total_page)}>
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                </li>
            </ul>
        )
	}
	
}

export default PaginationButtons;