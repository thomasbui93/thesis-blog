import React, {Component} from 'react';
import {Link} from 'react-router';
import marked from 'marked';
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
    }
});


export class Article extends Component {
    constructor(props) {
        super(props);
    }
    timeHm(date){
        let month = [];
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";

        const time = new Date(date);
        const year = (time.getFullYear() === new Date().getFullYear());
        const pm = time.getHours() >= 12 ? 'PM': 'AM';
        if(year){
            return time.getDate()+ ' '+ month[time.getMonth()]+', '+ time.getHours()+':'+time.getMinutes()+ pm;
        }
        return time.getDate()+ ' '+  month[time.getMonth()]+ ' '+ time.getFullYear()+', '+ time.getHours()+':'+time.getMinutes()+pm;
    }
    html2text(html) {
        var tag = document.createElement('div');
        tag.innerHTML = html;

        return tag.innerText;
    }
    toMd(html) {
        var chunks = html.split('<div>');
        var remadeChunks = '';
        chunks.forEach(function (chunk) {
            remadeChunks += (this.html2text(chunk.replace(/<\/div>/g,'')) + "\n");
        }.bind(this));

        return remadeChunks;
    }
    toHtml(md){
        return marked(this.toMd(md));
    }
    render() {
        const article = this.props.article;
        const catStyle = {
            color: article.category.color
        }
        return (
            <div className="article">
                <div className="article__bread-scrum" style={catStyle}>
                    Home <i className="material-icons">&#xE037;</i> {article.category.title}
                </div>
                <h1 className="article__title">{this.html2text(article.title)}</h1>
                <div className="article__information">
                    - Published at {this.timeHm(article.createdAt)}
                    <Link className="article__catgeory"
                          style={catStyle}
                          to={`articles/${ article.category.url }`}>{article.category.title}</Link>
                </div>
                <div className="article__content" dangerouslySetInnerHTML={{__html: this.toHtml(article.content)}}>

                </div>
            </div>
        )
    }
}

