

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

render(){


    return (

          <div>
          
          <button>What should I do?</button>
          
          </div>

    );
}

}


class Options extends React.Component{

    

render(){

     const list = this.props.options;
      
        
     


    return (

        
        <div>
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

    render(){

        return (


            <div>
        Addoption component here
        </div>
        );
  
  
  }

}









ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));