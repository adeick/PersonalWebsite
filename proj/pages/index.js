import React from 'react';
import NextLink from 'next/link';
import Sidebar from '../components/Sidebar';
import SideMenu from '../components/sidemenu';

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
//import UncontrolledLottie from '../components/UncontrolledLottie';

const Index = () => (
  <div id="Website">
    <title>Andrew's Website</title>
    <Sidebar />
      <Box bg="blue.200" h="100vh" w="85vw" right="0" position="fixed" display="inline-block" className="Background" padding="200px">
        <Text fontSize={128} fontFamily="Lexend Deca">
          Home
        </Text>
      </Box>
  </div>
);

export default Index;
