import React, {Component} from 'react';
import {ImageCard} from '../news/ImageCard';
import DocumentMeta from 'react-document-meta';
export class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const meta =  {
            title: 'About Me ',
            description: 'I\'m a web developer',
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
                <div className="split-layout">
                    <div className="split-layout__image">
                        <img src="http://abduzeedo.com/files/originals/9647348619_0e72b61963_h.jpg"/>
                    </div>
                    <div className="split-layout__content container no-padding">
                        <div className="split-layout__trans col-1-2">
                            <div className="flex-column">
                                <img src="icons/logo.svg"/>
                                <div className="text--center">
                                    <h1>I'm Khoa.</h1>
                                    <br/>
                                    <h3>An Oulu-based Web Developer, specialize in Frontend and Javascript.</h3>
                                    <div className="link-list flex-row text--center">
                                        <a href="https://fi.linkedin.com/in/bdk93">Linkedin</a>
                                        <a href="https://twitter.com/CuSol93">Twitter</a>
                                        <a href="https://about.me/buikhoa">About.me</a>
                                        <a href="https://github.com/thomasbui93">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="split-layout__main col-1-2">
                            <div className="box-container padding">
                                <div className="text--uppercase text--theme text--bold">
                                    about me
                                </div>
                                <div>
                                    For the past three years,I have been learning and creating small projects in web development.
                                    Here is the list of languages I learnt along the way :
                                    <ul className="highlight-list">
                                        <li>
                                            <span className="text--bold text--theme">HTML5 </span>
                                            <span>
                                                HTML5 and its API and fallback to incompatible browser support.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text--bold text--theme">CSS </span>
                                            <span>
                                                using CSS3 as a very alternative for Javascript. Most quirk and shortcut has been learnt.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text--bold text--theme">CSS Processor </span>
                                            <span>
                                                Used both LESS and SASS, like SASS. Utilize conventional naming system BEM. Also have understanding about newest method like AtomCSS, SMACSS, OOCSS.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text--bold text--theme">Javascript </span>
                                            <span>
                                                Favorite. Daily basic. Obsessed. Framework and libraries: <span className="text--bold text--theme">AngularJS</span>, <span className="text--bold text--theme"> ReactJS</span>, <span className="text--bold text--theme">Jquery</span>, etc...
                                                Abandoning Jquery to work with vanilla javascript and ES6.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text--bold text--theme">Automation </span>
                                            <span>
                                                Good with both <span className="text--bold text--theme">GulpJS</span> and <span className="text--bold text--theme">Webpack</span>.
                                                Using them in various projects.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text--bold text--theme">NodeJS </span>
                                            <span>
                                                Preferably using NodeJs in backend. Have been using <span className="text--bold text--theme">ExpressJS</span> and <span className="text--bold text--theme">Meteor</span> for backend.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text--bold text--theme">PHP </span>
                                            <span>
                                                Those old good days with PHP developments, has been using Laravel and Falcon.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="text--bold text--theme">Server and Databases </span>
                                            <span>
                                                Regularly using  <span className="text--bold text--theme">Ubuntu</span> server.
                                                Using  <span className="text--bold text--theme">MongoDB</span> recently but good with  <span className="text--bold text--theme">Mysql</span>.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text--uppercase text--theme text--bold">
                                    honour
                                </div>
                                <div>
                                    <span className="text--theme text--bold">2015:</span> Top 10 Kickstart Business Idea in Oulu City.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

