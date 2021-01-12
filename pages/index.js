import React from 'react';
import NextLink from 'next/link';
import Sidebar from '../src/components/Sidebar';

import {
  Image,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  ButtonGroup,
  Drawer,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
//import UncontrolledLottie from '../components/UncontrolledLottie';

const Index = () => (
  <div id="Website">
    <title>Andrew's Website</title>
    <Sidebar />
      <Box bg={useColorModeValue("blue.100", "gray.900")} h="100vh" w="85vw" right="0" position="fixed" display="inline-block" className="Background" 
      px={["20px", "20px", "40px", "80px"]} py="6%">
        <Text as="b" fontSize={[30, 30, 60, 80]} fontFamily="Lexend Deca" mb="30px">
        Hello, I'm Andrew Deick!
        </Text>
        <Text fontSize={[25, 25, 40, 40]} fontFamily="Lexend Deca">
          <br /> 
          I am a Software Engineer at Iowa State, looking for a challenging
          internship where I can learn new skills. Currently, my interests are in Virtual Reality, 
          Front-End Development, and Machine Learning. 
        </Text>
      </Box>
  </div>
);

export default Index;
