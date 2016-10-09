import React, {Component} from 'react';
import TimeAgo from 'time-ago';
let ta = new TimeAgo();
import PostActions from '../../../actions/PostActions';
import { Link } from 'react-router';

export class PostBrief extends Component {
    constructor(props) {
        super(props);
        this.removePost = this.removePost.bind(this);
        this.draftPost = this.draftPost.bind(this);
    }
    static propTypes(){
        return {
            post: React.propTypes.object
        }
    }
    removePost(){
        PostActions.remove(this.props.post._id);
    }
    draftPost(){
        PostActions.draft(this.props.post._id);
    }
    render() {
       // console.log(this.props.post);
        return (
            <div>
                <Link to={`dashboard/post/update/${ this.props.post.slug }`}>
                    <div className="post-brief__title" dangerouslySetInnerHTML={{__html: this.props.post.title}}/>
                </Link>
                <div className="post-brief__category">
                    { this.props.post.category.title}
                </div>
                <div className="post--brief__excerpt" dangerouslySetInnerHTML={{__html: this.props.post.excerpt}}/>
                <div> {ta.ago(this.props.post.createdAt)}</div>
                <div className="post__actions">
                    <button className="btn btn--danger" onClick={this.removePost}>
                        <i className="material-icons">&#xE872;</i>
                    </button>
                    <button className="btn btn--danger" onClick={this.draftPost}>
                        <i className="material-icons">delete_sweep</i>
                    </button>
                </div>
            </div>
        )
    }
}

