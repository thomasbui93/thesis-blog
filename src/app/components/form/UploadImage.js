import React, { Component } from 'react';
import { postImage } from '../../utils/image';
import DropZone from 'react-dropzone';
import ImageActions from '../../actions/ImageActions';

export class UploadImage extends Component{
    constructor(props){
        super(props);
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(files){
        postImage(files).then((response)=>{
            ImageActions.createDone();
        }, (error)=>{
            ImageActions.createFailed(error);
        });
    }
    render() {
        return (
            <div>
                <DropZone onDrop={this.onDrop} accept="image/*" className="dropzone">

                </DropZone>
            </div>
        )
    }
}
