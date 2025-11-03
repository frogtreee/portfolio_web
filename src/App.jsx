import { useState } from 'react'
import { useRef, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoClose } from "react-icons/io5";

//import project files.
import project1 from './projects/project1';
import project2 from './projects/project2';

function App() {

  // let project_1 = {title: '', imageSource: '.../src/images/', role: '', duration: '', short_description: ''}

  let [isOpen, setIsOpen] = useState(false)
  let [isClicked, setClick] = useState(0)
  let [projectsPackage, setPacks1] = useState([project1, project2, project2, project2, project1])
  let [imagesPackage , setPacks2] = useState([project1, project1, project1, project1, project1, project1, project1])

  let [isPreviewOpen, setisPreviewOpen] = useState(false);
  let [isDetailedViewOpen, setisDetailedViewOpen] = useState(false);
  let [selectedArr, setSelectedArr] = useState(0);

  const displayerRef = useRef(null);

  function openPreview(i){
    setisPreviewOpen(true);
    setSelectedArr(i);
  }

  function openDetailedView(){
    setisDetailedViewOpen(true);
    setisPreviewOpen(false);
  }
  
  useEffect(() => {
  if (displayerRef.current) {
    displayerRef.current.scrollTop = 0;
  }
  }, [isClicked]);

  return (
    <>
      <div className='App'>
        <div className='landing_page'>
          <div className='landing_page_header'>
            <h1 id = 'click' onClick={() => {setIsOpen(true)}}>
              Portfolio of Theo Jung
            </h1>
          </div>
          <div className='landing_page_aboutSection'>
            <div className='landing_page_about'>
              <h4>
                About
              </h4>
              <p>
                Theo is a passionate game designer and developer. <br/>
                Attending at Northeastern University.
              </p>
            </div>
            <div className='landing_page_about'>
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
              <button className={`menu_buttons ${isClicked == 0 ? "clicked" : ""}`} onClick={() => {setClick(0)}}>
                projects
              </button>
              <button className={`menu_buttons ${isClicked  == 1 ? "clicked" : ""}`} onClick={() => {setClick(1)}}>
                life
              </button>
              <button className={`menu_buttons ${isClicked  == 2 ? "clicked" : ""}`} onClick={() => {setClick(2)}}>
                contact
              </button>
            </div>
            <div className='displayer' ref={displayerRef}>
              {
                isClicked == 0 ? <Boxholder packages = { projectsPackage } openPreview = {openPreview} selectedArr = { selectedArr } isPreviewOpen = { isPreviewOpen } setisPreviewOpen = { setisPreviewOpen } isDetailedViewOpen = { isDetailedViewOpen } setisDetailedViewOpen = {setisDetailedViewOpen} openDetailedView = { openDetailedView }/> : null ||
                isClicked == 1 ? <Boxholder_img packages = { imagesPackage }/> : null ||
                isClicked == 2 ? <InfoModal></InfoModal> : null
              }
            </div>
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
        props.isPreviewOpen && (<Preview packages = { props.packages } setisDetailedViewOpen = { props.setisDetailedViewOpen } setisPreviewOpen = { props.setisPreviewOpen } selectedArr = { props.selectedArr } openDetailedView = {props.openDetailedView}></Preview>)
      }
      {
        props.isDetailedViewOpen && (<DetailedView packages = { props.packages } setisDetailedViewOpen = { props.setisDetailedViewOpen } setisPreviewOpen = { props.setisPreviewOpen } selectedArr = { props.selectedArr }/>)
      }
    </div>
  )
}

function Boxholder_img(props){
  return(
    <div className='boxholder'>
      {
      props.packages.map(function(arrIndex, i){
        return(
          <img src={arrIndex.imageSource} className='box_img' key = { i }>
          </img>
        )
      })
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
        <button className = 'preview_close_btn' onClick={() => {props.setisPreviewOpen(false)}}>
          <IoClose size={24} />
        </button>
      </div>
      <div className='preview_imageAnddetails'>
        <img src = { props.packages[props.selectedArr].imageSource }>
        </img>
        <div className='preview_details'>
          {/* link a url */}
          <button className='preview_more_btn' onClick={() => {props.openDetailedView()}}>
            More
          </button>
          <h4>
            Date: <br></br>
            {props.packages[props.selectedArr].date}
          </h4>
          <h4>
            role: {props.packages[props.selectedArr].role}
          </h4>
        </div>
      </div>
      <div className='preview_about'>
        <h4>
          About
        </h4>
        <p>
          {props.packages[props.selectedArr].short_description}
        </p>
      </div>
    </div>
  </div>
  )
}

function DetailedView(props){
  return(
  <div className="overlay_detailedView">
    <div className="detailedView">
      <div className='detailedView_Header'>
        <div className='detailedView_Names'>
          <h1 onClick={() => {props.setisDetailedViewOpen(false)}}>
            Theo Jung:    
          </h1>
          <h1>
            {props.packages[props.selectedArr].title}
          </h1>
        </div>
        <button className='detailedView_close_btn' onClick={() => {props.setisDetailedViewOpen(false)}}>
            <IoClose size={45}/>
        </button>
      </div>

      <div className='detailedView_imgAndDetails'>
        <div className='detailedView_imgHolder'>
          <img className='detailedView_main_img' src = {props.packages[props.selectedArr].imageSource}>
          </img>
        </div>

        <div className='detailedView_details'>
          {
            props.packages[props.selectedArr].downloadable == true ? <a className='detailedView_download_btn' href={ props.packages[props.selectedArr].download_path } download> Download </a> : <div className='detailedView_download_btn'>No files to download</div>
          }
          <p>
            Date <br/>
            {props.packages[props.selectedArr].date}
          </p>
          <p>
            role <br/>
            {props.packages[props.selectedArr].role}
          </p>
        </div>
      </div>
      <h3>
        About
      </h3>
      <div className='detailedView_about'>
        {
          props.packages[props.selectedArr].explanations.map(function(arrIndex, i){
            return(
              <>
                <div className='detailedView_about_element' key={i}>
                  {
                    arrIndex[0] != null ? <p>{arrIndex[0]}</p> : null
                  }
                  {
                    arrIndex[1] != null ? <img src = {arrIndex[1]}></img> : null
                  }
                </div>
              </>
            )
          })
        }
      </div>
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
