import React, { Component, useState, useEffect  } from 'react';
import { Box, Stack, Icon, IconButton, Flex, Image, Text, Link, useColorModeValue, } from '@chakra-ui/react';


const Sidebox = (props) => {
    const [isHovering, setHovering] = useState(false);

    let image;
    if(props.icon){
        image = <Image src={props.icon} fallbackSrc={props.fallback} title={props.text}
        margin="auto" w={isHovering ? ["80%","58%","80%","80%"] : ["70%","50%","70%","70%"]}/>
    }
      return (
        <Flex
            as={props.as}
            href={props.href}
            target={props.target}
            bg={useColorModeValue(isHovering ? "blue.300" : "blue.200", isHovering ? "red.500" : "red.700")}
            w={isHovering ? "102%" : "100%"}
            h="80px"
            position="relative"
            top="60px"
            borderY="2px solid"
            borderRight="2px solid"
            onMouseOver={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            borderRadius="0px 20px 20px 0px"
          >
            <Flex pl={[0,0, 2, 6]} h="100%" w={[0,0,0.5,0.7,]} position="relative" display="inline" vertical-align="middle" alignItems="center" margin="auto" objectPosition="50% 50%">
            {/* {this.props.text} */}
              <Text fontSize={[0,0,13,26]} fontFamily="Lexend Deca" display="inline-block" transform="translateY(50%)">
                  {props.text}
              </Text>
            </Flex>
            <Flex w={['100%', '100%', .5, .3]} display="inline" alignItems="center" justify="center" position="relative"
               margin="auto" padding="0" maxHeight="100%" >
              {image}
            </Flex>
          </Flex>   
      );
  }

  export default Sidebox;