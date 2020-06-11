class VisibilityToggle extends React.Component {

constructor(props){

    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);


    this.state= {


       visibility: false        
    }
}

handleToggleVisibility(e){

 this.setState( (prevState)=>{

    
       return {


          visibility: !(prevState.visibility)
       }

    

 });

    
       console.log(this.state.visibility);
}



render(){

return(

      <div>
      <h1>{this.state.visibility+""}</h1>
      <button onClick={this.handleToggleVisibility}>handleToggleVisibility</button>
      </div>
)
}



}


ReactDOM.render(<VisibilityToggle/>,document.getElementById("app"));