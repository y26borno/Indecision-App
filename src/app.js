
const app = {

    title:"Indecision App",
    subtitle:"Manage your time ",
    options:['One']

}

const onFormSubmit= (event) =>{

 event.preventDefault();
     
 console.log("Form submitted");

 const option = event.target.elements.option.value; 

 if(option){

    app.options.push(option);
    event.target.elements.option.value = '';
 }
 
 renderingR();
}




const removeAll = () =>{

   console.log("button pressed");
    app.options.length =0;


    renderingR();

}

/*
var template = (

   <div>
     <h1>{app.title}</h1>
    <p>{ app.subtitle && app.subtitle }</p>
    { app.options.length > 0 ? <p>Here is the option </p>:"No options"}
    { app.options.length}
     <ol>
     <li>this is one </li>
     <li>this is two </li>
     </ol>

      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button> Add Option</button>
      </form>


     </div>


);
*/

const renderingR = () =>{

    const template = (

        <div>
          <h1>{app.title}</h1>
         <p>{ app.subtitle && app.subtitle }</p>
         
         { app.options.length}<br/>
         <button onClick={removeAll}>Remove All</button>

          <ol>
          { app.options.map( (option)=>{

                     
            return <li key={option}>{option}</li>;
             
        })
      
      
      }
          </ol>
     
           <form onSubmit={onFormSubmit}>
           <input type="text" name="option"/>
           <button> Add Option</button>
           </form>
     
     
          </div>
     
     
     );


     ReactDOM.render(template,appRoot);

}


var appRoot = document.getElementById("app");

renderingR();





/*



let count =0;

const addOne = (event) =>{

  //console.log("clicks");
  count++;
   
  console.log(count);
  renderCounterApp();
}


const minusOne = () =>{
  
    count--;
     console.log("MinusOne");
     renderCounterApp();

}


const reset = () =>{

    console.log("Reset");
   count=0;
   renderCounterApp();
}





//var appRoot = document.getElementById("app");


const renderCounterApp= () =>{

    const templateTwo =(

        <div>
        
         <h1>Count: {count}</h1>
         <button id="my-id" onClick={addOne}>+1</button>
         <button id="my-id1" onClick={minusOne}>-1</button>
         <button id="my-id2" onClick={reset}>Reset</button>
        
        </div>
      
      
      
      );

      ReactDOM.render(template,appRoot);
}

//renderCounterApp();
//ReactDOM.render(templateTwo,appRoot);
//ReactDOM.render(template,appRoot);

*/