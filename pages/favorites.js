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

const Favorites = () => (
  <div id="Website">
    <title>Andrew's Website</title>
    <Sidebar />
      <Box bg="blue.100" h="100vh" w="85vw" right="0" position="fixed" display="inline-block" className="Background" padding={["10px", "20px", "100px", "200px"]}>
        <Text fontSize={[64, 64, 100, 128]} fontFamily="Lexend Deca">
          Favorites
        </Text>

        <Text fontSize={[32,32,50,64]} fontFamily="Lexend Deca" color="gray.500">
          <br />
          Coming Soon!
        </Text>
      </Box>
  </div>
);

export default Favorites;
