
import alt from '../alt';
import CacheActions from '../actions/CacheActions';

class CacheStore{
    constructor() {
        this.bindActions(CacheActions);

        this.cacheType = null;
        this.status = null;
    }
    onClean(){
        this.status = 0;
    }
    onCleanDone(cacheType){
        this.status = 1;
        this.cacheType = cacheType;
    }
    onCleanFailed(cacheType){
        this.status = -1;
    }
}

export default alt.createStore(CacheStore);
