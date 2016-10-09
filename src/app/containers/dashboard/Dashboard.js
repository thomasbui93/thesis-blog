
import React , { Component} from 'react';
import { DashboardNav } from './DashboardNav';
import { check } from '../../utils/auth';

class Dashboard extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render(){
        return (
            <div className="dashboard">
                <DashboardNav/>
                <div className="dashboard-content">
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}
Dashboard.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export {Dashboard};