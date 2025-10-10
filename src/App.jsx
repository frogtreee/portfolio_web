import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [isOpen, setIsOpen] = useState(false)
  let [isClicked, setClick] = useState(0)
  let [packages1, setPacks1] = useState([1, 2, 3, 4, 5, 6, 7])
  let [packages2, setPacks2] = useState([1, 2, 3, 4, 5, 6, 7])
  //change to key value pair later on

  //projects holder

  return (
    <>
      <div className='App'>
        <div className='centered'>
          <h1 id = 'click' onClick={() => {setIsOpen(true)}}>
            Portfolio of Theo Jung
          </h1>
        </div>
        <div className='about_low'>
          <div className='about'>
            <h4>
              About
            </h4>
            <p>
              Theo is a passionate game designer and developer. <br/>
              Attending at Northeastern University.
            </p>
          </div>
          <div className='about'>
            <h4>
              Contact
            </h4>
            <p>
              frogtreee@gmail.com<br/>
              @theo_jung0_0
            </p>
          </div>
        </div>
      </div>
      <div className={`main ${isOpen ? "open" : ""}`}>
        <div className='secondMain'>
          <div className='menu'>
            <button className={`buttons ${isClicked == 0 ? "clicked" : ""}`} onClick={() => {setClick(0)}}>
              projects
            </button>
            <button className={`buttons ${isClicked  == 1 ? "clicked" : ""}`} onClick={() => {setClick(1)}}>
              life
            </button>
            <button className={`buttons ${isClicked  == 2 ? "clicked" : ""}`} onClick={() => {setClick(2)}}>
              contact
            </button>
          </div>
          <div className='displayer'>
            {
              isClicked == 0 ? <Boxholder packages = { packages1 }/> : null ||
              isClicked == 1 ? <Boxholder packages = { packages2 }/> : null ||
              isClicked == 2 ? <InfoModal></InfoModal> : null
            }
          </div>
        </div>
      </div>
    </>
  )
}

function Boxholder(props){
  return(
    <div className='boxholder'>
      {
      props.packages.map(function(arrIndex, i){
        return(
          <Box name = {arrIndex} i = { i }/>
        )
      })
      }
    </div>
  )
}

function Box(props){
  return (
    <div className='box' key = {props.i}>
      <img src=''>
      </img>
    </div>
  )
}

function InfoModal(){
  return(
    <div className='infoModal'>
      <div>
        <h4>
          About
        </h4>
        <p>
          Theo is a passionate game designer and developer. <br/>
          Attending at Northeastern University.
        </p>
      </div>
      <div>
        <h4>
          Contact
        </h4>
        <p>
          frogtreee@gmail.com<br/>
          @theo_jung0_0
        </p>
      </div>
    </div>
  )
}

export default App
