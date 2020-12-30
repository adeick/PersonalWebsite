import React from 'react';
import NextLink from 'next/link';
import Sidebar from '../components/Sidebar';

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
  useColorModeValue,
} from '@chakra-ui/react';
//import UncontrolledLottie from '../components/UncontrolledLottie';

const Comics = () => (
  <div id="Website">
    <title>Andrew's Website</title>
    <Sidebar />
      <Box bg={useColorModeValue("blue.100", "gray.900")} h="100vh" w="85vw" right="0" position="fixed" display="inline-block" className="Background" padding={["50px", "50px", "100px", "200px"]}>
        <Text fontSize={[100, 100, 128, 128]} fontFamily="Lexend Deca">
          Comics
        </Text>
        <Text fontSize={30} fontFamily="Lexend Deca">
          You've Discovered the Hidden Page!
        </Text>
      </Box>
  </div>
);

export default Comics;