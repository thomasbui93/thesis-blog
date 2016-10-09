import alt from '../alt';
import PostActions from '../actions/PostActions';

class PostStore {
    constructor() {
        this.bindActions(PostActions);

        this.posts = [];
        this.loading = false;
        this.error = null;
        this.newPost = null;
        this.post = null;
        this.updateDone = false;
    }
    onCreate(){
        this.loading = true;
    }
    onCreateDone(newPost){
        this.loading = false;
        this.error = null;
        this.newPost = newPost;
    }
    onCreateFailed(error){
        this.error = error;
    }
    onRequestList(){
        this.loading = true;
    }
    onRequestDone(posts){
        this.loading = false;
        this.posts = posts;
        this.error = null;
    }
    onRequestFailed(error){
        this.loading= false;
        this.error = error;
    }
    onRequestOne(postID){
        this.loading = true;
        this.error = null;
        this.post = null;
        this.updateDone = false;
    }
    onRequestOneDone(post){
        this.loading = false;
        this.post = post;
    }
    onRequestOneFailed(error){
        this.loading = false;
        this.error = null;
    }
    onUpdate(postID){
        this.loading = true;
        this.error = null;
        this.newPost = null;
        this.post = null;
        this.updateDone = false;
    }
    onUpdateDone(post){
        this.loading = false;
        this.error = null;
        this.updateDone = true;
    }
    onUpdateFailed(error){
        this.loading = false;
        this.error = error;
    }
}
export default alt.createStore(PostStore);
