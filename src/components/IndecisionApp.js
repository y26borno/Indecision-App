
import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';


export default class IndecisionApp extends React.Component{
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

