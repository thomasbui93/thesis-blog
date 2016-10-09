import alt from '../alt';
import {create, update, remove, publish, getAll, getOne} from '../utils/post';

class PostActions {
    create(post){
        this.dispatch();
        const actionDispatcher = this;

        create(post).then((response)=>{
            //console.log(response);
            actionDispatcher.actions.createDone(response);
        }, (error)=>{
            console.log(error);
            actionDispatcher.actions.createFailed(error);
        })
    }
    createDone(post){
        this.dispatch(post);
    }
    createFailed(error){
        this.dispatch(error);
    }
    requestList(){
        this.dispatch();
        const actionDispatcher = this;

        getAll().then((posts)=>{
            actionDispatcher.actions.requestDone(posts);
        }, (error)=>{
            console.log(error);
            actionDispatcher.actions.requestFailed(error);
        })
    }
    requestDone(posts){
        this.dispatch(posts);
    }
    requestFailed(error){
        this.dispatch(error);
    }
    remove(postID){
        this.dispatch();
        const actionDispatcher = this;

        remove(postID).then((response)=>{
            //console.log(response);
            actionDispatcher.actions.removeDone(response);
        }, (error)=>{
            console.log(error);
            actionDispatcher.actions.removeFailed(error);
        })
    }
    removeDone(){
        this.dispatch();
        this.actions.requestList();
    }
    removeFailed(error){
        this.dispatch(error);
    }
    draft(postID){
        this.dispatch();
        const actionDispatcher = this;

        publish(postID).then((response)=>{
            //console.log(response);
            actionDispatcher.actions.removeDone(response);
        }, (error)=>{
            console.log(error);
            actionDispatcher.actions.removeFailed(error);
        })
    }
    draftDone(){
        this.dispatch();
        this.actions.requestList();
    }
    draftFailed(){
        this.dispatch(error);
    }
    requestOne(postID){
        this.dispatch();
        const actionDispatcher = this;

        getOne(postID).then((response)=>{
            actionDispatcher.actions.requestOneDone(response);
        }, (error)=>{
            console.log(error);
            actionDispatcher.actions.requestOneFailed(error);
        })
    }
    requestOneDone(post){
        this.dispatch(post);
    }
    requestOneFailed(error){
        this.dispatch(error);
    }
    update(postID, post){
        this.dispatch();
        const actionDispatcher = this;
        console.log(post);
        update(postID, post).then((response)=>{
            actionDispatcher.actions.updateDone(response);
        }, (error)=>{
            console.log(error);
            actionDispatcher.actions.updateFailed(error);
        })
    }
    updateDone(){
        this.dispatch();
    }
    updateFailed(){
        this.dispatch(error);
    }
}
export default alt.createActions(PostActions);