import React, {Component} from 'react';
import {ArticleShortList} from '../../components/articles/ArticleShortList';
import { getAll } from '../../utils/post';
import {Loading} from '../../components/static/Loading';
import {Error} from '../../components/static/Error';
import {NotFound} from '../../components/static/NotFound';

import DocumentMeta from 'react-document-meta';

export class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            articles: [],
            error: null
        }
    }
    componentDidMount(){
        getAll().then((articles)=>{
            this.setState({
                articles: articles,
                loading: false
            })

        }, (error)=>{
           this.setState({
               loading: false,
               error: error
           })
        });
    }
    render() {
        if(this.state.error!== null){
            return <Error/>;
        }
        if(this.state.loading){
            return <Loading/>
        }
        const meta =  {
            title: 'All Articles',
            description: 'Articles about web development',
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
                <ArticleShortList articleList={this.state.articles}/>
            </div>
        )
    }
}
