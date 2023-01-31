 /*import React from "react";
 import  ReactDOM  from "react-dom/client";

 const Greeting=() => {
    return <h2>My first component</h2>;
 };

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Greeting
   />);0
 export default Greeting;*/

 /*import React from "react";
 
 import ReactDOM from "react-dom/client";
 
  
 
 const Hello = () => {
 
   return (   
 
     <section>
 
         <Book />
 
         <Book />
 
         <Book />
 
         <Book />
 
     </section>
 
   );
 
 };
 
 function Book() {
 
     return (
 
       <section>
 
         <Title />
 
         <Place />
 
         <Author />
 
       </section>
 
     );
 
   }
 
   function Title() {
 
     return <h2>book title</h2>;
 
   }
 
   function Place() {
 
     return <h2>image placeholder</h2>;
 
   }
 
   function Author() {
 
     return <h2>book author</h2>;
 
   }
 
   const root = ReactDOM.createRoot(document.getElementById("root"));
 
   root.render(<Hello />);
 
   ReactDOM.render(<Hello />, document.getElementById("root"));
 
   export default Hello; */

 import React from "react";
 
 import ReactDOM from "react-dom/client";

   function Car() {
    return <h2>I am a Car!</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);
  
  
