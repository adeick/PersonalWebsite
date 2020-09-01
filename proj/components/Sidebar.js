import React, { Component } from 'react';
import { Box, Stack, Icon, IconButton, Flex } from '@chakra-ui/core';
import { MdPermIdentity } from "react-icons/md";
import { FiMap } from "react-icons/fi";



class Sidebar extends Component {
    
    render() {
      return (
        <Flex 
          border="1px solid #E8EAED"
          boxshadow="0 2px 4px rgba(0,0,0,0.3)"
          bg="#FF6347"
          w="9%"
          h="100%"
          position="absolute"
          top="50%"
          left="0"
          transform="translate(-50%, -50%)"
          p={4}
          color="black"
          zIndex={98}
          padding="20px"
        >
         {/* <Stack>
            <Icon name="phone" position="absolute" right="5" top="20%" size="25%" color="yellow.500" />
            <Icon name="bell" position="absolute" right="5" top="0" size="30%" color="yellow.500" />
         </Stack> */}
        {/* Would like to use the IconButtons below instead of Icons above */}
          
          <IconButton
            variant="solid"
            variantColor="gray"
            aria-label="Profile"
            fontSize="30px"
            icon={MdPermIdentity}
            size="lg"
            right="10px"
            top="80px"
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
        </Flex>
      );
    }
  }

  export default Sidebar;