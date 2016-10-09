import React, { Component } from 'react';

export class NewsGrid extends Component{
    constructor(props){
        super(props);
    }
    static propTypes(){
        return {
            news: React.PropTypes.array
        }
    }
    render(){
        return (
            <div className="newsGrid">
                <div className="mainNews ratio--golden">
                    <div className="news">
                        <img src="http://ichef.bbci.co.uk/wwhp/999/cpsprodpb/21CF/production/_88055680_ba18eb95-a726-491d-ac87-4178b3bcdeae.jpg"/>
                        <div className="news__content news__background">
                            <h3 className="news__title"> React vs Angular2</h3>
                            <div className="news__desc">

                                The EU unveils a draft deal on UK Prime Minister David Cameron's demands - potentially paving the way for a UK referendum in June.
                            </div>
                            <div className="news__category cat__js">
                                Javascript
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subNews ratio--golden">
                    <div className="news__container sm--hidden">
                        <div className="news__wrapper">
                            <div className="news">
                                <img src="http://ichef.bbci.co.uk/wwhp/999/cpsprodpb/21CF/production/_88055680_ba18eb95-a726-491d-ac87-4178b3bcdeae.jpg"/>
                                <div className="news__content news__background sm">
                                    <h3 className="news__title"> React vs Angular2</h3>
                                    <div className="news__desc">

                                        The EU unveils a draft deal on UK Prime Minister David Cameron's demands - potentially paving the way for a UK referendum in June.
                                    </div>
                                    <div className="news__category cat__js">
                                        Javascript
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="news__wrapper">
                            <div className="news">
                                <img src="http://ichef.bbci.co.uk/wwhp/999/cpsprodpb/21CF/production/_88055680_ba18eb95-a726-491d-ac87-4178b3bcdeae.jpg"/>
                                <div className="news__content news__background sm">
                                    <h3 className="news__title"> Meteor Blaze</h3>
                                    <div className="news__desc">

                                        The EU unveils a draft deal on UK Prime Minister David Cameron's demands - potentially paving the way for a UK referendum in June.
                                    </div>
                                    <div className="news__category cat__met">
                                        Meteor
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="news__wrapper">
                            <div className="news">
                                <img src="http://ichef.bbci.co.uk/wwhp/999/cpsprodpb/21CF/production/_88055680_ba18eb95-a726-491d-ac87-4178b3bcdeae.jpg"/>
                                <div className="news__content news__background sm">
                                    <h3 className="news__title"> Frontend Workflow</h3>
                                    <div className="news__desc">

                                        The EU unveils a draft deal on UK Prime Minister David Cameron's demands - potentially paving the way for a UK referendum in June.
                                    </div>
                                    <div className="news__category cat__pg">
                                        Progressive Web
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line__container sm--visible">
                        <div className="news__wrapper">
                            <div className="news__line">
                                <h3 className="news__title"> Web Workers</h3>
                                <div className="news__category cat__js">
                                    Javascript
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
