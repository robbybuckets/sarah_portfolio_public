import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Video from "@splidejs/splide-extension-video";
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './ProjectDetailSlider.css';

import videoBackground from '../../../assets/images/video-background.jpg';

const ProjectDetailSlider = forwardRef((props, ref) => {
    const splideRef = useRef();
    const ProjectSliderOptions = {
        type: 'fade',
        rewind: true,
        perPage: 1,
        autoWidth: true,
        pagination: false,
        arrows: false,
        easing: 'steps(0, start)',
        video: {
          autoplay: true,
          mute: true,
          loop: true
        },
    }

    useImperativeHandle(ref, () => ({

      handleRightClick(e) {
        try {
          splideRef.current.splide.go('>');
        }
        catch(err) {
          console.log(err)
        }
      },
  
      handleLeftClick(e) {
        try {
          splideRef.current.splide.go('<');
        }
        catch(err) {
          console.log(err)
        }
      },
  
      handleSplideReset(e) {
        try {
          splideRef.current.splide.go('0');
        }
        catch(err) {
          console.log(err)
        }
      },
  
    }));

  if (props) {

    return (
        <Splide
          options={ ProjectSliderOptions }
          ref={splideRef}
          Extensions={{ Video }}
          className="project-detail-slider"
        >
          {props.mediaGallery.map((item, index) => {
            if (item.type === 'image') {
              var image = props.images.items.find(obj => {
                return obj.id === item.value
              })
              return (
                  <SplideSlide key={index}>
                    <div className="project-detail-slide">
                      <img
                        src={image.meta.download_url}
                        alt={image.title}
                      />
                    </div>
                  </SplideSlide>
              )
            }
            else if (item.type === 'video') {
              return (
                <li
                key={index}
                className="splide__slide"
                data-splide-vimeo={item.value}
                >
                  <img
                    id="splide-video-image"
                    src={videoBackground}
                    alt="Video Background"
                  />
                </li>
              )
              } else {return <div/>}
            }
          )}
        </Splide>
    );
  } else {
    return <div/>
  }
});
  
export default ProjectDetailSlider;