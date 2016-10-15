import React , { Component} from 'react';
import CacheStore from '../../../store/CacheStore';
import CacheActions from '../../../actions/CacheActions';
import {Loading} from '../../static/Loading';
class CacheClean extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: null,
            cacheType: null
        };

        this._onChange = this._onChange.bind(this);
        this.cleanCache = this.cleanCache.bind(this);
        this.getCacheState = this.getCacheState.bind(this);
    }
    cleanCache(event){
        event.preventDefault();
        CacheActions.clean(this.props.path);
    }
    getCacheState(){
        return {
            status: CacheStore.getState().status,
            cacheType: CacheStore.getState().cacheType
        }
    }
    _onChange(){
        this.setState(this.getCacheState());
    }
    componentDidMount() {

        CacheStore.listen(this._onChange);
    }
    componentWillUnmount() {
        CacheStore.unlisten(this._onChange);
    }
    render(){
        return (
            <div className="cache-clean__container">
                <a href="dashboard/cache/clean" onClick={this.cleanCache} className="flex-row">
                    { this.props.children }
                    { this.state.status === 0 && this.state.cacheType === this.props.path ? <Loading/> : ''}
                    { this.state.status === 1 && this.state.cacheType === this.props.path ? <i className="material-icons">&#xE86C;</i> : ''}
                </a>
            </div>
        )
    }
}
export {CacheClean};