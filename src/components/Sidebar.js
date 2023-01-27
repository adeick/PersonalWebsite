import React, { Component, useState, useEffect } from 'react';
import { Box, Stack, Icon, IconButton, Flex, Image, Text, useColorMode, useColorModeValue, } from '@chakra-ui/react';
// import { MdPermIdentity } from "react-icons/md";
// import { FiMap } from "react-icons/fi";
import Link from "next/link"
import GiraffeLottie from './GiraffeLottie';
import Sidebox from './Sidebox';



const Sidebar = (props) => {
  const [windowSize, setWindowSize] = useState(0);
  const NORMAL_MODE = true;

  useEffect(() => {
    setWindowSize(window.outerWidth);
    const resize = function () { setWindowSize(window.outerWidth) };
    window.addEventListener('resize', resize, false);
    return (() => {
      window.removeEventListener('resize', resize, false);
    });
  }, [windowSize]);



  return (
    <Box bg={useColorModeValue("blue.400", "gray.600")} h="100vh" w="15vw" left="0" p="0" position="fixed" display="inline-block" className="Background" zIndex={1}>


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
        {
          windowSize < 635 ?
            <Image src="/images/giraffe.png" alt="Giraffe" w="100%" position="relative" top="8%" />
            :
            <GiraffeLottie />
        }
      </Box>
      <Box
        name="Sidebar"
        bg={useColorModeValue("blue.500", "red.600")}
        w="15vw"
        h="75%"
        position="fixed"
        bottom="0"
        left="0"
        color="black"
        zIndex={70}
        padding="0px"
        margin="0px"
        display="inline-block"
        borderRadius="0 10px 5px 0"
      >
        {NORMAL_MODE ? // Regular Mode vs Interviewing Mode 
          (
            <>
              <Stack spacing={30} position='relative' height='100%' shouldWrapChildren>
                <Link href='/'>
                  <a>
                    <Sidebox text="Home" icon={useColorModeValue("/images/mandalorian.png", "/images/vader2.png")} />
                  </a>

                </Link>
                <Link href="/favorites">
                  <a>
                    <Sidebox text="Favorites" icon="/images/testtube.png" />
                  </a>

                </Link>
                <Link href="/blog">
                  <a>
                    <Sidebox text="Blog" icon="/images/pencil.png" />
                  </a>

                </Link>
                <Sidebox isDisabled text="Locked" icon="/images/lock.png" />
              </Stack>
            </>
          )
          : (
            <>
              <Stack spacing={30} position='relative' height='100%' shouldWrapChildren>
                <Link href='/'>
                  <a>
                    <Sidebox text="Home" icon={useColorModeValue("/images/mandalorian.png", "/images/vader2.png")} />
                  </a>
                </Link>
                <Sidebox text="GitHub" as="a" href="https://github.com/adeick" target="_blank" icon="/images/purplecat.png" />
                <Link href='../resume'>
                  <a>
                    <Sidebox text="Resume" icon="/images/clipboard.png" />
                  </a>

                </Link>
                <Link href="../favorites">
                  <a>
                    <Sidebox text="Favorites" icon="/images/testtube.png" />
                  </a>

                </Link>
              </Stack>
            </>
          )}
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

export default Sidebar;