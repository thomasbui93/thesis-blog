import React, {Component} from 'react';
import {check} from '../../../utils/auth';

class PostApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            authenticated: null
        }
    }
    componentDidMount(){
        check().then((response)=>{
            console.log(response);

            this.setState({
                authenticated: true
            });

        }, (error)=>{
            this.setState({
                authenticated: false
            });

        })
    }
    componentDidUpdate(){
        
        if(this.state.authenticated===false){
            this.context.router.push('/dashboard');
        }
    }
    render() {

        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}
PostApp.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export {PostApp};
