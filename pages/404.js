import React from 'react';
import NextLink from 'next/link';
import Sidebar from '../components/Sidebar';
import SideMenu from '../components/sidemenu';
import AstronautLottie from '../components/AstronautLottie';


import {
  Image,
  Box,
  Flex,
  Stack,
  Text
} from '@chakra-ui/core';

function Custom404() {
        return(
        <Flex bg="blue.900" h="100vh" w="100%" alignContent="center" justifyContent="center" p="0" m="0">
          <Stack shouldWrapChildren align="center">
            <AstronautLottie display="block"/>
            <Text color="white" fontSize={[60, 60, 80, 80]} fontFamily="Lexend Deca" display="block">
                You look lost.
            </Text>
            <a href="/">
              <Text as="u" color="blue.600" fontSize={[20, 20, 40, 40]} fontFamily="Lexend Deca" display="block">
                  Take me back home
              </Text>  
            </a>
          </Stack>
            
        </Flex>
        );
  }
  
  export default Custom404;