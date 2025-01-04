import { useState } from "react";
import {Resume} from "./Resume";
import Weather from "./Weather";

function Projects() {
    const [currentArticle, setCurrentArticle] = useState(1);

    return (
      <section id="projects" style={{ padding: "1px" }}>
        <h2>Projects</h2>
    <div className="mama">      
        <div className="haha">
        <button onClick={() => setCurrentArticle(1)}>Resume</button>
        <button onClick={() => setCurrentArticle(2)}>Weather</button>
    <p>slkfjsdlkfjsdlfsdjfkd</p>
        </div>
        <div className="kaka"> 
        {currentArticle === 1 && <Resume />}
        {currentArticle === 2 && <Weather />}
        </div>
    </div>
      </section>
    );
  }
  
  export default Projects;


