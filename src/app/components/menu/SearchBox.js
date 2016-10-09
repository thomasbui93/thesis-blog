import React, { Component } from 'react';

export class SearchBox extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="menu__search input--inline">
                <input type="text" placeholder="Enter search term"/>
                <div className="input__button">
                    <img src="icons/search.svg"/>
                </div>
            </div>
        )
    }
}
