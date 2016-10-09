import React, {Component} from 'react';
import {CategoryLink} from './CategoryLink';
import {Link} from 'react-router';
import timeago from 'time-ago';
let ta = new timeago();

const trim_words = (theString, numWords)=> {
    let expString = theString.split(/\s+/,numWords);
    let theNewString=expString.join(" ");
    return theNewString;
}

export class ArticleShort extends Component {
    constructor(props) {
        super(props);
        this.htmltoText = this.htmltoText.bind(this);

    }
    static propTypes(){
        return{
            article: React.propTypes.object
        };
    }
    htmltoText(html){
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent;
    }
    render() {
        const article = this.props.article;
        const styleCat = {
            backgroundColor: article.category.color
        }
        return (
            <div>
                <div className="article-short">
                    <div className="article-short__entity flex-row">
                        <div className="article-short__cat" style={styleCat}>
                            {article.category.title.substring(0,1)}
                        </div>
                        <div className="article-short__loc">
                            <div className="article-short__category">
                                <Link to={`articles/${ article.category.url }`}>{article.category.title}</Link>
                            </div>
                            <div className="article-short__time">
                                {ta.ago(article.createdAt)}
                            </div>
                        </div>

                    </div>
                    <div className="article-short__thumbnail">
                        <img src={article.thumbnailImage}/>
                    </div>
                    <div className="article-short__meta">
                        <h2 className="article-short__title">
                            <Link to={`article/${ article.slug }`}>{this.htmltoText(article.title)}</Link>
                        </h2>
                        <div className="article-short__excerpt">
                            {trim_words(this.htmltoText(article.excerpt), 20)}<br/>
                            <span className="article-short__more"><Link to={`article/${ article.slug }`}>Read more ...</Link></span>
                        </div>
                    </div>
                    <div className="article-short__action">

                    </div>
                    <div className="article-short__fav">
                        <i className="material-icons">&#xE87E;</i>
                    </div>
                </div>
            </div>
        )
    }
}
