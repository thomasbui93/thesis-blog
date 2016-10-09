import React, { Component} from 'react';
import { UploadImage } from '../../components/form/UploadImage';
import {ImageListContainer} from './ImageListContainer';
import {check} from '../../utils/auth';

class ImageManage extends Component{
    constructor(props, context){
        super(props, context);
        this.state={
            authenticated: null
        }
    }
    componentDidMount(){
        check().then((response)=>{
            this.setState({
                authenticated: true
            });
        }, (error)=>{
            this.setState({
                authenticated: false
            });
        })
    }
    componentDidUpdate(){
        if(this.state.authenticated===false){
            this.context.router.push('/dashboard');
        }
    }
    render(){
        return (<div>
            <ImageListContainer/>
            <UploadImage/>
        </div>
        )
    }
}
ImageManage.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export {ImageManage}