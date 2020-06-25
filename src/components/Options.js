import React from 'react'
import Option from './Option'
const Options = (props) =>{
    
       
    
    
    
    const list = props.options;
     
       
    


   return (

       
       <div>
       <button onClick={props.handleDeleteOptions}>Remove All Button</button>
       {list.map( (e,key)=> <Option 
         option={e} 
         key={key}
         handleDeleteOption={props.handleDeleteOption}
         />)}
       </div>
   )
       


}

export default Options;