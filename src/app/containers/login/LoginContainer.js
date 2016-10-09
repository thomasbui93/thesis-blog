import React, {Component} from 'react';
import { Login} from '../../components/login/Login';
import AuthActions from '../../actions/AuthActions';
import AuthStore from '../../store/AuthStore';
import {check} from '../../utils/auth';

export class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: null,
            confidential: null,
            authenticated: null
        };
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
        check().then((response)=>{
            this.setState({
                authenticated: true
            })
        }, (error)=>{
            this.setState({
                authenticated: false
            })
            console.log(error);
        })
        AuthStore.listen(this._onChange);
    }
    componentWillUnmount() {
        AuthStore.unlisten(this._onChange);
    }
    getAuthState(){
        return {
            loading: AuthStore.getState().loading,
            error: AuthStore.getState().error,
            confidential : AuthStore.getState().confidential
        }
    }
    _onChange(){
        this.setState(this.getAuthState());
    }
    render() {
        return (
            <div>
                <Login loading={this.state.loading} error={this.state.error} confidential={this.state.confidential} auth={this.state.authenticated}/>
            </div>
        )
    }
}

