import React, { Component } from 'react';
import { Box, Stack, Icon, IconButton, Flex, Image, Text, Link } from '@chakra-ui/core';
import { MdPermIdentity } from "react-icons/md";
import { FiMap } from "react-icons/fi";
import GiraffeLottie from './GiraffeLottie';
import Sidebox from './Sidebox';



class Sidebar extends Component {
    
    render() {
      return (
        <Box bg="blue.400" h="100vh" w="15vw" left="0" position="fixed" display="inline-block" className="Background" zIndex={1}>

        <Box 
          className="GiraffeBox"
          padding="0px"
          margin="0px"
          w="15%"
          h="240px"
          left="0px"
          position="fixed"
          zIndex={99}
          >
          <GiraffeLottie />
        </Box>      
        <Box name="Sidebar"
          bg="blue.500"
          w="15%"
          h="75%"
          position="fixed"
          bottom="0"
          left="0"
          color="black"
          zIndex={70}
          padding="0px"
          margin="0px"
          display="inline-block"
          borderRadius="5px 50px 5px 5px"
        >
          <Stack spacing={300}>
            <Sidebox text="Home" icon="/images/vader2.png"
              fallback="https://listimg.pinclipart.com/picdir/s/141-1413807_darth-vader-icon-darth-vader-emoji-whatsapp-clipart.png"/>
            <a href="https://github.com/adeick" target="_blank">
              <Sidebox text="GitHub" />
            </a>  
            <Sidebox text="Resume" />
            <Sidebox text="Stuff I Like" />
          </Stack>
         {/* <Stack>
            <Icon name="phone" position="absolute" right="5" top="20%" size="25%" color="yellow.500" />
            <Icon name="bell" position="absolute" right="5" top="0" size="30%" color="yellow.500" />
         </Stack> */}
        {/* Would like to use the IconButtons below instead of Icons above */}
          {/* <Image
          h="25%"
          w="100%"
          src="/images/iowastate.jpg"
          alt="iowastate"
          objectFit="cover"
          zIndex={99}
           /> */}
           </Box>
        </Box>
      );
    }
  }

  export default Sidebar;