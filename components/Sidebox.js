import React, { Component } from 'react';
import { Box, Stack, Icon, IconButton, Flex, Image, Text, Link } from '@chakra-ui/core';

class Sidebox extends Component {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: "blue.200"
        }
    }
    handleMouseOver = () => {
        this.setState({
            backgroundColor: "blue.300"
        });
    }
    handleMouseLeave = () => {
        this.setState({
            backgroundColor: "blue.200"
        });
    }

    render() {
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
            bg={this.state.backgroundColor}
            w="100%" 
            h="80px"
            position="relative"
            top="60px"
            borderY="2px solid"
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
            
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