import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './ProjectsSlider.css';

function ProjectsSlider(props) {
  const history = useHistory();
  const ref = useRef();

  const sliderOptions = {
      rewind: true,
      perMove: 0,
      gap: '3vw',
      type: 'loop',
      autoWidth: true,
      pagination: false,
      arrows: false,
      focus: 'center',
      trimspace: false,
  }

if (props) {
  function handleLeftClick(e) {
    try {
      ref.current.splide.go('<');
    }
    catch(err) {
      console.log(err)
    }
  }

  function handleRightClick(e) {
    try {
      ref.current.splide.go('>');
    }
    catch(err) {
      console.log(err)
    }
  }

  function handleReset() {
    try {
      ref.current.splide.go('+{2}');
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div id="projects-slider-flex-container">
      <div id="buttons-top-container">
        <div id="slider-button-top-left" onClick={handleLeftClick}/>
        <div id="slider-button-top-right" onClick={handleRightClick}/>
      </div>
      <div className="projects-slider-container">
        <Splide
          options={ sliderOptions }
          ref={ref}
          >
          {props.projects.map((project, index) => (
            <SplideSlide key={index}>
                <div 
                  className="projects-slider-card-container" 
                  onClick={() => {
                    handleReset();
                    history.push("/" + project.meta.slug);
                  }}
                >
                  <div className="projects-slider-card-image-container">
                    <img src={project.card_image.meta.download_url} alt={project.card_description}/>
                  </div>
                  <div className="projects-slider-card-text-container">
                    <p className="projects-slider-client-name">{project.client}</p>
                    <p className="projects-slider-card-description">{project.card_description}</p>
                  </div>
                </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div id="buttons-bottom-container">
        <div id="slider-button-bottom-left" onClick={handleLeftClick}/>
        <div id="slider-button-bottom-right" onClick={handleRightClick}/>
      </div>
    </div>
  );
} else {
  return <div/>
}

  }
  
  export default ProjectsSlider;