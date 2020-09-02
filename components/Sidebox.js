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
        h="80%" display="inline" position="absolute" right="10%" top="10%" />
    }
      return (

            <Box
              bg="blue.200"
              w="100%"
              h="80%"
              position="relative"
              top="100px"
              padding="20px"
              borderY="2px solid"
              my="10px"
              //onMouseOver={this.mouseOver}
              //onMouseLeave={() => mouseOut()}
              
            >
             <Text fontSize={32} fontFamily="Lexend Deca" display="inline-block">
                {this.props.text}
            </Text>
             {image}
            </Box>
      );
    }
  }

  export default Sidebox;