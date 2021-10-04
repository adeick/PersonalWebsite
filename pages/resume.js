import React from 'react';
import NextLink from 'next/link';
import Sidebar from '../src/components/Sidebar';
import Footer from '../src/components/Footer';
//import resume from '../public/ResumeFall2020.pdf'

import {
  Image,
  Box,
  Text,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';

const Resume = () => (
  <div id="Website" h="500%">
  <Sidebar />
  <Flex bg={useColorModeValue("blue.100", "gray.900")} justifyContent="center" flexDirection="column"
      w="85vw" right="0" position="absolute" className="Background" minHeight={window.innerHeight * 1.2}>
        
      <Text fontSize={[64, 64, 100, 128]} fontFamily="Lexend Deca" ml={["15px", "60px", "120px","250px"]}>
          Resume
      </Text>
      <Box bg={useColorModeValue("blue.100", "gray.900")} h="100%" w="100%" position="relative" display="inline-block" className="Background" px={["10px", "50px", "100px","200px"]}>
        
      <Image src="/images/ResumeFall2021-1.png" my={["10px", "20px", "50px", "50px"]}/>
      <Image src="/images/ResumeFall2021-2.png" my={["10px", "20px", "50px", "50px"]}/>
    </Box>
    <Footer text="Contact Me:"/>
    </Flex>
  </div>
);

export default Resume;
