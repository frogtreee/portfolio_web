import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoClose } from "react-icons/io5";

function App() {

  //projects holder
  // let project_1 = {title: '', imageSource: '.../src/images/', role: '', duration: '', details: ''}
  let project_1 = {title: 'DUMP', imageSource: "/src/images/ChatGPT Image Sep 22, 2025, 01_24_39 AM.png", role: 'developer', duration: '10/28/2025', details: 'dsjhfaksdjfhaskjdfhaskldjfhsakjldfhskajdlfhaskljdfhsadkjlfhsdakjlfhaskdjlfhsakjldfhkajlsdhfkjlsadhfkljsdafhkjlsadfhkjlsadfhklsjadfhsjkadlfhskajldfhsajkldfhsakldjhfsklajdfh'}
  let project_2 = {title: 'deadSpace', imageSource: '/src/images/deadspace.avif', role: 'developer', duration: '10/28/2025', details: 'dsjhfaksdjfhaskjdfhaskldjfhsakjldfhskajdlfhaskljdfhsadkjlfhsdakjlfhaskdjlfhsakjldfhkajlsdhfkjlsadhfkljsdafhkjlsadfhkjlsadfhklsjadfhsjkadlfhskajldfhsajkldfhsakldjhfsklajdfh'}

  let [isOpen, setIsOpen] = useState(false)
  let [isClicked, setClick] = useState(0)
  let [projectsPackage, setPacks1] = useState([project_2, project_2, project_2, project_1, project_1])
  let [imagesPackage, setPacks2] = useState([project_1, project_1, project_1, project_1, project_1, project_1, project_1])
  //change to key value pair later on

  let [isPreviewOpen, setisPreviewOpen] = useState(false);
  let [selectedArr, setSelectedArr] = useState(0);

  function openPreview(i){
    setisPreviewOpen(true);
    setSelectedArr(i);
  }

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
              isClicked == 0 ? <Boxholder packages = { projectsPackage } openPreview = {openPreview} selectedArr = { selectedArr } isPreviewOpen = { isPreviewOpen } setisPreviewOpen = { setisPreviewOpen }/> : null ||
              isClicked == 1 ? <Boxholder packages = { imagesPackage }/> : null ||
              isClicked == 2 ? <InfoModal></InfoModal> : null
            }
            {
              isPreviewOpen == true ? <></> : null
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
          <img src={arrIndex.imageSource} className='box' key = { i } onClick={() => { props.openPreview(i) }}>
          </img>
        )
      })
      }
      {
        props.isPreviewOpen && (<Preview packages = { props.packages } setisPreviewOpen = { props.setisPreviewOpen } selectedArr = { props.selectedArr }></Preview>)
      }
    </div>
  )
}

function Preview(props){
  return(
  <div className="overlay" onClick={() => {props.setisPreviewOpen(false)}}>
    <div className="popup" onClick={(e) => e.stopPropagation()}>
      <div className='preview_Header'>
        <h1>{ props.packages[props.selectedArr].title }</h1>
        <button className = 'preview_close_btn'onClick={() => {props.setisPreviewOpen(false)}}>
          <IoClose size={24} />
        </button>
      </div>
      <div className='preview_imageAnddetails'>
        <img src = { props.packages[props.selectedArr].imageSource }>
        </img>
        <div className='preview_details'>
          <button className='preview_more_btn'>
            More
          </button>
          <h4>
            duration: <br></br>
            {props.packages[props.selectedArr].duration}
          </h4>
          <h4>
            role: {props.packages[props.selectedArr].role}
          </h4>
        </div>
      </div>
      <h4>
        About
      </h4>
      <p>
        {props.packages[props.selectedArr].details}
      </p>
    </div>
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
