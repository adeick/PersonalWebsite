import React, { useState, useEffect } from 'react';
import Sidebar from '../src/components/Sidebar';
import Link from 'next/link';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { RiPagesLine } from 'react-icons/ri'

import {
  Image,
  Box,
  Flex,
  IconButton,
  Button,
  ButtonGroup,
  Drawer,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
//import UncontrolledLottie from '../components/UncontrolledLottie';

const Index = () => {
  return(
  <div id="Website">
    <Sidebar />
      <Box bg={useColorModeValue("blue.100", "gray.900")} h={window.innerHeight} w="85vw" right="0" position="fixed" className="Background" 
      px={["20px", "20px", "40px", "80px"]} py="4%">
        <VStack w="100%" h="100%" spacing="0px">
        <Text as="b" fontSize={[30, 30, 60, 80]} w="100%" fontFamily="Lexend Deca" mb="20px">
        Hello, I'm Andrew Deick!
        </Text>
        <Text fontSize={[25, 25, 40, 40]} fontFamily="Lexend Deca">
          I am a Software Engineer at Iowa State, and love learning new skills. Currently, my interests are in Virtual Reality, 
          Front-End Development, and Machine Learning. Check out <Link href='./favorites'><a><Text as="u" color={useColorModeValue("green.500", "green.300")}>Favorites</Text></a></Link> for more!
        </Text>
        <Flex mt="20px" w="100%" bg={useColorModeValue("blue.100", "gray.900")} justifyContent="center" alignItems="center" position="absolute" bottom="0" pb="30px">
        {useBreakpointValue({md: 
        <>
        <Button as="a" href="https://github.com/adeick" target="_blank" mx="10px"colorScheme="purple" variant="solid" fontSize="20px" leftIcon={<FiGithub />}>
          GitHub
        </Button>
        <Link href="./resume">
        <Button as="a" mx="10px" colorScheme="teal" variant="solid" fontSize="20px" leftIcon={<RiPagesLine />}>
          Resume
        </Button>
        </Link>
        <Button as="a" href="https://www.linkedin.com/in/adeick/" target="_blank" mx="10px" colorScheme="twitter" variant="solid" fontSize="20px" leftIcon={<FiLinkedin />}>
          LinkedIn
        </Button>
        <Button as="a" href="mailto:adeick@iastate.edu" target="_blank" mx="10px" colorScheme="red" variant="solid" fontSize="20px" leftIcon={<FiMail />}>
          Email
        </Button>
        </>
        , base:
        <>
        <IconButton href="https://github.com/adeick" target="_blank" as="a" colorScheme="purple" mx="10px" variant="solid" fontSize="20px" icon={<FiGithub />} aria-label="GitHub"/>
        <Link href="./resume"><IconButton as="a" colorScheme="teal" mx="10px" variant="solid" fontSize="20px" icon={<RiPagesLine/>} aria-label="Resume"/></Link>
        <IconButton href="https://www.linkedin.com/in/adeick/" target="_blank" as="a" colorScheme="twitter" mx="10px" variant="solid" fontSize="20px" icon={<FiLinkedin/>} aria-label="LinkedIn"/>
        <IconButton href="mailto:adeick@iastate.edu" target="_blank" as="a" colorScheme="red" mx="10px" variant="solid" fontSize="20px" icon={<FiMail/>} aria-label="Email"/>
        </>})}
        </Flex>
        </VStack>
      </Box>
  </div>
)};

export default Index;
