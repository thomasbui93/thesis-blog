import React, { Component } from 'react';
import { ImageBox } from './ImageBox';

export class ImageList extends Component{
    constructor(props){
        super(props);
    }
    static propTypes(){
        return {
            imageList: React.propTypes.array
        }
    }
    render(){
        const imageList = this.props.imageList.map((image)=>{
            return (
                <ImageBox image={image} key={image._id}/>
            )
        });
        return (
            <div className="container">
                {imageList}
            </div>
        )
    }
}