import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CategoryActions from '../../../actions/CategoryActions';

export class CategoryNew extends Component {
    constructor(props) {
        super(props);

        this.createCategory = this.createCategory.bind(this);
        this.resetInput = this.resetInput.bind(this);
        this.setColor = this.setColor.bind(this);
    }
    createCategory(){
        const title = this.refs.title.value;
        const description = this.refs.description.value;
        CategoryActions.create({
            title: title,
            description: description,
            color: this.refs.color.value,
            url: this.refs.url.value
        });
        this.resetInput();
    }
    resetInput(){
        this.refs.title.value = '';
        this.refs.description.value = '';
        this.refs.color.value = '';
        this.refs.url.value = '';
    }
    setColor(){
        ReactDOM.findDOMNode(this.refs.colorBox).style.backgroundColor = this.refs.color.value;
    }
    render() {
        return (
            <div className="container">
                <div className="input-container col-1-2">
                    <label>Title</label>
                    <input ref="title" type="text" />
                </div>
                <div className="input-container col-1-2">
                    <label>Description</label>
                    <input ref="description" type="text"/>
                </div>
                <div className="input-container colorPost col-1-2">
                    <label>Color Code</label>
                    <input ref="color" type="text" onChange={this.setColor}/>
                    <div className="color__review" ref="colorBox">

                    </div>
                </div>
                <div className="input-container col-1-2">
                    <label>URL</label>
                    <input ref="url" type="text"/>
                </div>

                <div className="category__control">
                    <button className="btn btn--primary" onClick={this.createCategory}> Create</button>
                    <button className="btn btn--danger" onClick={this.resetInput}> Cancel</button>
                </div>
            </div>
        )
    }
}

