import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { StarsCanvas } from "./components/canvas/index.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center hero-wrapper">
          <Navbar />
          <Hero />
        </div>

        <h1 className="font-poppins ">
          UNDER CONSTRUCTION UNDER CONSTRUCTION UNDER CONSTRUCTION UNDER
          CONSTRUCTION UNDER CONSTRUCTION UNDER CONSTRUCTION UNDER CONSTRUCTION
          UNDER CONSTRUCTION UNDER CONSTRUCTION UNDER CONSTRUCTION{" "}
        </h1>
        {/*<About />*/}
        {/*<Experience />*/}
        {/*<Tech />*/}
        {/*<Works />*/}
        {/*<Feedbacks />*/}
        {/*<div className="relative z-0">*/}
        {/*  <Contact />*/}
        {/*<StarsCanvas />*/}
        {/*</div>*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
