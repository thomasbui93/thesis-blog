import React, {Component} from 'react';
import { ContentEditable} from '../../form/ContentEditable';
import { updateImage, removeImage } from '../../../utils/image';
import ImageAction from '../../../actions/ImageActions';
import ReactDOM from 'react-dom';

export class ImageBox extends Component {
    constructor(props) {
        super(props);
        this.saveTitle = this.saveTitle.bind(this);
        this.removeImage = this.removeImage.bind(this);
        this.observeTitle = this.observeTitle.bind(this);
        this.stripHTML = this.stripHTML.bind(this);

        this.state = {
            caption: ''
        }
    }
    static propTypes(){
        return {
            image: React.propTypes.object
        }
    }
    stripHTML(html){
        var tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }
    observeTitle(event){
        this.setState({
            caption: event.target.value
        });
    }
    saveTitle(){
        /*
        updateImage(this.props.image._id, this.stripHTML(ReactDOM.findDOMNode(this.refs.caption).innerHTML))
        .then((res)=>{
            console.log(res);
        }, (error)=>{
            console.log(error);
        });
        */
        ImageAction.update({
            _id: this.props.image._id,
            caption: this.stripHTML(ReactDOM.findDOMNode(this.refs.caption).innerHTML)
        });

    }
    removeImage(){
        removeImage(this.props.image._id)
        .then((res)=>{
            if(res.statusCode===204){
                ImageAction.requestList();
            }
        }, (error)=>{
            console.log(error);
        })
    }
    render() {
        return (
            <div className="col-1-3 md" >
                <div className="image-container">
                    <img src={this.props.image.url}/>
                    <ContentEditable ref="caption" className="image__title" temptHtml={ this.props.image.caption } onChange={this.observeTitle}/>
                    <div className="image__control close" onClick={this.removeImage}>
                        <i className="material-icons">&#xE5CD;</i>
                    </div>
                    <div className="image__control save" onClick={this.saveTitle}>
                        <i className="material-icons">&#xE161;</i>
                    </div>
                </div>
            </div>
        )
    }
}

