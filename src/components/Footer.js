import React, { Component, useEffect } from 'react';
import { Image, Center, VStack, Button, Box, Square, Circle , Collapse, Flex, Text, Tooltip, useDisclosure, useColorModeValue, IconButton,
    Drawer, HStack,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useBreakpointValue,
} from "@chakra-ui/react";
import Link from 'next/link'


import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { CgFileDocument } from 'react-icons/cg'

const Footer = (props) => {

    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={useColorModeValue("#90CDF4", "black")} fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,96C384,128,480,192,576,186.7C672,181,768,107,864,90.7C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <Box w="100%" bg={useColorModeValue("#90CDF4", "black")} h={["140px", "140px", "80px", "50px"]}/>
        <Flex position="absolute" bottom="20px" width="100%" alignItems="center" flexDirection="column">
            <Text textAlign="center" fontFamily="Lexend Deca" mb="10px">
            {props.text}
            </Text>
            <HStack>
                        <IconButton size="sm"  target="_blank" as="a" mx="10px" variant={useColorModeValue("link","solid")} fontSize="20px" icon={<FiGithub />}href="https://github.com/adeick" aria-label="GitHub"/>
                        <IconButton size="sm"  target="_blank" as="a" mx="10px" variant={useColorModeValue("link","solid")} fontSize="20px" icon={<FiLinkedin/>} href="https://www.linkedin.com/in/adeick/"aria-label="LinkedIn"/>
                        <IconButton size="sm"  target="_blank" as="a" mx="10px" variant={useColorModeValue("link","solid")} fontSize="20px" icon={<FiMail/>} href="mailto:adeick@iastate.edu"aria-label="Email"/>
  <Link href="../resume"><IconButton size="sm"                 as="a"           variant={useColorModeValue("link","solid")} fontSize="20px" icon={<CgFileDocument/>} href="../resume" aria-label="Resume"/></Link>

            </HStack>
        </Flex>
        </>
    )
}

export default Footer;