"use strict";

var app = {

  title: "Yousuf & Sumaya",
  subtitle: "Love at first sight",
  option: ['One', 'Two']

};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    "app.subtitle"
  ),
  app.option.length > 0 ? React.createElement(
    "p",
    null,
    "Here is the option "
  ) : "No options",
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "this is one "
    ),
    React.createElement(
      "li",
      null,
      "this is two "
    )
  )
);

var count = 0;

var addOne = function addOne(event) {

  //console.log("clicks");
  count++;

  console.log(count);
  renderCounterApp();
};

var minusOne = function minusOne() {

  count--;
  console.log("MinusOne");
  renderCounterApp();
};

var reset = function reset() {

  console.log("Reset");
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {

  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { id: "my-id", onClick: addOne },
      count
    ),
    React.createElement(
      "button",
      { id: "my-id1", onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { id: "my-id2", onClick: reset },
      "Reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
//ReactDOM.render(templateTwo,appRoot);
//ReactDOM.render(template,appRoot);
