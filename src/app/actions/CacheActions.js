import alt from '../alt';
import {clean} from '../utils/cache';

class CacheActions {
    clean(cacheType){
        this.dispatch();
        const actionDispatcher = this;

        clean(cacheType).then((response)=>{
            actionDispatcher.actions.cleanDone(response);
        }, (error)=>{
            actionDispatcher.actions.cleanFailed(error);
        })
    }
    cleanDone(cacheType){
        this.dispatch(cacheType);
    }
    cleanFailed(error){
        this.dispatch(error);
    }
}
export default alt.createActions(CacheActions);
