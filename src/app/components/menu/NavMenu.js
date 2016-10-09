import React, { Component} from 'react';
import className from 'classnames';
import { Link } from 'react-router';

import {SearchBox} from './SearchBox';

export class NavMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuShow: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(){
        this.setState({
            menuShow: !this.state.menuShow
        })
    }
    render(){
        let verticalClass = className('menu__vertical', {'is_show': this.state.menuShow})
        return (
            <div className="menu">
                <Link to="/">
                <div className="logo-container">
                    <div className="logo">
                        <img src="./icons/logo.svg"/>
                    </div>
                </div>
                </Link>
                <div className="menu__nav">
                    <div className="menu__link link--highlight">
                        <Link to="articles/"> Articles</Link>
                    </div>
                    <div className="menu__link link--highlight">
                        <Link to="about">About</Link>
                    </div>
                    <div className="menu__link link--highlight">
                        <Link to="terms">Terms</Link>
                    </div>
                </div>
                <div className="menu__btn" onClick={this.toggleMenu}>
                    <i className="material-icons">&#xE0B8;</i>
                </div>
                <div className={verticalClass}>
                    <div className="menu__vertical__control">
                        <div className="menu__vertical__title">
                            Menu
                        </div>
                        <div className="menu__vertical__close" onClick={this.toggleMenu}>
                            <i className="material-icons">&#xE5CD;</i>
                        </div>
                    </div>
                    <div className="menu__vertical__box flex-row">
                        <Link className="mbtn mbtn--sm mbtn--p" to="articles/js"> Javascript</Link>
                        <Link className="mbtn mbtn--sm mbtn--p" to="articles/css"> CSS</Link>
                        <Link className="mbtn mbtn--sm mbtn--p" to="articles/progressive"> Progressive</Link>
                        <Link className="mbtn mbtn--sm mbtn--p" to="articles/nodejs"> NodeJS</Link>
                        <Link className="mbtn mbtn--sm mbtn--p" to="articles/meteor"> Meteor</Link>
                        <Link className="mbtn mbtn--sm mbtn--p" to="articles/misc"> Misc</Link>
                    </div>
                    <div className="menu__vertical__box flex-row ">
                        <Link to="/" className="mar--s"> Home</Link>
                        <Link to="/about" className="mar--s"> About</Link>
                        <Link to="/terms" className="mar--s"> Terms</Link>
                        <Link to="/privacy" className="mar--s"> Privacy</Link>
                    </div>
                </div>
            </div>
        )
    }
}
