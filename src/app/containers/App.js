
import React, { Component } from 'react';
import { NavMenu } from '../components/menu/NavMenu';
import { Footer } from '../components/menu/Footer';

export class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <NavMenu/>
                <div className="page__wrapper">
                    { this.props.children }
                </div>
                <Footer/>
            </div>
        )
    }
}