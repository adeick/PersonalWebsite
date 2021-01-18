import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Sidebar from '../src/components/Sidebar';
import fire from '../src/config/fire-conf';
import Link from 'next/link';

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

const Index = () => {

  return(
  <div id="Website">
    <Head>
      <title>adeick.com - Home of... Well a Few Things</title>
    {/* <title>ADEICK.com A Dedicated Experiment to Imitate Cookie Klicker</title> */}
    </Head>
    <Sidebar />
      <Box bg={useColorModeValue("blue.100", "gray.900")} h="100vh" w="85vw" right="0" position="fixed" display="inline-block" className="Background" 
      px={["20px", "20px", "40px", "80px"]} py="6%">
        <Text as="b" fontSize={[30, 30, 60, 80]} fontFamily="Lexend Deca" mb="30px">
        Hello, I'm Andrew Deick!
        </Text>
        <Text fontSize={[25, 25, 40, 40]} fontFamily="Lexend Deca">
          <br /> 
          I am a Software Engineer at Iowa State, and love learning new skills. Currently, my interests are in Virtual Reality, 
          Front-End Development, and Machine Learning. Check out <Link href='./favorites'><a><Text as="u" _hover={{as: "b"}} color={useColorModeValue("green.500", "green.300")}>Favorites</Text></a></Link> for more!
        </Text>
      </Box>
  </div>
)};

export default Index;
