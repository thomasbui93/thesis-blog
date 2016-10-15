import React , { Component} from 'react';
import {CacheClean} from '../../components/dashboard/cache/CacheClean';
import {cacheType} from '../../utils/cache';

class CacheManage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="dashboard-content">
                <h1>Cache Management</h1>
                <div className="cache-links">
                    <CacheClean path={cacheType.ALL}>
                        Cache All
                    </CacheClean>
                    <CacheClean path={cacheType.POST}>
                        Cache Post
                    </CacheClean>
                    <CacheClean path={cacheType.CATEGORY}>
                        Cache Category
                    </CacheClean>
                </div>
            </div>
        )
    }
}
export {CacheManage};