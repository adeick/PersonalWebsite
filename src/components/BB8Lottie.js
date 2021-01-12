import React, { Component } from 'react'
import Lottie from 'react-lottie'
import astronaut from '../../public/lotties/bb8.json'

class BB8Lottie extends Component {


  render(){

    const droidOptions = {
      loop: true,
      autoplay: true,
      animationData: astronaut,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
          <Lottie options={droidOptions}
          width={400} isClickToPauseDisabled={true}
        />
      </div>
    )
  }
}

export default BB8Lottie;