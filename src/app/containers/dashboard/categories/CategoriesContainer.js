import React, {Component} from 'react';
import CategoryStore from '../../../store/CategoryStore';
import CategoryActions from '../../../actions/CategoryActions';
import {Loading} from '../../../components/static/Loading';
import {Error} from '../../../components/static/Error';
import {CategoryList} from '../../../components/dashboard/categories/CategoryList';
import {check} from '../../../utils/auth';

class CategoriesContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = this.getCategoryState();
        this._onChange = this._onChange.bind(this);
    }
    getCategoryState(){
        return {
            categoryList: CategoryStore.getState().categoryList,
            loading: CategoryStore.getState().loading,
            error: CategoryStore.getState().error,
            authenticated: true
        }
    }
    componentDidMount() {

        CategoryActions.requestList();

        CategoryStore.listen(this._onChange);
        check().then((response)=>{

            this.setState({
                authenticated: true
            });

        }, (error)=>{
            this.setState({
                authenticated: false
            });
        })
    }
    componentWillUnmount() {
        CategoryStore.unlisten(this._onChange);
    }
    componentDidUpdate(){
        if(this.state.authenticated===false){
            this.context.router.push('/dashboard');
        }
    }
    _onChange(){
        this.setState(this.getCategoryState());
    }
    render() {
        return (
            <div>
                {
                    this.state.error!== null?
                        <Error/>: null
                }
                {
                    this.state.loading?
                        <Loading/>: null
                }
                <CategoryList categoryList={this.state.categoryList} />
            </div>
        )
    }
}
CategoriesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export {CategoriesContainer};
