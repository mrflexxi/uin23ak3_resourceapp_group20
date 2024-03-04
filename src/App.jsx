import resources from './assets/ressurser.js'
import './App.css'

function App() {

  console.log(resources)

  return (
    <>
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
        <div id="container">
          <h1>HTML</h1>
          <p>Content</p>
        </div>
      </div>
    </>
  )
}

export default App
