import React from "react";
import './style.css'
// import pic from "./pic.png"
//components
const Introduction = () => {
return(
    <div className="head">
        <h1 className="heading">What I have learnt about ReacteactJS</h1>
        <p>It has reusable components</p>
        <p>The writting formart is JSK</p>
        <p>It is fast,modular and popular</p>
        <img src={process.env.PUBLIC_URL + '/images/pic.png'} alt="Pic"  className="image"/>
        <img src={process.env.PUBLIC_URL + '/images/pic.png'} alt="Pic"  className="image"/>
        <div className="react">
            
            <ul>
                <h2>Facts about react</h2>
                <li>React JS is a JavaScript library for building user interfaces.</li>
                <li>React JS was created by Jordan Walke at Facebook in 2013.</li>
                <li> React JS is used by many popular websites and applications,<br></br> 
                    including Facebook, Instagram, and Netflix.</li>
                <li> React JS is based on the concept of components. Components <br></br>
                    are reusable pieces of code that can be used to build complex <br></br>
                    user interfaces.</li>
               </ul>
               <ul>
               <h2>Facts about react</h2>
               <li>React JS uses JSX, which is a combination of JavaScript and XML.</li> 
               <li>JSX makes it easier to write React code and makes it more readable.</li>
               <li>React JS is Virtual DOM-based. The Virtual DOM is a lightweight <br></br>
               representation of the real DOM. React JS uses the Virtual DOM to<br></br> 
               efficiently update the real DOM.</li>
              <li> React JS is stateless by default. This means that components do <br></br>
               not have any internal state. State is managed by the state container.</li>
               </ul>
           
        </div>
        <div className="reactjs">
            <ul>
            <h2>Benefits of using React JS</h2>
            <li>Performance: React JS is very performant because it uses the Virtual DOM.</li>
            <li>Reusability: Components are reusable, which makes it easier to build<br></br> 
            complex user  interfaces.</li>
            <li>Scalability: React JS is scalable because it is based on components.</li>
            <li>Testing: React JS is easy to test because it is declarative.</li>
            </ul>
        </div>
    </div>
    
)
}
export default Introduction
