import React, { Component } from 'react';
import io from 'socket.io-client';


const API='https://comment-server-scars377.c9users.io/';

class Talk extends Component {
  state={
     items:[],
     author:'',
     text:'',

  }

  componentDidMount(){
   
    this.socket=io(API);
    this.socket.on('data',(items)=>{
        this.setState({
          items,
        });
    })
  }

  onSubmit=(e)=>{
    //避免預設表單送出的行為
      e.preventDefault();

      const {author,text}=this.state;
      this.socket.emit('input',{author,text});
      this.setState({
          text:'',
      });

  }

  onChangeAuthor=(e)=>{
      this.setState({
        author:e.target.value,
      });
  }
  onChangeText=(e)=>{
    this.setState({
      text:e.target.value,
    });
  }

  render() {
   
    return (
      <div >
       <form onSubmit={this.onSubmit}>
        <input type="text" 
          placeholder="author"
          value={this.state.author} 
          onChange={this.onChangeAuthor}/>
         <input type="text" 
          placeholder="text"
          value={this.state.text} 
          onChange={this.onChangeText}/>
          <button type='button' onClick={this.onSubmit}/>
          </form>
        <ul>
          {this.state.items.map((item)=>{
              return (
                  <li key={item.id}>
                    {item.author}:{item.text}
                  </li>
              )
          })}
        </ul>
      </div>
    );
  }
}

export default Talk;
