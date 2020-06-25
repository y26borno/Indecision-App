import React from 'react';



export default class AddOption extends React.Component{
     
    constructor(props){
 
       super(props)
       this.handleAddOption = this.handleAddOption.bind(this)
       this.state = {
 
        error: undefined
 
       }
    }
 
 
 
 
   handleAddOption(e){
 
     e.preventDefault();
 
     const option = e.target.elements.add.value.trim();
     const error = this.props.handleAddOption(option);
 
       //this.setState(()=>{
 
        //return {
 
         //error
 
        //}
 
       //});
     
       this.setState( ()=>({
 
          error
       }));
    
     
   }
 
 
     render(){
 
         return (
 
 
             <div>
 
             {this.state.error && <p>{this.state.error}</p>}
         <form onSubmit={this.handleAddOption}>
          
           <input type="text" name="add"/>
           <input type="submit" value="Add Option" name="option"/>
          
         </form>
         </div>
         );
   
   
   }
 
 }