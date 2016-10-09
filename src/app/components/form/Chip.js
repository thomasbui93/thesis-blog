import React, {Component} from 'react';
import _ from 'lodash';

export class Chip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chips: []
        };
    }
    static propTypes(){
        return {
            chips: React.propTypes.array
        }
    }
    render() {
        const chipsArray = _.merge(this.props.chips, this.state.chips);
        const chips = chipsArray.map((chip)=>{
            return (<span>{chip}</span>)
        });
        return (
            <div>
                {
                    chips
                }
            </div>
        )
    }
}

