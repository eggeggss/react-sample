import React, { Component } from 'react';

class ImagePreview extends Component {
    state={
        img:'',

    }
    onFileSelected= (e)=>{

        const file=e.target.files.item(0);

        const reader=new FileReader();
        reader.addEventListener('load',this.onImageLoaded);
        reader.readAsDataURL(file);

    }

    submit=()=>{

        const {file}=this.state;
        //const form=new Form();
        //form.append(file,'image.png');
        //axios.post('/upload',{form}).then(....);

    }

    onImageLoaded=(e)=>{
        this.setState(
            {
                img:e.target.result,
            }
        );
    }


    render() {
        return (
        <div>
          <input type="file"
                 accept="image/*"
                 onChange={this.onFileSelected}
          />
          <br/>
          <img src={this.state.img} width={200}/>
        </div>
        );
        }
    }

export default ImagePreview;