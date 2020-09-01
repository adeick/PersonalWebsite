// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import giraffe from '../public/lotties/giraffe.json'

class UncontrolledLottie extends Component {


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
          height={150}
          width={150}
        />
      </div>
    )
  }
}

export default UncontrolledLottie