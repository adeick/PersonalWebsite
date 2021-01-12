// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import arrow from '../../public/lotties/leftarrow.json'

class ArrowLottie extends Component {


  render(){

    const options = {
      loop: true,
      autoplay: true,
      animationData: arrow,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
          <Lottie options={options}
          width="100%" isClickToPauseDisabled={true}
        />
      </div>
    )
  }
}

export default ArrowLottie;