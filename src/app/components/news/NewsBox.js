import React, {Component} from 'react';
import {Link} from 'react-router';
export class NewsBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="news-box">
                <img src={this.props.news.thumbnailImage}/>
                <div className="news-box__content">
                    <h2 className="news-box__title text--center">
                        { this.props.news.title}
                    </h2>
                    <Link className="link--round contrast" to={`post/${ this.props.news.slug }`} >Read More</Link>
                </div>
            </div>
        )
    }
}

