import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { RiPagesLine } from 'react-icons/ri';
import { ArrowBackIcon } from '@chakra-ui/icons';


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
    Spacer,
    useBreakpointValue,
    Stack,
    Center,
    AspectRatio,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import Footer from '../../src/components/Footer';
import Sidebar from '../../src/components/Sidebar';
// import UncontrolledLottie from '../components/UncontrolledLottie';

const Lasagna = () => {
    return (
        <div id="Website">
            <Sidebar />
            <Flex
                bg={useColorModeValue('blue.100', 'gray.900')}
                minHeight="150vh"
                w="85vw"
                right="0"
                position="absolute"
                className="Background"
                pt="4%"
                flexDirection="column"
                backgroundImage={useColorModeValue(
                    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cg fill='%234072fb' fill-opacity='0.09'%3E%3Cpath fill-rule='evenodd' d='M29.42 29.41c.36-.36.58-.85.58-1.4V0h-4v26H0v4h28c.55 0 1.05-.22 1.41-.58h.01zm0 29.18c.36.36.58.86.58 1.4V88h-4V62H0v-4h28c.56 0 1.05.22 1.41.58zm29.16 0c-.36.36-.58.85-.58 1.4V88h4V62h26v-4H60c-.55 0-1.05.22-1.41.58h-.01zM62 26V0h-4v28c0 .55.22 1.05.58 1.41.37.37.86.59 1.41.59H88v-4H62zM18 36c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm16-26a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 58a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 78a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zM34 4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm-8 82a2 2 0 1 1 4 0v2h-4v-2zm0-68a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V18zM66 4a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm0 72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm-48 0a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm0-72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm24-4h4v2a2 2 0 1 1-4 0V0zm0 60a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V60zm14-24c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm-28-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM36 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 68a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-34a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-12a2 2 0 1 0 0 4 6 6 0 1 1 0 12 2 2 0 1 0 0 4 10 10 0 1 0 0-20zm-64 0a2 2 0 1 1 0 4 6 6 0 1 0 0 12 2 2 0 1 1 0 4 10 10 0 1 1 0-20zm56-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-48 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm24 32a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm36-36a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 44c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm56 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm8 24c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zM3 68c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm0-48c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm71 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm6 66a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 86a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-68A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm36 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E")`,
                    `url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23151313' fill-opacity='0.35' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                )}
            >
                <VStack>
                    <Flex
                        w="100%"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        px={['20px', '20px', '40px', '80px']}
                        pt="4%"
                    >
                        <Text
                            as="b"
                            fontSize={[25, 25, 30, 60]}
                            textAlign="center"
                            fontFamily="Lexend Deca"
                            mb="20px"
                        >
                            Lasagna
                        </Text>
                        <Text
                            fontSize={[18, 18, 20, 20]}
                            as="i"
                            pl="30px"
                            textAlign="center"
                            fontFamily="Newsreader"
                        >
                            Makes two pans of delicious lasagna
                        </Text>
                    </Flex>
                    <VStack w="100%" h="100%" maxW="750px" spacing="30px">
                        <Text
                            fontSize={[15, 15, 15, 20]}
                            textAlign="left"
                            fontFamily="Lexend Deca"
                            w="100%"
                        >
                            Before we get started...
                        </Text>

                        {/* Quick Reference */}
                        <Box
                            bg={useColorModeValue('blue.200', 'gray.700')}
                            borderRadius="10px"
                            my="30px"
                            border="3px solid"
                            w="100%"
                        >
                            <Accordion allowToggle w="100%" defaultIndex={null}>
                                <AccordionItem border="0">
                                    <AccordionButton
                                        borderRadius="10px 10px 0 0"
                                        _focus={{ border: '0px' }}
                                    >
                                        <Flex alignItems="center">
                                            <Text
                                                as="b"
                                                fontSize={[25, 25, 30, 40]}
                                                textAlign="left"
                                                fontFamily="Lexend Deca"
                                                w="100%"
                                            >
                                                Quick Reference
                                            </Text>
                                        </Flex>
                                        <Spacer />
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel
                                        borderRadius="0 0 10px 10px"
                                        py="5px"
                                    >
                                        <Flex w="100%" wrap="wrap">
                                            <Text
                                                fontSize={[18, 18, 20, 20]}
                                                pl="30px"
                                                fontFamily="Newsreader"
                                            >
                                                - Oven to 375°F, cook for 50-60 min (then remove tin foil and cook for another 5 min to melt cheese)
                                                <br />
                                                - Two/Three hours total to make
                                            </Text>
                                        </Flex>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>

                        {/* Ingredients Box */}
                        <Flex
                            bg={useColorModeValue('blue.200', 'gray.700')}
                            borderRadius="10px"
                            my="30px"
                            border="3px solid"
                            w="100%"
                            py="5px"
                            alignItems="center"
                            px="10px"
                        >
                            <VStack>
                                <Text
                                    as="b"
                                    fontSize={[25, 25, 30, 40]}
                                    textAlign="left"
                                    fontFamily="Lexend Deca"
                                    w="100%"
                                >
                                    Ingredients
                                </Text>
                                <Text
                                    fontSize={[18, 18, 20, 20]}
                                    pl="30px"
                                    fontFamily="Newsreader"
                                >
                                    - 2 boxes of 9 oz no-boil lasagna noodles
                                    <br />
                                    - 4 eggs
                                    <br />
                                    - 2 containers of 15 oz ricotta cheese
                                    <br />
                                    - 32 oz / 2 lbs of mozzarella cheese (well, slightly less)
                                    <br />
                                    - 2 lbs of browned ground beef / italian sausage (tip: use 1 lb each)
                                    <br />
                                    - 3 or 4 jars of 24 oz spaghetti/pasta sauce
                                </Text>
                            </VStack>
                        </Flex>

                        {/* Step 1 */}
                        <Flex
                            bg={useColorModeValue('blue.200', 'gray.700')}
                            borderRadius="10px"
                            my="30px"
                            border="3px solid"
                            w="100%"
                            py="5px"
                            alignItems="center"
                            px="10px"
                        >
                            <VStack>
                                <Text
                                    as="b"
                                    fontSize={[25, 25, 30, 40]}
                                    textAlign="left"
                                    fontFamily="Lexend Deca"
                                    w="100%"
                                >
                                    Step 1: Get the Cheese!
                                </Text>
                                <Text
                                    fontSize={[18, 18, 20, 20]}
                                    pl="30px"
                                    fontFamily="Newsreader"
                                >
                                    Shred all of your mozarella. Split it into two bowls. In one bowl (the bigger one),
                                    we will make the ricotta mixture by adding all of the eggs and the ricotta. Mix it very well.
                                </Text>
                            </VStack>
                        </Flex>

                        {/* Step 2 */}
                        <Flex
                            bg={useColorModeValue('blue.200', 'gray.700')}
                            borderRadius="10px"
                            my="30px"
                            border="3px solid"
                            w="100%"
                            py="5px"
                            alignItems="center"
                            px="10px"
                        >
                            <VStack>
                                <Text
                                    as="b"
                                    fontSize={[25, 25, 30, 40]}
                                    textAlign="left"
                                    fontFamily="Lexend Deca"
                                    w="100%"
                                >
                                    Step 2: Cook the meat!
                                </Text>
                                <Text
                                    fontSize={[18, 18, 20, 20]}
                                    pl="30px"
                                    fontFamily="Newsreader"

                                >
                                    Simply brown the beef/sausage in a regular skillet. Drain the fat.
                                    <br />
                                </Text>
                            </VStack>
                        </Flex>

                        {/* Step 3 */}
                        <Flex
                            bg={useColorModeValue('blue.200', 'gray.700')}
                            borderRadius="10px"
                            my="30px"
                            border="3px solid"
                            w="100%"
                            py="5px"
                            alignItems="center"
                            px="10px"
                        >
                            <VStack>
                                <Text
                                    as="b"
                                    fontSize={[25, 25, 30, 40]}
                                    textAlign="left"
                                    fontFamily="Lexend Deca"
                                    w="100%"
                                >
                                    Step 3: The First Layer
                                </Text>
                                <Text
                                    fontSize={[18, 18, 20, 20]}
                                    pl="30px"
                                    fontFamily="Newsreader"

                                >
                                    - Spread one cup of sauce in the bottom of each pan. (About 1/3 jar).
                                    <br />
                                    - Overlap 4 uncooked lasagna noodles in the middle of the pan.
                                    <br />
                                    - Spread 1/3 of the ricotta mixture over the noodles in both pans.
                                    <br />
                                    - Add half the browned meat on top of the ricotta
                                    <br />
                                    - Add half the mozarella on top of the meat
                                    <br />
                                    - Another cup of sauce (1/3 jar)
                                </Text>
                            </VStack>
                        </Flex>

                        {/* Step 4 */}
                        <Flex
                            bg={useColorModeValue('blue.200', 'gray.700')}
                            borderRadius="10px"
                            my="30px"
                            border="3px solid"
                            w="100%"
                            py="5px"
                            alignItems="center"
                            px="10px"
                        >
                            <VStack>
                                <Text
                                    as="b"
                                    fontSize={[25, 25, 30, 40]}
                                    textAlign="left"
                                    fontFamily="Lexend Deca"
                                    w="100%"
                                >
                                    Step 4: The Second Layer
                                </Text>
                                <Text
                                    fontSize={[18, 18, 20, 20]}
                                    pl="30px"
                                    fontFamily="Newsreader"

                                >
                                    - Overlap 4 more uncooked lasagna noodles.
                                    <br />
                                    - Another 1/3 of the ricotta mixture (so half of what is left)
                                    <br />
                                    - Another cup of sauce (1/3 jar)
                                </Text>
                            </VStack>
                        </Flex>

                        {/* Step 5 */}
                        <Flex
                            bg={useColorModeValue('blue.200', 'gray.700')}
                            borderRadius="10px"
                            my="30px"
                            border="3px solid"
                            w="100%"
                            py="5px"
                            alignItems="center"
                            px="10px"
                        >
                            <VStack>
                                <Text
                                    as="b"
                                    fontSize={[25, 25, 30, 40]}
                                    textAlign="left"
                                    fontFamily="Lexend Deca"
                                    w="100%"
                                >
                                    Step 5: The Third Layer
                                </Text>
                                <Text
                                    fontSize={[18, 18, 20, 20]}
                                    pl="30px"
                                    fontFamily="Newsreader"

                                >
                                    - Overlap 4 uncooked lasagna noodles. (Might want to push them down a bit)
                                    <br />
                                    - Spread the rest of the ricotta mixture over the noodles
                                    <br />
                                    - Add the rest of the browned meat on top of the ricotta
                                    <br />
                                    - Another cup of sauce (1/3 jar)
                                </Text>
                            </VStack>
                        </Flex>

                        {/* Step 6 */}
                        <Flex
                            bg={useColorModeValue('blue.200', 'gray.700')}
                            borderRadius="10px"
                            my="30px"
                            border="3px solid"
                            w="100%"
                            pt="5px"
                            alignItems="center"

                        >
                            <VStack w="100%">
                                <Text
                                    as="b"
                                    fontSize={[25, 25, 30, 40]}
                                    textAlign="left"
                                    fontFamily="Lexend Deca"
                                    w="100%"
                                    px="10px"
                                >
                                    Step 6: The Final Layer
                                </Text>
                                <Text
                                    fontSize={[18, 18, 20, 20]}
                                    pl="30px"
                                    fontFamily="Newsreader"

                                >
                                    - Final 4 uncooked lasagna noodles (each pan)
                                    <br />
                                    - Add the rest of the sauce
                                    <br />
                                    - Add the rest of the mozarella
                                    <br />
                                    - Spray tin foil with cooking spray, cover and pop it in the oven for 50 min
                                    <br />
                                    <br />
                                    Enjoy!
                                </Text>
                            </VStack>
                        </Flex>

                        <Box w="100%">
                            <Link passHref href="../recipes">
                                <Button
                                    as="a"
                                    variant="ghost"
                                    leftIcon={<ArrowBackIcon />}
                                    ml="20px"
                                >
                                    Back to Recipes
                                </Button>
                            </Link>
                        </Box>
                    </VStack>
                </VStack>
                {/*
            <Box px={["20px", "20px", "40px", "80px"]}>
              <VStack w="100%" h="100%" spacing="0px">
              <Text as="b" fontSize={[30, 30, 50, 70]} w="100%" fontFamily="Lexend Deca" mb="20px">
                Chili
              </Text>
                <VStack w="100%">
                  <Text as="b" fontSize={[20, 20, 35, 50]} w="100%" fontFamily="Lexend Deca" mb="20px" pl="40px">
                      Ingredients
                  </Text>
                  <Text fontSize={[15, 15, 20, 20]} w="100%" pl="80px" fontFamily="Newsletter">
                  </Text>
                  
                </VStack>
              
              </VStack>
              </Box> */}
                <Spacer />
                <Footer text="Created By Andrew Deick" />
            </Flex>
        </div>
    )
};

export default Lasagna;
