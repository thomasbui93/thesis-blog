import alt from '../alt';
import {create, update, remove, getAll} from '../utils/category';

class CategoryActions {
    receivedList(imageList){
        this.dispatch(imageList);
    }
    requestList(){
        const actionDispatcher = this;
        this.dispatch();
        getAll().then((response)=> {
            actionDispatcher.actions.receivedList(response);
        }, (error)=>{
            actionDispatcher.actions.receivedError(error);
        })
    }
    receivedError(error){
        this.dispatch(error);
    }
    create(category){
        const actionDispatcher = this;
        this.dispatch();
        create(category).then((response)=>{
            console.log(response);
            actionDispatcher.actions.createDone();
        }, (error)=>{
            console.log(error);
            actionDispatcher.actions.createFailed(error);
        })
    }
    createDone(){
        this.dispatch();
        this.actions.requestList();
    }
    createFailed(error){
        this.dispatch(error);
    }
    update(category){
        const actionDispatcher = this;
        this.dispatch();
        update(category).then(()=>{
            actionDispatcher.actions.requestList();
        }, (error)=>{
            actionDispatcher.actions.receivedError(error);
        })
    }
    updateDone(){
        this.dispatch();
        this.actions.requestList();
    }
    updateFailed(error){
        this.dispatch(error);
    }
    remove(id){
        const actionDispatcher = this;
        this.dispatch();
        remove(id).then(()=>{
            actionDispatcher.actions.removeDone();
        }, (error)=>{
            actionDispatcher.actions.removeFailed(error);
        })
    }
    removeDone(){
        this.dispatch();
        this.actions.requestList();
    }
    removeFailed(){
        this.dispatch(error);
    }
}


export default alt.createActions(CategoryActions);
