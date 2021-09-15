import React from 'react';
import NextLink from 'next/link';
import Sidebar from '../src/components/Sidebar';
//import resume from '../public/ResumeFall2020.pdf'

import {
  Image,
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Resume = () => (
  <div id="Website" h="500%">
  <Sidebar />
    <Box bg={useColorModeValue("blue.100", "gray.900")} h="500%" w="85vw" left="15vw" position="relative" display="inline-block" className="Background" px={["10px", "50px", "100px","200px"]}>
      <Text fontSize={[64, 64, 100, 128]} fontFamily="Lexend Deca" ml={["20px", "20px", "50px", "100px"]}>
          Resume
      </Text>
      <Image src="/images/ResumeSummer2021.png" my={["10px", "20px", "50px", "50px"]}/>
    </Box>
  </div>
);

export default Resume;
