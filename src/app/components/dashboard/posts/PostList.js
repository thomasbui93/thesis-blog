import React, {Component} from 'react';
import {PostBrief} from './PostBrief';
export class PostList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const posts = this.props.posts.map((post)=>{
            return (
                <div  key={post._id} className="post-brief">
                    <PostBrief post={post}/>
                </div>
            )
        });
        return (
            <div>
                {posts}
            </div>
        )
    }
}

