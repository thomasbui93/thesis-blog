import alt from '../alt';
import CategoryActions from '../actions/CategoryActions';

class CategoryStore {
    constructor() {
        this.bindActions(CategoryActions);

        this.categoryList = [];
        this.loading = false;
        this.error = null;
    }
    onRequestList(){
        this.loading = true;
    }
    onReceivedList(list){
        this.categoryList = list;
        this.loading = false;
        this.error = null;
    }
    onReceivedError(error){
        this.loading = false;
        this.error = error;
    }
    onCreate(){
        this.loading = true;
    }
    onCreateDone(){
        this.loading = false;
    }
    onCreateFailed(error){
        this.loading = false;
        this.error = error;
    }
    onUpdate(){
        this.loading = true;
    }
    onUpdateDone(){
        this.loading = false;
    }
    onUpdateFailed(error){
        this.loading = false;
        this.error = error;
    }
}

export default alt.createStore(CategoryStore);
