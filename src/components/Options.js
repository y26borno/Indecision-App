import React from 'react'
import Option from './Option'
const Options = (props) =>{
    
       
    
    
    
    const list = props.options;
     
       
    


   return (

       
       <div>
      <div className="widget-header">
       <h3 className="widget-header__title">Your Options</h3>
       <button
       className="button button--link"
       onClick={props.handleDeleteOptions}>Remove All Button</button>
       </div>

       { list.length <=0 ? <p className="widget__message">Please add an option</p> : <p></p>}
       {list.map( (e,key)=> <Option 
         option={e} 
         key={key}
         count={key+1}
         handleDeleteOption={props.handleDeleteOption}
         />)}
       </div>
   )
       


}

export default Options;