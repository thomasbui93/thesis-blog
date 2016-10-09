import React, {Component} from 'react';
import PostStore from '../../../store/PostStore';
import PostActions from '../../../actions/PostActions';
import {PostList} from '../../../components/dashboard/posts/PostList';
import { Link } from 'react-router';

export class PostManage extends Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = this.getPostState();
    }
    componentDidMount() {
        PostActions.requestList();
        PostStore.listen(this._onChange);
    }
    componentWillUnmount() {
        PostStore.unlisten(this._onChange);
    }
    getPostState(){
        return {
            loading: PostStore.getState().loading,
            error: PostStore.getState().error,
            posts: PostStore.getState().posts
        }
    }
    _onChange(){
        this.setState(this.getPostState());
    }
    render() {
        if(this.state.posts.length === 0) {
            return (
                <div>
                    There is no posts in here yet.<br/>
                    <Link to="dashboard/post/new">Create New</Link>
                </div>
            )
        }
        return (
            <div>
                <PostList posts={this.state.posts}/>
                <Link to="dashboard/post/new">Create New</Link>
            </div>
        )
    }
}
