import React, {Component} from 'react';
import {Link } from 'react-router';

export class ReaderHelper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="reader-helper">
                <div className="reader-helper__header">
                    Categories
                </div>
                <div className="reader-helper__box">
                    <div className="reader-helper__nav  flex-row">
                        <div>
                            <Link to="articles/js"> Javascript</Link>
                        </div>
                        <div className="">
                            <Link to="articles/css">CSS3</Link>
                        </div>
                        <div>
                            <Link to="articles/progressive">Progressive</Link>
                        </div>
                        <div>
                            <Link to="articles/nodejs">NodeJS</Link>
                        </div>
                        <div>
                            <Link to="articles/meteor">Meteor</Link>
                        </div>
                        <div>
                            <Link to="articles/misc">Misc</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

