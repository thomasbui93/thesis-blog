import React, { Component} from 'react';

let baseStyle = {
        transition: 'max-height 0.15s , transform 0.15s ease-out',
        WTransition: 'max-height 0.15s , transform 0.15s ease-out',
        overflow: 'hidden',
        cursor: 'pointer'
    };

export class Accordion extends Component{
    constructor(props){
        super(props);
        this.toggleAccordion = this.toggleAccordion.bind(this);

        this.state = {
            show: false
        }
    }
    toggleAccordion(){
        this.setState({
            show: !this.state.show
        })
    }
    render(){
        let header = this.props.children[0];
        let content = this.props.children[1];
        let icon = header.props.children[1];

        let style = {};
        let rotateStyle = {};

        if(this.state.show){
            Object.assign(
                style, baseStyle, { maxHeight: content.props.children.length * 50 + 'px'}
            );
            Object.assign(
                rotateStyle, { transform: 'rotate(-90deg) scale(0.8, 0.8)', WTransform: 'rotate(-90deg) scale(0.8, 0.8)' }, baseStyle
            );
        }else {
            Object.assign(
                style, baseStyle, { maxHeight: 0}
            );
            Object.assign(
                rotateStyle, { transform: 'rotate(90deg) scale(0.8, 0.8)', WTransform: 'rotate(90deg) scale(0.8, 0.8)' }, baseStyle
            );
        }
        return (
            <div  {...this.props}>
                <div onClick={this.toggleAccordion} className={ header.props.className}>
                    {
                        header.props.children[0]
                    }
                    {
                        <i className={icon.props.className} style={rotateStyle}> {icon.props.children}</i>
                    }
                </div>
                <div style={ style } className={content.props.className}>
                    {
                        content.props.children
                    }
                </div>

            </div>
        )
    }
}
