import Head from 'next/head'
import Link from 'next/link'

import {
    Image,
    Box,
    Flex,
    Icon,
    IconButton,
    Button,
    ButtonGroup,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    HStack,
    useColorMode,
    useColorModeValue,
    VStack, Stack, Spacer,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';


import { HamburgerIcon } from '@chakra-ui/icons'
import { FaMoon, FaCloudSun, FaCloud, FaSun } from 'react-icons/fa';


const Prayed4 = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [windowSize, setWindowSize] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        setWindowSize(window.outerWidth);
        const resize = () => { setWindowSize(window.outerWidth) };
        window.addEventListener('resize', resize, false);
        return (() => {
            window.removeEventListener('resize', resize, false);
        });
    }, [windowSize]);

    const bgHeight = useBreakpointValue({ base: '144vh', md: '94vh' });
    const presetTextMargin = useBreakpointValue({ base: '1vh', md: "6vh" });
    const rowColumn = useBreakpointValue({ base: 'row', md: 'column' });
    const columnRow = useBreakpointValue({ base: 'column', md: 'row' });
    const smallMedium = useBreakpointValue({ base: 'sm', md: 'md' });
    const manualBoxHeight = useBreakpointValue({ base: '100vh', md: '50vh' });
    const trueFalse = useBreakpointValue({ base: true, md: false });

    const phone = windowSize < 768; // number should be adjusted

    let buttonStack;
    if (phone) {
        buttonStack = (
            <IconButton
                onClick={onOpen}
                icon={<HamburgerIcon />}
                mr="30px"
            />
        )
    }
    else {
        buttonStack = (
            <>
                <Link href="/prayed4">
                    <Button as="a" m="15px" variant="ghost">
                        Home
                    </Button>
                </Link>
                <Link href="/prayed4/aboutprayed4">
                    <Button as="a" m="15px">
                        What is Prayed4?
                    </Button>
                </Link>
                <Link href="/prayed4/aboutus">
                    <Button as="a" m="15px">
                        About Us
                    </Button>
                </Link>
                <Link href="/prayed4/contactus">
                    <Button as="a" ml="15px" mr="70px">
                        Contact
                    </Button>
                </Link>
            </>
        )
    }


    return (
        <div>
            <Flex bgColor="gray.500" w="100vw" h="80px" position="absolute" top="0px">
                <Flex
                    w="100%"
                    alignItems="center"
                >
                    <Image
                        mx="30px"
                        w="150px"
                        src="/images/prayed4.png"
                    />
                    <Spacer />
                    {buttonStack}
                </Flex>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader />
                    <DrawerBody>
                        <VStack>
                            <>
                                <Link href="/jeremy">
                                    <Button as="a">
                                        Home
                                    </Button>
                                </Link>
                                <Link href="/jeremy">
                                    <Button as="a">
                                        What is Prayed4?
                                    </Button>
                                </Link>
                                <Link href="/jeremy">
                                    <Button as="a">
                                        About Us
                                    </Button>
                                </Link>
                                <Link href="/jeremy">
                                    <Button as="a">
                                        Contact
                                    </Button>
                                </Link>
                            </>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter />
                </DrawerContent>

            </Drawer>
        </div>
    )
};

export default Prayed4;
