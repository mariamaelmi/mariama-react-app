import { Fragment } from "react";

 function Greeting(props) {
return (
  <div style = {{ backgroundColor: "black", color: "white"}}>
<h1 >
  Hello {props.name} {props.surname}.
  </h1>
  <h2>
    this text was not in there</h2>
 </div>
);
  }
  export default Greeting;
 