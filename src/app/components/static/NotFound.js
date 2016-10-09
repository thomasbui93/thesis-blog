import React, {Component} from 'react';
import {Link} from 'react-router';
import DocumentMeta from 'react-document-meta';

export class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const meta =  {
            title: 'Not Found Page ',
            description: 'Just a simple 404 page',
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
                        <img className="center" src="https://d13yacurqjgara.cloudfront.net/users/24885/screenshots/1799551/page-cannot-be-found.png"/>
                    </div>
                    <div className="text--center">
                        <Link className="mbtn mbtn--h" to="/">Back Home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

