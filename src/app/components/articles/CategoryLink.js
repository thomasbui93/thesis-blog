import React, {Component} from 'react';
import {Link} from 'react-router';

export class CategoryLink extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes(){
        return {
            category: React.propTypes.category
        }
    }
    render() {
        const style = {
            color: 'black',
            padding: '0.5em',
            fontSize: '0.8em',
            backgroundColor: this.props.category.color
        };
        return (
            <Link  to={`articles/${ this.props.category.url }`}>
                <span style={style}>{ this.props.category.title}</span>
            </Link>
        )
    }
}

