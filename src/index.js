import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//1. When new text is written into the input == state should be saved. [X]
//2. When the add button is pressed, the current data in the input should be 
//added to an array. [X]
//3. The <ul> should display all the array items as <li> [X]
