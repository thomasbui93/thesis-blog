
import React, { Component } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';

export class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const meta =  {
            title: 'K\'s Blog ',
            description: 'A Web development blog',
            canonical: 'localhost',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'web, frontend, javascript'
                }
            }
        };
        return (
            <div>
                <DocumentMeta {...meta}/>
                <div className="landing-page">
                    <div className="landing-page__image">
                        <img src="static/koi.jpg"/>
                    </div>
                    <div className="landing-page__content">
                        <div className="landing-page__name">
                            <span className="landing-page__logo">K</span> Blog
                        </div>
                        <div className="landing-page__description">A web development blog</div>
                        <div className="landing-page__actions text--center">
                            <Link to="about" className="mbtn mbtn--p text--uppercase">About Me</Link>
                            <Link to="articles" className="mbtn mbtn--p filled text--uppercase">Articles</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}