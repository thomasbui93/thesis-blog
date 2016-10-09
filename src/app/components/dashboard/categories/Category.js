import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { ContentEditable} from '../../form/ContentEditable';
import CategoryActions from '../../../actions/CategoryActions';
import classnames from 'classnames';

export class Category extends Component {
    constructor(props) {
        super(props);

        this.changeContent = this.changeContent.bind(this);
        this.saveCategory = this.saveCategory.bind(this);
        this.resetInput = this.resetInput.bind(this);
        this.stripHTML = this.stripHTML.bind(this);
        this.remove = this.remove.bind(this);
        this.toggleExtend = this.toggleExtend.bind(this);

        this.state = {
            dirty: false,
            extend: false
        };
    }
    static propTypes(){
        return {
            category: React.propTypes.object
        }
    }
    stripHTML(html){
        var tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }
    changeContent(){
        this.setState({
            dirty: true
        });
        ReactDOM.findDOMNode(this.refs.colorBox).style.backgroundColor = this.stripHTML(ReactDOM.findDOMNode(this.refs.color).innerHTML);
    }
    saveCategory(){
        const title = this.stripHTML(ReactDOM.findDOMNode(this.refs.title).innerHTML);
        const description = this.stripHTML(ReactDOM.findDOMNode(this.refs.description).innerHTML);
        const color = this.stripHTML(ReactDOM.findDOMNode(this.refs.color).innerHTML);
        const url = this.stripHTML(ReactDOM.findDOMNode(this.refs.url).innerHTML);

        CategoryActions.update({
            _id: this.props.category._id,
            title: title,
            description: description,
            color: color,
            url: url
        });
        this.resetInput();
    }
    resetInput(){
        this.refs.title.value = '';
        this.refs.description.value = '';
        this.refs.color.value = '';
        this.refs.url.value = '';
        this.setState({
            dirty: false
        });
    }
    remove(){
        CategoryActions.remove(this.props.category._id);
    }
    toggleExtend(){
        this.setState({
            extend: !this.state.extend
        });

    }
    render() {
        const classNames = classnames('category', {'active': this.state.extend})
        return (
            <div className={classNames} >
                <div className="category__main container">
                    <div className="col-2-3">
                        <div className="container">
                            <ContentEditable className="category__title col-1-3" ref="title" temptHtml={this.props.category.title} onChange={this.changeContent} />
                            <ContentEditable className="col-1-3" ref="description" temptHtml={this.props.category.description} onChange={this.changeContent}/>
                        </div>
                        <div className="category__detail container">
                            <div className="input-box col-1-3">
                                <ContentEditable className="input" ref="url" temptHtml={this.props.category.url} onChange={this.changeContent} />
                                <div className="input__label">URL</div>
                            </div>
                            <div className="input-box col-1-3">
                                <ContentEditable className="input" ref="color" temptHtml={this.props.category.color} onChange={this.changeContent} />
                                <div className="input__label color" ref="colorBox"></div>
                            </div>
                        </div>
                    </div>
                    <div className="category__action col-1-3 md text--center">
                        {   this.state.dirty ?
                            <div className="banner banner--safe" onClick={this.saveCategory}>
                                <i className="material-icons">&#xE161;</i>
                            </div> :null
                        }
                        {
                            this.state.dirty ?
                                <div className="banner banner--warning" onClick={this.resetInput}>
                                    <i className="material-icons">&#xE5C9;</i>
                                </div>
                                : null
                        }
                        <div className="banner banner--danger" onClick={this.remove}><i className="material-icons">delete</i></div>
                        <div className="banner banner--primary" onClick={this.toggleExtend}>
                            {
                                !this.state.extend ? <i className="material-icons">more_horiz</i> : <i className="material-icons">more_vert</i>
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

