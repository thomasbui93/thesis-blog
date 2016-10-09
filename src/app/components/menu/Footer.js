import React, { Component} from 'react';
import { Link } from 'react-router';


export class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="footer container">
                <div className="col-1-2">
                    <h4>Find Me</h4>
                    <div className="social--container">
                        <a href="https://www.facebook.com/bui.d.khoa">
                            <div className="social--item">
                                <img src="icons/fb.svg"/>
                            </div>
                        </a>
                        <a href="https://twitter.com/CuSol93">
                            <div className="social--item">
                                <img src="icons/twitter.svg"/>
                            </div>
                        </a>
                        <a href="http://fi.linkedin.com/in/bdk93">
                            <div className="social--item">
                                <img src="icons/linkedin.svg"/>
                            </div>
                        </a>
                    </div>

                </div>
                <div className="col-1-2">
                    <h4>Quick links</h4>
                    <div className="container quick-links">
                        <div className="text--uppercase text--head link">
                            <Link to="">Home </Link>
                        </div>
                        <div className="text--uppercase text--head link">
                            <Link to="about">About</Link>
                        </div>
                        <div className="text--uppercase text--head link">
                            <Link to="term">Term</Link>
                        </div>
                        <div className="text--uppercase text--head link">
                            <Link to="privacy">Privacy</Link>
                        </div>
                    </div>
                    <div className="quote text--sm">
                        "The journey of a thousand miles begins with a single step"
                        <br/>
                        <i>Lzao Tu</i>
                    </div>
                </div>
                <div className="footer__copyright">
                    © Khoa D. Bui
                </div>
            </div>
        )
    }
}
