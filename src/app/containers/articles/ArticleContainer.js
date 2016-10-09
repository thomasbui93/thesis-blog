import {Article} from '../../components/articles/Article';
import React, {Component} from 'react';
import {getOne} from '../../utils/post';
import {Loading} from '../../components/static/Loading';
import {Error} from '../../components/static/Error';
import DocumentMeta from 'react-document-meta';

export class ArticleContainer extends Component {
    constructor(props) {
        super(props);
        this.getPost = this.getPost.bind(this);

        this.state = {
            loading: false,
            article: null,
            error: null
        }
    }
    getPost(){
        const postSlug = this.props.params.slug;
        getOne(postSlug).then((post)=> {
            this.setState({
                article: post,
                loading: false
            })
            console.log(post);
        }, (error)=> {
            this.setState({
                loading: false,
                error: error
            })
        });
    }
    html2text(html) {
        var tag = document.createElement('div');
        tag.innerHTML = html;

        return tag.innerText;
    }
    componentDidMount() {
        this.getPost();
    }
    componentWillReceiveProps(nextProps) {
        this.getPost();
    }
    render() {
        if (this.state.error !== null) {
            return <Error/>;
        }
        if (this.state.loading || this.state.article === null) {
            return <Loading/>
        }
        const meta = {
            title: this.state.article.title,
            description: this.html2text(this.state.article.excerpt),
            canonical: 'http://example.com/path/to/page',
            image: this.state.article.thumbnailImage,
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'react,meta,document,html,tags'
                }
            }
        };
        return (
            <div className="article-container">
                <DocumentMeta {...meta} />
                <Article article={this.state.article}/>
            </div>
        )
    }
}

