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
      <Box bg={useColorModeValue("blue.100", "gray.900")} 
      h={window.innerHeight} 
      w="85vw" right="0" position="absolute" className="Background" 
      backgroundImage={
        useColorModeValue(
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cg fill='%234072fb' fill-opacity='0.09'%3E%3Cpath fill-rule='evenodd' d='M29.42 29.41c.36-.36.58-.85.58-1.4V0h-4v26H0v4h28c.55 0 1.05-.22 1.41-.58h.01zm0 29.18c.36.36.58.86.58 1.4V88h-4V62H0v-4h28c.56 0 1.05.22 1.41.58zm29.16 0c-.36.36-.58.85-.58 1.4V88h4V62h26v-4H60c-.55 0-1.05.22-1.41.58h-.01zM62 26V0h-4v28c0 .55.22 1.05.58 1.41.37.37.86.59 1.41.59H88v-4H62zM18 36c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm16-26a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 58a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 78a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zM34 4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm-8 82a2 2 0 1 1 4 0v2h-4v-2zm0-68a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V18zM66 4a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm0 72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm-48 0a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm0-72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm24-4h4v2a2 2 0 1 1-4 0V0zm0 60a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V60zm14-24c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm-28-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM36 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 68a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-34a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-12a2 2 0 1 0 0 4 6 6 0 1 1 0 12 2 2 0 1 0 0 4 10 10 0 1 0 0-20zm-64 0a2 2 0 1 1 0 4 6 6 0 1 0 0 12 2 2 0 1 1 0 4 10 10 0 1 1 0-20zm56-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-48 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm24 32a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm36-36a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 44c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm56 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm8 24c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zM3 68c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm0-48c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm71 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm6 66a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 86a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-68A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm36 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E")`,
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23651700' fill-opacity='0.58'%3E%3Cpath fill-rule='evenodd' d='M41 37.59V25h-2v12.59l-8.9-8.9-1.41 1.41 8.9 8.9H25v2h12.59l-8.9 8.9 1.41 1.41 8.9-8.9V55h2V42.41l8.9 8.9 1.41-1.41-8.9-8.9H55v-2H42.41l8.9-8.9-1.41-1.41-8.9 8.9zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM5 1h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM5 5h70v70H5V5zm2 68h66V7H7v66zM9 9h62v62H9V9zm2 60h58V11H11v58zm2-39.6V13h16.4A29.1 29.1 0 0 0 13 29.4zM15 15v6.67A31.17 31.17 0 0 1 21.67 15H15zm-2 52V50.6A29.1 29.1 0 0 0 29.4 67H13zm2-8.67V65h6.67A31.17 31.17 0 0 1 15 58.33zM67 67H50.6A29.1 29.1 0 0 0 67 50.6V67zm-8.67-2H65v-6.67A31.17 31.17 0 0 1 58.33 65zM67 13v16.4A29.1 29.1 0 0 0 50.6 13H67zm-2 8.67V15h-6.67A31.17 31.17 0 0 1 65 21.67zM39 13h2v2h-2v-2zm7.02.66l1.93.52-.51 1.93-1.94-.52.52-1.93zm6.61 2.46l1.74 1-1 1.73-1.74-1 1-1.73zm5.75 4.08l1.42 1.42-1.42 1.4-1.4-1.4 1.4-1.42zm4.5 5.43l1 1.74-1.73 1-1-1.74 1.73-1zm2.94 6.42l.52 1.93-1.93.52-.52-1.94 1.93-.51zM67 39v2h-2v-2h2zm-.66 7.02l-.52 1.93-1.93-.51.52-1.94 1.93.52zm-2.46 6.61l-1 1.74-1.73-1 1-1.74 1.73 1zm-4.08 5.75l-1.42 1.42-1.4-1.42 1.4-1.4 1.42 1.4zm-5.43 4.5l-1.74 1-1-1.73 1.74-1 1 1.73zM41 67h-2v-2h2v2zm6.95-1.18l-1.93.52-.52-1.93 1.94-.52.51 1.93zm-13.97.52l-1.93-.52.51-1.93 1.94.52-.52 1.93zm-6.61-2.46l-1.74-1 1-1.73 1.74 1-1 1.73zm-5.75-4.08l-1.42-1.42 1.42-1.4 1.4 1.4-1.4 1.42zm-4.5-5.43l-1-1.74 1.73-1 1 1.74-1.73 1zm-2.94-6.42l-.52-1.93 1.93-.52.52 1.94-1.93.51zM13 41v-2h2v2h-2zm.66-7.02l.52-1.93 1.93.51-.52 1.94-1.93-.52zm2.46-6.61l1-1.74 1.73 1-1 1.74-1.73-1zm4.08-5.75l1.42-1.42 1.4 1.42-1.4 1.4-1.42-1.4zm5.43-4.5l1.74-1 1 1.73-1.74 1-1-1.73zm6.42-2.94l1.93-.52.52 1.93-1.94.52-.51-1.93zM40 63a23 23 0 1 1 0-46 23 23 0 0 1 0 46zm0-2a21 21 0 1 0 0-42 21 21 0 0 0 0 42zm0-2a19 19 0 1 1 0-38 19 19 0 0 1 0 38zm0-2a17 17 0 1 0 0-34 17 17 0 0 0 0 34z'/%3E%3C/g%3E%3C/svg%3E")`
        )}
      px={["20px", "20px", "40px", "80px"]} py="4%">
        <VStack w="100%" h="100%" spacing="0px">
        <Text as="b" fontSize={[30, 30, 60, 80]} w="100%" fontFamily="Lexend Deca" mb="20px">
        Hello, I'm Andrew Deick!
        </Text>
        <Text fontSize={[25, 25, 40, 40]} fontFamily="Newsreader">
          I am a Software Engineer at Iowa State, and enjoy learning new skills. Currently, my interests are in Virtual Reality, 
          Front-End Development, and Machine Learning. Check out <Link href='./favorites'><a><Text as="u" fontFamily="Lexend Deca" color={useColorModeValue("green.500", "green.300")}>Favorites</Text></a></Link> for more!
        </Text>
        <Flex mt="20px" w="100%" justifyContent="center" alignItems="center" position="absolute" bottom="0" pb="30px" visibility="hidden">
        {useBreakpointValue({md: 
        <>
        <Button as="a" href="https://github.com/adeick" target="_blank" mx="10px"colorScheme="purple" variant="solid" fontSize="20px" leftIcon={<FiGithub />} visibility="visible">
          GitHub
        </Button>
        <Link href="./resume">
        <Button as="a" mx="10px" colorScheme="teal" variant="solid" fontSize="20px" leftIcon={<RiPagesLine />} visibility="visible">
          Resume
        </Button>
        </Link>
        <Button as="a" href="https://www.linkedin.com/in/adeick/" target="_blank" mx="10px" colorScheme="twitter" variant="solid" fontSize="20px" leftIcon={<FiLinkedin />} visibility="visible">
          LinkedIn
        </Button>
        <Button as="a" href="mailto:adeick@iastate.edu" target="_blank" mx="10px" colorScheme="red" variant="solid" fontSize="20px" leftIcon={<FiMail />} visibility="visible">
          Email
        </Button>
        </>
        , base:
        <>
        <IconButton href="https://github.com/adeick" target="_blank" as="a" colorScheme="purple" mx="10px" variant="solid" fontSize="20px" icon={<FiGithub />} aria-label="GitHub" visibility="visible"/>
        <Link href="./resume"><IconButton as="a" colorScheme="teal" mx="10px" variant="solid" fontSize="20px" icon={<RiPagesLine/>} aria-label="Resume" visibility="visible"/></Link>
        <IconButton href="https://www.linkedin.com/in/adeick/" target="_blank" as="a" colorScheme="twitter" mx="10px" variant="solid" fontSize="20px" icon={<FiLinkedin/>} aria-label="LinkedIn" visibility="visible"/>
        <IconButton href="mailto:adeick@iastate.edu" target="_blank" as="a" colorScheme="red" mx="10px" variant="solid" fontSize="20px" icon={<FiMail/>} aria-label="Email" visibility="visible"/>
        </>})}
        </Flex>
        </VStack>
      </Box>
  </div>
)};

export default Index;
