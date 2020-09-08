import React, { Component } from 'react';
import { Box, Stack, Icon, IconButton, Flex, Image, Text, Link } from '@chakra-ui/core';

class Sidebox extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         backgroundColor: "blue.200"
    //     }
    //     this.mouseOver = this.mouseOver.bind(this);
    //     this.mouseOut = this.mouseOut.bind(this);
    // }
    // mouseOver(){
    //     alert('Mouse');
    //     this.setState(state =>({
    //         backgroundColor: "blue.300"
    //     }));
    // }
    // function mouseOut(e){
    //     this.setState(state =>({
    //         backgroundColor: "blue.200"
    //     }));
    // }

    render() {
    // let text = this.props.link ? 
    // <Link href={this.props.link} isExternal={this.props.isExternal}>
    //     <Text fontSize={32} fontFamily="Lexend Deca" display="inline-block">
    //         {this.props.text}
    //     </Text>
    // </Link>
    // :
    let image;
    if(this.props.icon){
        image = <Image src={this.props.icon} fallbackSrc={this.props.fallback} title={this.props.text}
        margin="auto" w="80%"/>
    }
      return (
        <Flex
            as="a"
            href={this.props.href}
            target={this.props.target}
            bg="blue.200"
            w="100%" 
            h="80px"
            position="relative"
            top="60px"
            borderY="2px solid"
            //onMouseOver={this.mouseOver}
            //onMouseLeave={() => mouseOut()}
            
          >
            <Flex pl={[0,0, 2, 6]} h="100%" w={[0,0,0.5,0.7,]} position="relative" display="inline" vertical-align="middle" alignItems="center" margin="auto" objectPosition="50% 50%">
            {/* {this.props.text} */}
              <Text fontSize={[0,0,13,26]} fontFamily="Lexend Deca" display="inline-block" transform="translateY(50%)">
                  {this.props.text}
              </Text>
            </Flex>
            <Flex w={['100%', '100%', .5, .3]} display="inline" alignItems="center" justify="center" position="relative"
               margin="auto" padding="0" maxHeight="100%" >
              {image}
            </Flex>
            
            
          </Flex>   
      );
    }
  }

  export default Sidebox;