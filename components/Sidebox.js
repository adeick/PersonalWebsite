import React, { Component } from 'react';
import { Box, Stack, Icon, IconButton, Flex, Image, Text, Link } from '@chakra-ui/react';

class Sidebox extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHovering: false
        }
    }
    handleMouseOver = () => {
        this.setState({
            isHovering: true
        });
    }
    handleMouseLeave = () => {
        this.setState({
            isHovering: false
        });
    }

    render() {
    let image;
    if(this.props.icon){
        image = <Image src={this.props.icon} fallbackSrc={this.props.fallback} title={this.props.text}
        margin="auto" w={this.state.isHovering ? "80%" : "70%"}/>
    }
      return (
        <Flex
            as="a"
            href={this.props.href}
            target={this.props.target}
            bg={this.state.isHovering ? "blue.300" : "blue.200"}
            w={this.state.isHovering ? "102%" : "100%"}
            h="80px"
            position="relative"
            top="60px"
            borderY="2px solid"
            borderRight="2px solid"
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
            borderRadius="0px 20px 20px 0px"
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