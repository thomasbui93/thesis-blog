import React, {Component} from 'react';
import { Link } from 'react-router';

import { Accordion } from '../../components/menu/Accordion';
import { reset } from '../../utils/auth';

class DashboardNav extends Component{
    constructor(props, context){
        super(props, context);
        this.logout = this.logout.bind(this);
    }
    logout(){
        reset();
        this.context.router.push('/dashboard');
    }
    render(){
        return (
            <div className="dashboard-nav">
                <div className="nav-icon">
                    <Link to="/dashboard/media">
                        <img src="icons/imageIcon.svg"/>
                        Media
                    </Link>
                </div>
                <div className="nav-icon">
                    <Link to="/dashboard/categories">
                        <img src="icons/categoriesIcon.svg"/>
                        Categories
                    </Link>
                </div>
                <div className="nav-icon">
                    <Link to="/dashboard/post">
                        <img src="icons/postsIcon.svg"/>
                        Posts
                    </Link>
                </div>
                <div className="nav-icon" onClick={this.logout}>
                    Logout
                </div>
            </div>
        )
    }
}
DashboardNav.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export {DashboardNav};