// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import giraffe from '../public/lotties/giraffe.json'

class GiraffeLottie extends Component {


  render(){

    const giraffeOptions = {
      loop: true,
      autoplay: true,
      animationData: giraffe,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
          <Lottie options={giraffeOptions}
          width="100%" isClickToPauseDisabled={true}
        />
      </div>
    )
  }
}

export default GiraffeLottie