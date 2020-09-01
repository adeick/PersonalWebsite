import React, { Component } from 'react';
import { Box, Stack, Icon, IconButton, Flex, Image } from '@chakra-ui/core';
import { MdPermIdentity } from "react-icons/md";
import { FiMap } from "react-icons/fi";



class Sidebar extends Component {
    
    render() {
      return (
        <>
          
        <Box className="Sidebar"
          bg="#4299E1"
          w="20%"
          h="100%"
          position="absolute"
          top="50%"
          left="8%"
          p={4}
          color="black"
          zIndex={70}
          padding="0px"
          display="inline-block"
        >
         {/* <Stack>
            <Icon name="phone" position="absolute" right="5" top="20%" size="25%" color="yellow.500" />
            <Icon name="bell" position="absolute" right="5" top="0" size="30%" color="yellow.500" />
         </Stack> */}
        {/* Would like to use the IconButtons below instead of Icons above */}
          <Image
          h="25%"
          w="100%"
          src="/images/iowastate.jpg"
          alt="iowastate"
          objectFit="cover"
          zIndex={99}
           />
          <IconButton
            variant="solid"
            variantColor="gray"
            aria-label="Profile"
            fontSize="30px"
            icon={MdPermIdentity}
            size="lg"
            right="50%"
            top="20%"
            border-radius="0.95rem"
            position="absolute"
          />
          <IconButton
            variant="solid"
            variantColor="gray"
            aria-label="Profile"
            fontSize="30px"
            icon={FiMap}
            size="lg"
            right="10px"
            top="160px"
            border-radius="0.95rem"
            position="absolute"
          />
        </Box>
        </>
      );
    }
  }

  export default Sidebar;