import React, { useState, useEffect } from 'react';
import Sidebar from '../../src/components/Sidebar';
import Link from 'next/link';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { RiPagesLine } from 'react-icons/ri'

import {
  Image,
  Box,
  Flex,
  IconButton,
  Button,
  ButtonGroup,
  Drawer,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
  useBreakpointValue,
  Stack,
  Center,
} from '@chakra-ui/react';
//import UncontrolledLottie from '../components/UncontrolledLottie';

const IG = () => {
  return(
  <div id="Website">
    <Sidebar />
      <Box bg={useColorModeValue("blue.100", "gray.900")} h={window.innerHeight} w="85vw" right="0" position="fixed" className="Background" 
      px={["20px", "20px", "40px", "80px"]} py="4%">
        <VStack w="100%" h="100%" spacing="0px">
        <Text as="b" fontSize={[30, 30, 50, 70]} w="100%" fontFamily="Lexend Deca" mb="20px">
          IG-88, the Assassin Bot        
        </Text>
        <Stack direction={useBreakpointValue({base: "column", md:"row"})} p="0">
          {useBreakpointValue({md: <Image w={["50px", "50px", "150px", "150px"]} src="/images/ig88.png" alt=""/>, base: null})}

          <Text fontSize={[15, 15, 20, 20]} fontFamily="Lexend Deca">
            IG-88 is a spunky Discord bot with a fast processor and an even faster trigger finger. The only thing more accurate than his aim is his sarcasm, dispensed in heavy doses.
            Besides entertaining us, he has a number of useful abilities: generating random numbers, initiating polls, and saving information into his database of a brain. (SQLite) <br/><br/>
            Don't confuse him with IG-11.
          </Text>
          {useBreakpointValue({base: <Center><Image mt="30px" w={["130px", "200px", "200px", "200px"]} src="/images/ig88.png" alt=""/></Center>, md: null, lg: null, xl: null})}
        </Stack>
        
        </VStack>
      </Box>
  </div>
)};

export default IG;
