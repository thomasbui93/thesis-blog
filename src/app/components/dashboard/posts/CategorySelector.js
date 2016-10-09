import React, {Component} from 'react';
import { getAll} from '../../../utils/category';

export class CategorySelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCat : [],
            selected: null
        }
        this.selectCategory = this.selectCategory.bind(this);
    }
    componentDidMount(){
        getAll().then((response)=>{
            this.setState({
                allCat: response
            });
        }, (error)=>{

        })
    }
    selectCategory(event){
        console.log(event.target.value);
    }
    render() {

        const options = this.state.allCat.map((category)=>{
            if(this.props.category!==null && this.props.category !==undefined){

                return (<option key={category._id} value={category._id} >
                    {
                        category.title
                    }
                </option>)
            }else {
                return (<option key={category._id} value={category._id}>
                    {
                        category.title
                    }
                </option>)
            }
        });

        return (
            <select className="category-selector" onChange={this.selectCategory} value={this.props.category}>
                { options }
            </select>
        )
    }
}

