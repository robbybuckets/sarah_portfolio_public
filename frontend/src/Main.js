import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ProjectsSlider from './components/ProjectsSlider/ProjectsSlider';
import Info from './components/Info/Info';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import './Main.css';

import Loading from './assets/images/loading-star.gif'

function App() {
  const [projects, setProjects] = useState(null)
  const [info, setInfo] = useState(null)
  const [images, setImages] = useState(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (images && projects) {
      loadImages();
    }
  }, [images, projects]);

  function fetchData() {
    fetch('https://sarah-ryder-backend.herokuapp.com/api/v2/pages/?type=portfolio.Project&fields=client,card_image,card_description,full_description,project_credits,media_gallery')
      .then(response => response.json())
      .then(json => setProjects(json.items))
    
    fetch('https://sarah-ryder-backend.herokuapp.com/api/v2/pages/?type=home.HomePage&fields=bio,clients,email,linkedin,instagram')
      .then(response => response.json())
      .then(json => setInfo(json.items[0]))

    fetch('https://sarah-ryder-backend.herokuapp.com/api/v2/images/?limit=1000')
      .then(response => response.json())
      .then(json => setImages(json))        
  }

  function loadImages() {
    const loadCardImageURLS = () => {
      var imageURLS = []
      projects.map(project => {
        imageURLS.push(project.card_image.meta.download_url)
      })
      return Promise.resolve(imageURLS)
    }

    const loadProjectImageURLS = (imageURLS) => {
      projects.map(project => {
        for (var i = 0; i < 2; i++){
          if (project.media_gallery[i]) {
            if (project.media_gallery[i].type === 'image') {
              var imageID = project.media_gallery[i].value
              var imageObj = images.items.find(obj => {
                return obj.id === imageID
              })
              var downloadURL = imageObj.meta.download_url
              imageURLS.push(downloadURL)
            }
          }
        } 
      })
      return Promise.resolve(imageURLS)
    }

    const preload = async (loadedURLS) => {
      const promises = await loadedURLS.map((src) => {
        return new Promise(function (resolve, reject) {
          const img = new Image();

          img.src = src;
          img.onload = resolve();
          img.onerror = reject();
        });
      })
      await Promise.all(promises)
      setTimeout(function(){setImagesLoaded(true);}, 1750);
    }

    loadCardImageURLS().then(response => loadProjectImageURLS(response)).then(response => preload(response))
  }
  

  if (imagesLoaded) {
    return (
      <div className="app-container">
        <div className="navbar">
          <NavLink to="/"><div id="logo"></div></NavLink>
          <h1><NavLink to="/info">Info</NavLink></h1>
        </div>
        <div className="content">
          <Route render={({location}) => (
            <TransitionGroup id="transition-group">
              <CSSTransition
                key={location.key}
                timeout={500}
                classNames="page fade"
              >
                <div id="routes-container">
                  <Switch location={location}>
                    <Route 
                      exact path="/"
                      render={(props) => (
                        <ProjectsSlider {...props} projects={projects} />
                      )}
                    />
                    <Route 
                    exact path="/info" 
                    render={(props) => (
                      <Info {...props} info={info} />
                    )}
                    />
                    <Route
                      path="/:project"
                      render={(props) => (
                        <ProjectDetail {...props} projects={projects} images={images} />
                      )}
                    />
                    <Redirect to="/" />
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
      </div>
    );
  } else {
    return (
    <div id="loading">
      <img src={Loading} alt="loading spinner">
      </img>
    </div>
    )
  }
}

export default App;