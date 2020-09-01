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
  Drawer
} from '@chakra-ui/core';
import UncontrolledLottie from '../components/UncontrolledLottie';

const Index = () => (
  <div id="Website">
    <title>Andrew's Website</title>
    <SideMenu />
    <div id="page-wrap">
      <h1>Home</h1>
    </div>
    
    {/* <Box bg="blue.300" h="100vh" w="80vw" position="static" display="inline-block" className="Background">
      <h1>
        Home
      </h1>
    </Box> */}
  </div>
);

export default Index;
