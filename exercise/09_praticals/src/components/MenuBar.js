import React, { Component } from 'react';
import './MenuBar.css';

class MenuBar extends Component {
  constructor(props){
    super(props);
    this.state={
        current:props.items[0]
    }
  }
  setCurrent=(item)=>{
    this.setState({
        current:item,
    });

  }

  render() {
    return (
      <ul>
        {
            this.props.items.map(item => {
               
                let className='menubar-item';
                if (item==this.state.current)
                {
                    className +=' active';

                }
                return(
                <li className={className}
                    onClick={()=>this.setCurrent(item)}>{item}</li>
                )
        
        })}
      </ul>
    );
  }
}

export default MenuBar;
