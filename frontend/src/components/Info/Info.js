import React, { useState, useEffect } from 'react';
import './Info.css';

function Info(props) {
    const [info, setInfo] = useState(null)

    useEffect(() => {
        setInfo(props.info)
      }, [props]);

    if (info) {
        return(
            <div className="info-page-flex-container">
                <div className="info-container">
                    <div>
                    <div id="bio-container">
                        <div dangerouslySetInnerHTML={{__html:info.bio}} id="bio"/>
                    </div>
                    <div id="info-lists">
                        <div id="info-lists-flex-container">
                            <div id="selected-clients">
                                <p>Select Clients</p>
                                <div dangerouslySetInnerHTML={{__html:info.clients}} />
                            </div>
                            <div id="contact">
                                <p>Contact</p>
                                <ul>
                                    <li><a href={"mailto: " + info.email}>Email</a></li> 
                                    <li><a href={info.linkedin}>Linkedin</a></li>
                                    <li><a href={info.instagram}>Instagram</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="copyright-container" id="info-copyright">
                        <p>&#169; {new Date().getFullYear()}</p>
                </div>
            </div>
        ) 
    } else {
        return <div/>
    }
}

export default Info;