import React, {Component} from 'react';
import {getCategory} from '../../utils/post';
import {Loading} from '../../components/static/Loading';
import {NotFound} from '../../components/static/NotFound';
import {ArticleShortList} from '../../components/articles/ArticleShortList';
export class ArticlesCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            articles: [],
            error: null
        }
        this.loadArticles = this.loadArticles.bind(this);
    }
    loadArticles(){
        getCategory(this.props.params.category).then((articles)=> {
            this.setState({
                articles: articles,
                loading: false
            })

        }, (error)=> {
            this.setState({
                loading: false,
                error: error
            })
        });
    }
    componentDidMount() {
       this.loadArticles();
    }
    componentWillReceiveProps(nextProps) {
        this.loadArticles();
    }
    render() {
        if (this.state.error !== null) {
            return <NotFound/>;
        }
        if (this.state.loading) {
            return <Loading/>
        }
        return (
            <div>
                <ArticleShortList articleList={this.state.articles}/>
            </div>
        )
    }
}
