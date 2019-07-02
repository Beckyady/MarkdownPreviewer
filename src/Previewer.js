import React from 'react';
import './Previewer.css';


const marked = require('marked');
class Previewer extends React.Component{
constructor(props){
    super(props);

    this.state ={
input: ''
    }
this.handleInput = this.handleInput.bind(this);
}

handleInput(e){
    this.setState({
        input: e.target.value
    })
}

render(){

    return(
        <div>
            <div className="textAreaDiv">

 <textarea cols="76" 
   rows="15.8" value={this.state.input} onChange={this.handleInput}>

 </textarea> 
</div>
<div className="output" dangerouslySetInnerHTML = {{__html:marked(this.state.input)}}></div>
      
        </div>

        
    );
}

}
export default Previewer;




