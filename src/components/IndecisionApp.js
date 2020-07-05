
import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal'


export default class IndecisionApp extends React.Component{
  
  state = {

    options:[],
    selectedOption:undefined
  }



  //handleselectedOption


  handleClearSelectedOption = () =>{

    console.log("hello")
     this.setState( () => ({

      selectedOption: undefined 
     }))

    


  }


  
    
    //handleDeleteOptions
    
    handleDeleteOptions= () =>{
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

    handleDeleteOption = (optionToRemove) =>{
    
      this.setState( (prevState) =>({
    
        options: prevState.options.filter( (option) =>{
    
             return optionToRemove !== option;
    
        })
    
    
      }));
    }


    handlePick= ()=>{
    
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
   
      this.setState(()=>({

        selectedOption: option

      }))
   
     
   }


   handleAddOption = (option) =>{
    
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
    
    
   
    
    
    
    
    
    
    render(){
    
     const title = "Indecision"
     const subtitle = "Kichuri kaka"
     
        return (
    
            <div>
            
            <Header title={title}  subtitle={subtitle}/>

            <div className="container">
            <Action hasOptions={this.state.options.length >0}  handlePick={this.handlePick}/>

           <div className="widget">
            <Options options={this.state.options}   
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}/>
            <AddOption  handleAddOption={this.handleAddOption}/>
            </div>

            </div>
            <OptionModal handleClearSelectedOption={this.handleClearSelectedOption} selectedOption={this.state.selectedOption}/>
            </div>
        )
    }
    
    
    }

