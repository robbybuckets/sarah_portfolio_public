import React from 'react';
import { useHistory } from 'react-router-dom';
import './OtherWorkCards.css';

function OtherWorkCards(props) {
    const history = useHistory();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
            });
    }

    const waitToPush = (pathname) => {
        console.log(pathname)
        if (window.pageYOffset) {
            setTimeout(function(){waitToPush(pathname)}, 10);
        } else {
            history.push("/" + pathname)
        }
    }

    if (props) {
        return(
            <div className="card-holder">
                {props.projects.map((project, index) => {
                    if (project.meta.slug !== props.currentProject) {
                        return (
                            <div 
                            key={index} 
                            className="project-card"
                            onClick={() => {
                                scrollToTop()
                                waitToPush(project.meta.slug)
                              }}
                            >
                                <div className="card-image">
                                    <img
                                        src={project.card_image.meta.download_url}
                                        alt={project.card_description}
                                    />
                                </div>
                                <div className="card-text">
                                    <p className="detail-page-card-client">{project.client}</p>
                                    <p className="detail-page-card-description">{project.card_description}</p>
                                </div>
                            </div>
                        )
                    }
                }
                )}
            </div>
        )
    } else return (
        <div/>
    )
    
}

export default OtherWorkCards;