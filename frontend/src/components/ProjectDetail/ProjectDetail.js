import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './ProjectDetail.css';
import BalanceText from 'react-balance-text';
import ProjectDetailSlider from './components/ProjectDetailSlider'
import OtherWorkCards from './components/OtherWorkCards'

function ProjectDetail(props) {
    const {
        params: { project },
    } = props.match;
    const history = useHistory();
    const [projectData, setProjectData] = useState(null)
    const [isSingleMedia, setIsSingleMedia] = useState(false)
    const childRef = useRef();

    useEffect(() => {
        handleProject();
    }, [project])

    useEffect(() => {
        checkIfSingleMedia();
    }, [projectData])

    function handleProject() {
        const findProject = () => {
            var foundProject = false
            props.projects.forEach(function(i) {
                if (i.meta.slug === project) {
                    setProjectData(i)
                    foundProject = true;
                }
            });
            return Promise.resolve(foundProject)
        }

        const redirectIfInvalid = (bool) => {
            if (bool === false) {
                history.push('/')
            }
        }

        findProject().then(response => redirectIfInvalid(response))
    }

    function checkIfSingleMedia() {
        if (projectData) {
            if (projectData.media_gallery.length === 1) {
                setIsSingleMedia(true)
            } else {
                setIsSingleMedia(false)
            }
        }
    }

    function handleLeftClick(e) {
        try {
            childRef.current.handleLeftClick(e);
        }
        catch(err) {
            console.log(err)
        }
      }

    function handleRightClick(e) {
        try {
            childRef.current.handleRightClick(e)
        }
        catch(err) {
            console.log(err)
        }
      }

    if (projectData) {
        return (
            <div className="project-detail">
                <div 
                    className={`project-detail-left ${isSingleMedia ? 'hidden' : ''}`} 
                    onClick={handleLeftClick}
                />
                <div 
                    className={`project-detail-right ${isSingleMedia ? 'hidden' : ''}`} 
                    onClick={handleRightClick}
                />
                <div className="project-detail-flex-container">
                    <div className="project-detail-image-and-description-container">
                        <div className="project-slider-flex-container">
                            <div className="project-slider-container">
                                    <div>
                                        <ProjectDetailSlider mediaGallery={projectData.media_gallery} images={props.images} ref={childRef}/>
                                    </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <BalanceText>
                                {projectData.full_description}
                            </BalanceText>
                        </div>
                    </div>
                    <div className="project-credits">
                        <span dangerouslySetInnerHTML={{__html:projectData.project_credits}}/>
                    </div>
                </div>
                <div className="other-work-container">
                    <div>
                        <OtherWorkCards projects={props.projects} currentProject={project}/>
                    </div>
                </div>
                <div className="copyright-container">
                    <p>&#169; {new Date().getFullYear()}</p>
                </div>
            </div>
        )
    } else {
        return (<div/>)
    }

}
  
  export default ProjectDetail;