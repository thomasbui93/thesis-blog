import alt from '../alt';
import {signin} from '../utils/auth';

class AuthActions{
    requestAuth(confidential){
        const actionDispatcher = this;
        this.dispatch();
        signin(confidential).then((response)=>{
            console.log(response);
            actionDispatcher.actions.authenticated(response);
        }, (error)=>{
            actionDispatcher.actions.authenticatedFailed(error);
        });
    }
    authenticated(confidential){
        this.dispatch(confidential);
    }
    authenticatedFailed(error){
        this.dispatch(error);
    }
}
export default alt.createActions(AuthActions);