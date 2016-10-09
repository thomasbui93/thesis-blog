import React, {Component} from 'react';
import { Category} from './Category';
import { CategoryNew } from './CategoryNew';

export class CategoryList extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes(){
        return {
            categoryList : React.propTypes.array || null
        }
    }
    render() {
        const categoryList = this.props.categoryList.map((category)=>{
            return (
                <Category category={category} key={category._id}/>
            )
        });
        return (
            <div>
                {
                    this.props.categoryList.length=== 0 ?
                        <div>There have not been any category yet</div>
                        : categoryList
                }
                <div className="category--new shadow">
                    <div className="banner banner--primary">New Category</div>
                    <CategoryNew />
                </div>
            </div>
        )
    }
}

