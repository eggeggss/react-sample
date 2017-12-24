import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterList extends Component {
    static propTypes={
        items:PropTypes.arrayOf(PropTypes.string),
    }
    static defaultProps={
        items:[],
    }

    constructor(props){
            super(props);
            this.state={
                 filter:'',
                 filteredItems:props.items,
            }

    }
    
    onChangeFilter=(e)=>{
        const filter=e.target.value;
        const needle=filter.toLowerCase();
        const filteredItems=this.props.items.filter(item=>(

            item.toLowerCase().indexOf(needle)!==-1
        ));
        
        this.setState(
            {
            filter,
               filteredItems,
            }
        )
    }
    render() {
        return (
            <div>
                <input type="text" 
                value={this.state.filter}
                onChange={this.onChangeFilter}/>
                <ul>
                   {
                      this.state.filteredItems.map(item=>(
                            
                                <li>{item}</li>                       
                      ))}
                </ul>
            </div>
        );
    }
}

export default FilterList;
