
const app = {

    title:"Yousuf & Sumaya",
    subtitle:"Love at first sight",
    option:['One','Two']

}

var template = (

   <div>
     <h1>{app.title}</h1>
    { app.subtitle && <p>app.subtitle</p>}
    { app.option.length > 0 ? <p>Here is the option </p>:"No options"}
     <ol>
     <li>this is one </li>
     <li>this is two </li>
     </ol>
   
     </div>


);









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





var appRoot = document.getElementById("app");


const renderCounterApp= () =>{

    const templateTwo =(

        <div>
        
         <h1>Count: {count}</h1>
         <button id="my-id" onClick={addOne}>{count}</button>
         <button id="my-id1" onClick={minusOne}>-1</button>
         <button id="my-id2" onClick={reset}>Reset</button>
        
        </div>
      
      
      
      );

      ReactDOM.render(templateTwo,appRoot);
}

renderCounterApp();
//ReactDOM.render(templateTwo,appRoot);
//ReactDOM.render(template,appRoot);