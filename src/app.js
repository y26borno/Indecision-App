

class IndecisionApp extends React.Component{
constructor(props){

  super(props);

 this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
 this.handlePick = this.handlePick.bind(this)
 this.handleAddOption =  this.handleAddOption.bind(this)
  this.state={

   options:[]

  };

}

//handleDeleteOptions

handleDeleteOptions(){

  this.setState(()=>{

   return{
      options:[]

   }
  });


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


this.setState( (prevState)=>{

   return {

     options: prevState.options.concat(option)


   }


});


}

render(){

 const title = "Indecision"
 const subtitle = "!!put your in the hands of computer"
 
    return (

        <div>
        
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length >0}  handlePick={this.handlePick}/>
        <Options options={this.state.options}   handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption  handleAddOption={this.handleAddOption}/>
        
        </div>
    )
}


}







class Header extends React.Component{

   render(){
        
     console.log(this.props);

    return(
    
        <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        </div>
    ); 
    
    
   }

}


class Action extends React.Component{

     
render(){


    return (

          <div>
          
          <button onClick={this.props.handlePick} disabled= {!(this.props.hasOptions)}>What should I do?</button>
          
          </div>

    );
}

}


class Options extends React.Component{

   

render(){

     const list = this.props.options;
      
        
     


    return (

        
        <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All Button</button>
        {list.map( (e,key)=> <Option option={e} key={key}/>)}
        </div>
    )
        


}

}

class Option extends React.Component{

  render(){

   return (<div>
   {this.props.option}
   Option goes here
   </div>);

  }

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

      this.setState(()=>{

       return {

        error

       }

      });
    
   
    
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