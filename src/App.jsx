import resources from './assets/ressurser.js'
import './App.css'

function App() {

  console.log(resources)

  return (
    <>
      <div id="container">
        <div id="nav-cont">
          <nav>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Headless-CMS</li>
            </ul>
          </nav>
          <div id="content-cont">
            <h1>HTML</h1>
            <p></p>
            <div id="links-cont">
              <ul>
                <li>LINK1</li>
                <li>LINK2</li>
                <li>LINK3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
