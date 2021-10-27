import React, { Component, useState, useEffect } from 'react';
import { Box, Stack, Icon, IconButton, Flex, Image, Text, Link, useColorModeValue, } from '@chakra-ui/react';


const Sidebox = (props) => {
  const [isHovering, setHovering] = useState(false);

  let image;
  if (props.isDisabled) {
    image = <Image src="/images/lock.png" title="Locked" w={["90%", "70%", "90%", "90%"]} margin="auto" />
  }
  else if (props.icon) {
    image = (
      <Image
        src={props.icon}
        fallbackSrc={props.fallback}
        title={props.text}
        margin="auto"
        w={isHovering && !props.isDisabled ? ["80%", "58%", "80%", "80%"] : ["70%", "50%", "70%", "70%"]}
      />
    )
  }
  return (
    <Flex
      as={props.as}
      href={props.href}
      target={props.target}
      bg={props.isDisabled ? useColorModeValue("blue.700", "red.900") : useColorModeValue("blue.200", "red.700")}
      w="100%"
      _hover={props.isDisabled ? null : { bg: useColorModeValue("blue.300", "red.500"), w: "102%" }}
      h="80px" // 80 on interview mode
      position="relative"
      top="60px"
      borderY="2px solid"
      borderRight="2px solid"
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      borderRadius="0px 20px 20px 0px"
    >
      <Flex pl={[0, 0, 2, 6]} h="100%" w={[0, 0, 0.5, 0.7,]} position="relative" justifyContent="left" alignItems="center" margin="auto">
        {/* {this.props.text} */}
        <Text fontSize={[0, 0, 13, 26]} fontFamily="Lexend Deca" display="inline-block">
          {props.isDisabled ? "Locked" : props.text}
        </Text>
      </Flex>
      <Flex
        w={['100%', '100%', .5, .3]}
        display="inline"
        alignItems="center"
        justify="center"
        position="relative"
        margin="auto"
        padding="0"
        maxHeight="100%"
      >
        {image}
      </Flex>
    </Flex>
  );
}

export default Sidebox;