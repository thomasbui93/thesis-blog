import React, { Component } from 'react';

export class HighLight extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className="sub-title text--theme">
                    <h2> Highlight articles</h2>
                </div>
                <div className="highlight-news container">
                    <div className="highlight__wrapper col-1-2 ">
                        <h3 className="text--uppercase"> Javascript</h3>
                        <div className="news__wrapper ratio--golden">
                            <div className="news">
                                <img src="http://ichef.bbci.co.uk/wwhp/999/cpsprodpb/21CF/production/_88055680_ba18eb95-a726-491d-ac87-4178b3bcdeae.jpg"/>
                                <div className="news__content news__background ">
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
                </div>
            </div>
        )
    }
}
