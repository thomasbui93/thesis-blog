import React, {Component} from 'react';
import {ArticleShort} from './ArticleShort';
import {ReaderHelper} from './ReaderHelper';
import DocumentMeta from 'react-document-meta';
import {ZeroPost} from '../../components/static/ZeroPost';
export class ArticleShortList extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes(){
        return {
            articleList: React.propTypes.array
        }
    }
    render() {
        if(this.props.articleList.length === 0){
            return (
                <div className="layout-container">
                    <div className="layout--main">
                        <ZeroPost/>
                    </div>
                    <ReaderHelper/>
                </div>
            )
        }
        const shortList = this.props.articleList.map((article)=>{
            return (
                <ArticleShort article={article} key={article._id}/>
            )
        });
        const meta =  {
            title: 'Articles '+ this.props.articleList[0].category.title,
            description: 'All web development article about '+ this.props.articleList[0].category.title,
            canonical: 'localhost',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'web, frontend, javascript'
                }
            }
        };
        return (
            <div className="layout-container">
                <DocumentMeta {...meta}/>
                <div className="layout--main">{shortList}</div>
                <ReaderHelper/>
            </div>
        )
    }
}

