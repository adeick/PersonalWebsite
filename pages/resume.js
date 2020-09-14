import React from 'react';
import NextLink from 'next/link';
import Sidebar from '../components/Sidebar';
import { Document, Page } from 'react-pdf';
//import resume from '../public/ResumeFall2020.pdf'

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
  Text
} from '@chakra-ui/core';

const Resume = () => (
  <div id="Website" h="500%">
    <title>Andrew's Website</title>
    <Sidebar />
    <Box bg="blue.100" h="500%" w="85vw" left="15vw" position="relative" display="inline-block" className="Background" px={["10px", "50px", "100px","200px"]}>
      <Text fontSize={[64, 64, 100, 128]} fontFamily="Lexend Deca" ml={["20px", "20px", "50px", "100px"]}>
          Resume
      </Text>
      <Image src="/images/ResumeFall2020-1.png" my={["10px", "20px", "50px", "50px"]}/>
      <Image src="/images/ResumeFall2020-2.png"/>
    </Box>
  </div>
);

export default Resume;
