import React, { Component } from 'react';
import ImageStore from '../../store/ImageStore';
import ImageAction from '../../actions/ImageActions';
import {Loading} from '../../components/static/Loading';
import {Error} from '../../components/static/Error';
import { ImageList} from '../../components/dashboard/images/ImageList';

export class ImageListContainer extends Component{
    constructor(props){
        super(props);

        this.state = this.getImageState();
        this._onChange = this._onChange.bind(this);
    }
    getImageState(){
        return {
            imageList: ImageStore.getState().imageList,
            loading: ImageStore.getState().loading,
            error: ImageStore.getState().error
        }
    }
    componentDidMount() {
        ImageAction.requestList();

        ImageStore.listen(this._onChange);
    }
    componentWillUnmount() {
        ImageStore.unlisten(this._onChange);
    }
    _onChange(){
        this.setState(this.getImageState());
    }
    render(){
        if(this.state.loading){
            return <Loading/>;
        }
        if(this.state.error){
            return <Error/>;
        }
        return <ImageList imageList={this.state.imageList}/>
    }
}
