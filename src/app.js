

class IndecisionApp extends React.Component{


render(){

 const title = "Indecision"
 const subtitle = "!!put your in the hands of computer"
 const options = ['Thing one','Thing two',"sumaya","Rachel"]
    return (

        <div>
        
        <Header title={title} subtitle={subtitle}/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
        
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

     handlePick(){


        alert("works!!");
     }


render(){


    return (

          <div>
          
          <button onClick={this.handlePick}>What should I do?</button>
          
          </div>

    );
}

}


class Options extends React.Component{

 handleRemoveAll(){


      alert("Remove All");
 }   

render(){

     const list = this.props.options;
      
        
     


    return (

        
        <div>
        <button onClick={this.handleRemoveAll}>Remove All Button</button>
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

  handleAddOption(e){

    const eva = e.target.elements.add.value;

    if(eva){

        alert(eva);
    }
   
    e.preventDefault();
  }


    render(){

        return (


            <div>
        <form onSubmit={this.handleAddOption}>
         
          <input type="text" name="add"/>
          <input type="submit" value="Add Option" name="option"/>
         
        </form>
        </div>
        );
  
  
  }

}









ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));