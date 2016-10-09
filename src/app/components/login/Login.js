import React, {Component} from 'react';
import {ProgressBar } from '../static/ProgressBar';
import {Error} from '../static/Error';
import AuthActions from '../../actions/AuthActions';
import localStorage from 'localforage';

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.logIn = this.logIn.bind(this);
    }
    logIn(){
        let email = this.refs.email.value;
        let password = this.refs.password.value;

        AuthActions.requestAuth({
            email: email,
            password: password
        });
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth){
            setTimeout(()=>{
                this.context.router.push('/dashboard/post');
            }, 500);
        }
        if(nextProps.error === false){
            setTimeout(()=>{
                if(this.props.confidential !==null) {
                    localStorage.setItem('token', this.props.confidential.token);
                    this.context.router.push('/dashboard/post');
                }
            }, 500);
        }
    }
    render() {
        return (
            <div className="login-container">
                { this.props.loading ? <ProgressBar/> : null}
                { this.props.error !== null && this.props.error !== false ? <Error/>: null }
                <div className="input-container">
                    <label>Email</label>
                    <input type="text" ref="email"/>
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" ref="password"/>
                </div>
                <div className="checkbox-group">

                </div>
                <div className="block--center">
                    <button className="btn btn--primary" onClick={this.logIn}>Login</button>
                </div>

            </div>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export {Login};