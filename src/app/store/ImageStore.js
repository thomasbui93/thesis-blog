import alt from '../alt';
import ImageActions from '../actions/ImageActions';

 class ImageStore {
     constructor() {
         this.bindActions(ImageActions);

         this.imageList = [];
         this.loading = false;
         this.error = null;
     }
     onRequestList(){
         this.loading = true;

     }
     onReceivedList(list){
         this.imageList = list;
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

export default alt.createStore(ImageStore);
