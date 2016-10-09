
import alt from '../alt';
import AuthActions from '../actions/AuthActions';

class AuthStore{
    constructor() {
        this.bindActions(AuthActions);

        this.confidential = null;
        this.loading = false;
        this.error = null;
    }
    onRequestAuth(){
        this.loading = true;
    }
    onAuthenticated(confidential){
        this.loading = false;
        this.error = false;
        this.confidential = confidential;
    }
    onAuthenticatedFailed(error){
        this.loading = false;
        this.error = error;
        this.confidential = null;
    }
}

export default alt.createStore(AuthStore);
