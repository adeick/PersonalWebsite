// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import astronaut from '../public/lotties/astronaut404.json'

class AstronautLottie extends Component {


  render(){

    const astronautOptions = {
      loop: true,
      autoplay: true,
      animationData: astronaut,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
          <Lottie options={astronautOptions}
          width="55%"
        />
      </div>
    )
  }
}

export default AstronautLottie