import React, { Component } from 'react';
import { Box, Stack, Icon, IconButton, Flex, Image, Text, Link } from '@chakra-ui/core';
import { MdPermIdentity } from "react-icons/md";
import { FiMap } from "react-icons/fi";
import GiraffeLottie from './GiraffeLottie';
import Sidebox from './Sidebox';



class Sidebar extends Component {
    constructor(props){
      super(props);
      this.state = {
        windowSize: 0
      };
    }
    

    componentDidMount(){
      this.setState({windowSize: window.outerWidth});
      window.addEventListener('resize', () => this.setState({windowSize: window.outerWidth}));    
    }
  
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
          padding="10px"
          >
            {
            this.state.windowSize < 635 ? 
              <Image src="/images/giraffe.png" alt="Giraffe" w="100%" position="relative" top="8%"/>
            :       
              <GiraffeLottie />
            }
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
          <Stack spacing={30} position='relative' height='100%' shouldWrapChildren>
            <Sidebox text="Home" icon="/images/vader2.png" href='/'
              fallback="https://listimg.pinclipart.com/picdir/s/141-1413807_darth-vader-icon-darth-vader-emoji-whatsapp-clipart.png"/>
            
            <Sidebox text="GitHub" href="https://github.com/adeick" target="_blank" icon="/images/whitecat.png"/>

            <Sidebox text="Resume" href="./resume" icon="/images/clipboard.png"/>
            <Sidebox text="Favorites" href="./favorites" icon="/images/testtube.png"/>
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