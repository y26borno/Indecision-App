

class IndecisionApp extends React.Component{
constructor(props){

  super(props);

 this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
 this.handlePick = this.handlePick.bind(this)
 this.handleAddOption =  this.handleAddOption.bind(this)
 this.handleDeleteOption = this.handleDeleteOption.bind(this)
  this.state={

   options:[]

  };

}

//handleDeleteOptions

handleDeleteOptions(){
//this.setState(()=>{
//
// return{
//    options:[]
//
//  }
// });


  this.setState( () =>({

   options: []

  }));


}


componentDidMount(){

 try{
  if(options){
    this.setState( ()=>{
  
     return {
  
        options: options
  
     }
  
  
    })
  
  }

 }catch(e){



 }



}

componentDidUpdate(prevProps,prevState)
{

   if(prevState.options.length != this.state.options.length){

       const json = JSON.stringify(this.state.options)
       localStorage.setItem('options',json)

   }

   console.log("saving data")

}


handleDeleteOption(optionToRemove){

  this.setState( (prevState) =>({

    options: prevState.options.filter( (option) =>{

         return optionToRemove !== option;

    })


  }));
}

handlePick(){

   const randomNum = Math.floor(Math.random() * this.state.options.length);
   const option = this.state.options[randomNum];

   alert(option)

  
}


handleAddOption(option){

if (!option){

  return "Enter valid value to add items"
}

else if (this.state.options.indexOf(option) >-1){


  return "item already exists"
}


//this.setState( (prevState)=>{

 //  return {

    // options: prevState.options.concat(option)


   //}


//});


this.setState( (prevState) =>({

  options: prevState.options.concat(option)
}));


}

render(){

 const title = "Indecision"
 const subtitle = "!!put your in the hands of computer"
 
    return (

        <div>
        
        <Header title={title}  subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length >0}  handlePick={this.handlePick}/>
        <Options options={this.state.options}   
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}/>
        <AddOption  handleAddOption={this.handleAddOption}/>
        
        </div>
    )
}


}







const Header = (props) => {

  
        
     console.log(props);

    return(
    
        <div>
        
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    ); 
    
    
    
   }

   Header.defaultProps = {

    title:'Indecision'
  }




const Action = (props) =>{

     



    return (

          <div>
          
          <button onClick={props.handlePick} disabled= {!(props.hasOptions)}>What should I do?</button>
          
          </div>

    );
}




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



const Option = (props) => {

  

   return (<div>
   {props.option}
   <button onClick={
      
     (e)=>{

       props.handleDeleteOption(props.option)


     }


   }>remove</button>
   </div>);

  }






class AddOption extends React.Component{
 
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









ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));