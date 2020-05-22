"use strict";

var app = {

  title: "Indecision App",
  subtitle: "Manage your time ",
  options: ['One']

};

var onFormSubmit = function onFormSubmit(event) {

  event.preventDefault();

  console.log("Form submitted");

  var option = event.target.elements.option.value;

  if (option) {

    app.options.push(option);
    event.target.elements.option.value = '';
  }

  renderingR();
};

var removeAll = function removeAll() {

  console.log("button pressed");
  app.options.length = 0;

  renderingR();
};

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

var renderingR = function renderingR() {

  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "p",
      null,
      app.subtitle && app.subtitle
    ),
    app.options.length,
    React.createElement("br", null),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {

        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        " Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

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
