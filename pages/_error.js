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


function CustomError({ statusCode }) {
    if(statusCode == 404){
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
    else{
        // return (
        // <figure>
        //     <img
        //     alt="Showing a properly cat according the status code"
        //     width="100%"
        //     src={`https://http.cat/${statusCode}`}
        //     />
        //     <figcaption>
        //     <h1>{statusCode}</h1>
        //     </figcaption>
        // </figure>
        // );
    }
    
  }
  
  function getInitialProps({ res, err }) {
    let statusCode;
    // If the res variable is defined it means nextjs
    // is in server side
    if (res) {
      statusCode = res.statusCode;
    } else if (err) {
      // if there is any error in the app it should
      // return the status code from here
      statusCode = err.statusCode;
    } else {
      // Something really bad/weird happen and status code
      // cannot be determined.
      statusCode = null;
    }
    return { statusCode };
  }
  
  CustomError.getInitialProps = getInitialProps;
  
  export default CustomError;