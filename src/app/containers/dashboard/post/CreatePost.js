import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { MdEditor } from '../../../components/dashboard/MdEditor';
import { CategorySelector } from '../../../components/dashboard/posts/CategorySelector';
import { ContentEditable } from '../../../components/form/ContentEditable';
import downsize from 'downsize';

import PostStore from '../../../store/PostStore';
import PostActions from '../../../actions/PostActions';


export class CreatePost extends Component{
    constructor(props){
        super(props);
        this.composePost = this.composePost.bind(this);

        this.state = {
            loading: false,
            error: null,
            newPost: null
        };

        //this.getPostState = this.getPostState.bind(this);
        this._onChange = this._onChange.bind(this);

    }
    componentDidMount() {

        PostStore.listen(this._onChange);
    }
    componentWillUnmount() {
        PostStore.unlisten(this._onChange);
    }
    getPostState(){
        return {
            loading: PostStore.getState().loading,
            error: PostStore.getState().error,
            newPost : PostStore.getState().newPost
        }
    }
    _onChange(){
        this.setState(this.getPostState());
    }
    composePost(){
        const content = this.refs.mdEditor.state.md;
        const excerpt = downsize(this.refs.mdEditor.state.mdHtml, {"words": 9, round: true});
        const thumbnailImage = this.getImageLink(this.refs.mdEditor.state.mdHtml);
        const title = ReactDOM.findDOMNode(this.refs.title).innerHTML;
        const categoryID = ReactDOM.findDOMNode(this.refs.category).value;

        PostActions.create({
            title: title,
            content: content,
            excerpt: excerpt,
            thumbnailImage: thumbnailImage,
            category: categoryID
        });
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
    render(){
        return (
            <div className="post-editor">
                {
                    this.state.newPost === null ?
                        <div>
                            <div className="banner banner-hollow right">New Post</div>
                            <button className="btn btn--primary" onClick={this.composePost}> Publish</button>
                            <div className="input-box bottom--line">
                                <ContentEditable className="input text--large" temptHtml="" ref="title"/>
                                <div className="input__tag">
                                    Title
                                </div>
                            </div>
                            <div className="post-editor__category">
                                <CategorySelector ref="category"/>
                            </div>
                            <MdEditor loading={this.state.loading} tempt="" ref="mdEditor" error={this.state.error}/>
                        </div>  :
                        <div>
                            Created a new post.
                        </div>
                }

            </div>
        )
    }
}
