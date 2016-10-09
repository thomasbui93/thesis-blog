import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export  class ContentEditable extends Component {
    constructor(props){
        super(props);
        this.emitChange = this.emitChange.bind(this);

        var tempt = this.props.temptHtml;
        if(this.props.temptHtml !== undefined){
            tempt = this.props.temptHtml.replace(/<div>/g, "</br>");
        }

        this.state =  {
            initial: true,
            initialHtml: tempt
        };
    }
    render(){

        if(this.state.initial){
            return (
                <div contentEditable
                     onInput={this.emitChange}
                     onBlur={this.emitChange}
                     dangerouslySetInnerHTML={{__html: this.state.initialHtml}}
                     className={this.props.className}
                     id={this.props.id}
                     style={this.props.style}
                     ref="mdEditor"
                    >
                </div>
            );
        }else{
            return (
                <div contentEditable
                     onInput={this.emitChange}
                     onBlur={this.emitChange}
                     dangerouslySetInnerHTML={{__html: this.props.html}}
                     className={this.props.className}
                     id={this.props.id}
                     style={this.props.style}
                     ref="mdEditor"
                    >
                </div>
            );
        }

    }

    shouldComponentUpdate(nextProps) {

        return nextProps.html !== ReactDOM.findDOMNode(this).html;
    }

    componentDidUpdate() {
        if ( this.props.html !== ReactDOM.findDOMNode(this).innerHTML ) {
            ReactDOM.findDOMNode(this).innerHTML = this.props.html;
        }
    }
    emitChange(){
        let html = ReactDOM.findDOMNode(this).innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {
            this.props.onChange({
                target: {
                    value: html
                }
            });
        }
        this.lastHtml = html;
    }

}