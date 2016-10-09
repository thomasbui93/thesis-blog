import React, {Component} from 'react';

export class NewsCard extends Component{
    constructor(props){
        super(props);
    }
    static propTypes(){
        return {
            news: React.PropTypes.object
        }
    }
    render(){
        return (
            <div className="news">
                <img src={this.props.news.image}/>
                <div className="news__content news__background">
                    <h3 className="news__title"> {this.props.news.title}</h3>
                    <div className="news__desc">
                        { this.props.news.summary}
                    </div>
                    <div className={"news__category cat__" + this.props.news.category.substr(0, 2) }>
                        { this.props.news.category }
                    </div>
                </div>
            </div>
        )
    }
}
