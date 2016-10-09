import React, { Component} from 'react';

export class CheckBox extends Component{
    constructor(props){
        super(props);
    }
    static propTypes() {
        return {
            id: React.PropTypes.string,
            label: React.PropTypes.string
        };
    }
    render(){
        return (
            <div className="checkbox-group">
                <input type="checkbox" id={this.props.id} />
                    <label htmlFor={this.props.id} >
                        <div className="checkbox__symbol"></div>
                        <div className="label__text">{ this.props.label }</div>
                    </label>
            </div>
        )
    }
}
