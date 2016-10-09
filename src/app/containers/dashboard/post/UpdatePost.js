import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PostActions from '../../../actions/PostActions';
import PostStore from '../../../store/PostStore';

import { MdEditor } from '../../../components/dashboard/MdEditor';
import { CategorySelector } from '../../../components/dashboard/posts/CategorySelector';
import { ContentEditable } from '../../../components/form/ContentEditable';
import downsize from 'downsize';
import {Link} from 'react-router';
import { Loading } from '../../../components/static/Loading';

export class UpdatePost extends Component {
    constructor(props) {
        super(props);
        this.getPostState = this.getPostState.bind(this);
        this._onChange = this._onChange.bind(this);

        this.state = this.getPostState();

        this.update = this.update.bind(this);

    }
    componentDidMount() {
        PostActions.requestOne(this.props.params.id);
        PostStore.listen(this._onChange);
    }
    componentWillUnmount() {
        PostStore.unlisten(this._onChange);
    }
    getPostState(){
        return {
            loading: PostStore.getState().loading,
            error: PostStore.getState().error,
            post: PostStore.getState().post,
            updateDone: PostStore.getState().updateDone
        }
    }
    getImageLink(html){
        let element = document.createElement( 'html' );
        element.innerHTML = html;
        const img = element.getElementsByTagName( 'img' )[0];
        if(img === undefined){
            return undefined;
        }
        return img.src;
    }
    _onChange(){
        this.setState(this.getPostState());
    }
    update(){
        let content = this.refs.mdEditor.state.md;
        let excerpt = downsize(this.refs.mdEditor.state.mdHtml, {"words": 9, round: true});
        let thumbnailImage = this.getImageLink(this.refs.mdEditor.state.mdHtml);
        let title = ReactDOM.findDOMNode(this.refs.title).innerHTML;
        let categoryID = ReactDOM.findDOMNode(this.refs.category).value;

        if(this.refs.mdEditor.state.md === undefined){
            PostActions.update(this.props.params.id,{
                title: title,
                category: categoryID
            });
        }else {
            content = this.refs.mdEditor.state.md;
            excerpt = downsize(this.refs.mdEditor.state.mdHtml, {"words": 9, round: true});
            thumbnailImage = this.getImageLink(this.refs.mdEditor.state.mdHtml);

            PostActions.update(this.props.params.id,{
                title: title,
                content: content,
                excerpt: excerpt,
                thumbnailImage: thumbnailImage,
                category: categoryID
            });
        }


    }
    render() {
        if(this.state.updateDone){
            return (<div>
                Update Done.
                <Link to="dashboard/post/">Back to Main</Link>
            </div>)
        }else {
            if(this.state.post=== null){
                return <Loading/>;
            }else {
                return (
                    <div className="post-editor">
                        <div className="banner banner-hollow right">New Post</div>
                        <button className="btn btn--primary" onClick={this.update}> Update</button>
                        <div className="input-box bottom--line">
                            <ContentEditable className="input text--large" temptHtml={this.state.post.title} ref="title"/>
                            <div className="input__tag">
                                Title
                            </div>
                        </div>
                        <div className="post-editor__category">
                            <CategorySelector ref="category" category={this.state.post.category._id}/>
                        </div>
                        <MdEditor tempt={this.state.post.content} loading={this.state.loading} ref="mdEditor" error={this.state.error} />
                    </div>
                )
            }

        }

    }
}

