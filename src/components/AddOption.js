import React from 'react';



export default class AddOption extends React.Component{
     
    state = {

      error: undefined
    };

    
 
 
 
 
   handleAddOption = (e) =>{
 
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
 
             {this.state.error && <p className="add-option-error">{this.state.error}</p>}
         <form className="add-option" onSubmit={this.handleAddOption}>
          
           <input  className="add-option__input" type="text" name="add"/>
           <input className="button" type="submit" value="Add Option" name="option"/>
          
         </form>
         </div>
         );
   
   
   }
 
 }