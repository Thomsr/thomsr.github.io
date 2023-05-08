import NavBar from "./components/navbar/navbar"
import Project from "./components/projects/project"

import Blob1 from "./svg/blob1.svg"
import Blob2 from "./svg/blob2.svg"
import Blob3 from "./svg/blob3.svg"

import './app.css'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <p id="thomas">Thomas</p>
        <p id="rooskens">Rooskens</p>
        <img id="blob2" src={Blob2} alt="blob2" />
        <img id="blob1" src={Blob1} alt="blob1" />
        <img id="blob3" src={Blob3} alt="blob3" />
      </div>
      <div id="project1">
        <Project
          title="DNA Sequence Storage"
          text="Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
          orientation="left"
        />
      </div>
      <div id="project2">
        <Project 
          title="Language parse-tree"
          text="Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
          orientation="right"
        />
      </div>
    </div>
  )
}