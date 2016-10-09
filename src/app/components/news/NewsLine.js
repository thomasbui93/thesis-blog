
import React, { Component} from 'react';

export class NewsLine extends Component{
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
            <div className="news__line">
                <h3 className="news__title">{ this.props.news.title}</h3>
                <div className={"news__category cat__" + this.props.news.category.substr(0, 2) }>
                    { this.props.news.category }
                </div>
            </div>
        )
    }
}