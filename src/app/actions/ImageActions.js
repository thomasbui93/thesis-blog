import alt from '../alt';
import { postImage, getImages, updateImage} from '../utils/image';

class ImageActions {
    receivedList(imageList){
        this.dispatch(imageList);
    }
    requestList(){
        const actionDispatcher = this;
        this.dispatch();
        getImages().then((respond)=> {
            actionDispatcher.actions.receivedList(respond);
        }, (error)=>{
            actionDispatcher.actions.receivedError(error);
        })
    }
    receivedError(error){
        this.dispatch(error);
    }
    create(image){
        this.dispatch();
    }
    createDone(){
        this.dispatch();
        this.actions.requestList();
    }
    createFailed(error){
        this.dispatch(error);
    }
    update(image){
        this.dispatch();
        const actionDispatcher = this;
        updateImage(image).then(()=>{
            actionDispatcher.actions.requestList();
        }, (error)=>{
            actionDispatcher.actions.receivedError(error);
        })
    }
    updateDone(){
        this.dispatch();
        this.actions.requestList();
    }
    updateFailed(){
        this.dispatch(error);
    }
}


export default alt.createActions(ImageActions);