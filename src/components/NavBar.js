import React, { Component, useState, useEffect } from 'react';
import {
    Image, Center, VStack, Button, Box, Square, Circle, Collapse, Flex, Text, Tooltip, useDisclosure, useColorModeValue, IconButton,
    Drawer, HStack,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useColorMode,
    useBreakpointValue,
    Spacer,
    Icon,
    useBoolean,
} from "@chakra-ui/react";
import Link from 'next/link'

import { MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { CgFileDocument } from 'react-icons/cg'
import { BsPersonBadgeFill } from 'react-icons/bs';



const NavBar = (props) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        setWindowSize(window.outerWidth);
        const resize = function () { setWindowSize(window.outerWidth) };
        window.addEventListener('resize', resize, false);
        return (() => {
            window.removeEventListener('resize', resize, false);
        });

    }, [windowSize]);

    const phone = windowSize < 480; // number should be adjusted


    const aboutMeButton = phone ? (
        <Button
            as={BsPersonBadgeFill}
            rightIcon={<Icon as={ChevronDownIcon} color="black" />}
        />
    )
        : (
            <Button
                rightIcon={<Icon as={ChevronDownIcon} color="black" />}
            >
                About Me
            </Button>
        );

    return (
        <Flex
            position="fixed"
            top="0px"
            width="100%"
            h="60px"
            bg={useColorModeValue("gray.400", "gray.800")}
            alignItems="center"
            flexDirection="column"
            zIndex={1}
        >
            <Text textAlign="center" fontFamily="Lexend Deca" mb="10px">
                {props.text}
            </Text>
            <Flex flexDirection="row" w="100%">
                <IconButton
                    // colorScheme={colorMode === "light" ? "gray" : "orange"}
                    bg={useColorModeValue("gray.700", "orange.300")}
                    _hover={{ bg: useColorModeValue("gray.600", "orange.400") }}
                    _active={{ bg: useColorModeValue("gray.500", "orange.500") }}
                    aria-label='Change Color Mode'
                    icon={colorMode === "light" ? <MoonIcon color="orange.300" /> : <SunIcon color="black" />}
                    onClick={toggleColorMode}
                    ml={["5vw", "10vw"]}
                    mr="10px"
                />
                <Spacer />
                {aboutMeButton}
                <Spacer />
                {/* <IconButton size="sm" target="_blank" as="a" mx="10px" variant={useColorModeValue("link", "solid")} fontSize="20px" icon={<FiGithub />} href="https://github.com/adeick" aria-label="GitHub" />
                <IconButton size="sm" target="_blank" as="a" mx="10px" variant={useColorModeValue("link", "solid")} fontSize="20px" icon={<FiLinkedin />} href="https://www.linkedin.com/in/adeick/" aria-label="LinkedIn" />
                <IconButton size="sm" target="_blank" as="a" mx="10px" variant={useColorModeValue("link", "solid")} fontSize="20px" icon={<FiMail />} href="mailto:adeick@iastate.edu" aria-label="Email" />
                <Link href="../resume"><IconButton size="sm" as="a" variant={useColorModeValue("link", "solid")} fontSize="20px" icon={<CgFileDocument />} href="../resume" aria-label="Resume" /></Link> */}

            </Flex>
        </Flex>
    )
}

export default NavBar;