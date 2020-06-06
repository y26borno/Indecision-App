//var template = <h1>Visibility Toogle</h1>;

var show = false;
var name = "show";

const toogle = () =>{

   if(show){

        show =false;
        name = "show";
        
        rendering();
   }
   else{

      show = true;
      name = "hide";
      
      rendering();
   }

}








const rendering = () =>{

    const template1 = (

        <div>
        <h1>Visibility Toogle</h1>
  
        <button onClick={toogle}> {name}</button>
        { show ? <p>this is it</p>: <p></p>}
        
        
        </div>
        
  
  
  );

  ReactDOM.render(template1,app);


}

var app = document.getElementById("app");

rendering();
//ReactDOM.render(template1,app);