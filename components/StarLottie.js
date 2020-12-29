// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import star from '../public/lotties/star.json'

class StarLottie extends Component {
    constructor(props) {
        super(props);
        this.state = {isStopped: this.props.play, isPaused: false};
      }
  
  render(){

    const options = {
      loop: true,
      autoplay: false,
      animationData: star,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
          <Lottie options={options}
          width="100%" isClickToPauseDisabled={true}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    )
  }
}

export default StarLottie;