import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Sidebar from '../src/components/Sidebar';
import FavoritesBox from '../src/components/FavoritesBox';
import BB8Lottie from '../src/components/BB8Lottie';
import ArrowLottie from '../src/components/ArrowLottie';
import StarLottie from '../src/components/StarLottie';
import { Field, Form, Formik } from 'formik';


import { useSelector, useDispatch } from 'react-redux';
import { setUsername, incrementRedux, unlockStone, incrementStarWars } from "../store/misc/action";

import { FaEmpire, FaJediOrder } from "react-icons/fa";

import { Box, Flex, Text, Button, VStack, HStack, Stack, Spacer, Image, SlideFade, Portal, Tooltip, Kbd,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  useColorMode, useColorModeValue,
  useDisclosure, Collapse,
  //Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  useBreakpointValue, useToast,
  Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, PopoverHeader, PopoverFooter,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  FormControl, FormLabel, FormErrorMessage, Input,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import NavigationDrawer from '../src/components/NavigationDrawer';
const useFavorites = () => {
    const username = useSelector((state) => state.misc.username);
    const reduxClicks = useSelector((state) => state.misc.reduxClicks);
    const stones = useSelector((state) => state.misc.stones);
    const starWarsLevel = useSelector((state) => state.misc.starWarsLevel);
    return { username, reduxClicks, stones, starWarsLevel };
}
const Favorites = () => {
  const { username, reduxClicks, stones, starWarsLevel } = useFavorites();
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();  
  const [isHoveringStar, setHoveringStar] = useState("false");
  const navDrawer = useDisclosure();
  const starWarsModal = useDisclosure();
  const marvelSlide = useDisclosure();
  const formikModal = useDisclosure();
  const unityModal = useDisclosure();
  const formikRef = React.useRef();
  const unityRef = React.useRef();
  const toast = useToast();
  const getAccordionIndex = (hash) => {
    switch(hash){
      case "#starwars": 
      case "#marvel":
      case "#xkcd":
        return 0;
      case "#lottie":
      case "#chakra": 
      case "#next":
      case "#redux":
      case "#formik":
      case "#unity":
      case "#rocketboost":
        return 1;
      case "#space":
      case "#vr":
      case "#pranks":
      case "#frisbee":
        return 2;
      default:
        return null;
    }
  }
  const accordionInitialIndex = getAccordionIndex(window.location.hash);
  useEffect(() => {
    if(window.location.hash == "#rocketboost"){
      unityModal.onOpen();
      setTimeout(() => {
        if(document.getElementById("rocketBoost")){
          document.getElementById("rocketBoost").contentWindow.focus();
        }
      }, 3000)
    }
  }, [])

  return(
    <div id="Website">
      <Box w="200vw" h="100%" position="fixed" zIndex={-1} bg={useColorModeValue("blue.100", "gray.900")}/>
      <Sidebar />
      <Box bg={useColorModeValue("blue.100", "gray.900")} 
      backgroundImage={
        useColorModeValue(
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cg fill='%234072fb' fill-opacity='0.09'%3E%3Cpath fill-rule='evenodd' d='M29.42 29.41c.36-.36.58-.85.58-1.4V0h-4v26H0v4h28c.55 0 1.05-.22 1.41-.58h.01zm0 29.18c.36.36.58.86.58 1.4V88h-4V62H0v-4h28c.56 0 1.05.22 1.41.58zm29.16 0c-.36.36-.58.85-.58 1.4V88h4V62h26v-4H60c-.55 0-1.05.22-1.41.58h-.01zM62 26V0h-4v28c0 .55.22 1.05.58 1.41.37.37.86.59 1.41.59H88v-4H62zM18 36c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm16-26a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 58a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 78a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zM34 4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm-8 82a2 2 0 1 1 4 0v2h-4v-2zm0-68a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V18zM66 4a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm0 72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm-48 0a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm0-72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm24-4h4v2a2 2 0 1 1-4 0V0zm0 60a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V60zm14-24c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm-28-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM36 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 68a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-34a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-12a2 2 0 1 0 0 4 6 6 0 1 1 0 12 2 2 0 1 0 0 4 10 10 0 1 0 0-20zm-64 0a2 2 0 1 1 0 4 6 6 0 1 0 0 12 2 2 0 1 1 0 4 10 10 0 1 1 0-20zm56-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-48 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm24 32a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm36-36a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 44c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm56 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm8 24c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zM3 68c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm0-48c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm71 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm6 66a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 86a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-68A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm36 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E")`,
        `url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23151313' fill-opacity='0.35' fill-rule='evenodd'/%3E%3C/svg%3E")`
        )}
        w="calc(85vw + var(--scrollbar-width))" right="0px" position="absolute" display="inline-block" className="Background" pt="6%" textAlign={["center", "center", "left", "left"]}>
        <Text as="b" fontSize={["30px", "50px", "60px", "80px"]} fontFamily="Lexend Deca" mb="10px" mx={["20px", "20px", "40px", "80px"]}>
        Things I Like
        </Text>

        <Flex padding="3%" h="100%" w="85vw" wrap="wrap" justifyContent="center">
          <Accordion allowToggle w="100%" defaultIndex={[accordionInitialIndex]}>
{/* Entertainment */}
            <AccordionItem mb="20px">
              <AccordionButton borderY="4px solid">
                <Box flex="1" textAlign="center" id="entertainment">
                  <Text fontSize={["15px", "30px", "30px", "40px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]}>
                  Entertainment
                  </Text>  
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Flex pb={4} justifyContent="center" w="100%" wrap="wrap">
{/* Star Wars */}
                <FavoritesBox hash="#starwars" start="entertainment"  src="/images/starwars.jpg" alt="Star Wars">
                <VStack>
                    <Text fontSize={["13px", "15px", "20px", "22px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]} align="left">
                      Star Wars is the tale of an epic journey through an enormous galaxy. Plus lightsabers. What more could you ask for?
                    </Text>

                    <Stack direction={["column", "row"]} spacing={["12px", "24px"]}>
                      <Button as="a" href="https://www.starwars.com/databank" target="_blank">
                        Star Wars Databank
                      </Button>
                      <Button rightIcon={<ArrowForwardIcon />} bg={useColorModeValue("green.300","red.700")} onClick={() => {
                        starWarsModal.onOpen();
                        if(starWarsLevel % 2 == 1){
                          dispatch(incrementStarWars(starWarsLevel));
                        }
                      }}
                      _hover={{bg: useColorModeValue("green.400", "red.800")}} _active={{bg: useColorModeValue("green.500", "red.900"), transform: "scale(0.98)"}}>
                         {starWarsLevel > 0 ? "Resume My Journey" : "Begin My Journey"}
                      </Button>

                      <Modal isOpen={starWarsModal.isOpen} onClose={starWarsModal.onClose}>
                        <ModalOverlay />
                        <ModalContent> 
                          <ModalHeader>
                            {colorMode === "light" ?
                            <HStack>
                            <FaJediOrder/> 
                            <Text>
                            {starWarsLevel > 0 ? "Jedi Knight" : "Jedi Padawan"}
                            </Text>
                            </HStack>
                            :
                                      //"https://static.wikia.nocookie.net/starwars/images/a/ac/Republic_Emblem_%28unification_wars%29.svg/revision/latest?cb=20080311202138" 
                            <HStack>
                            <FaEmpire/>
                            <Text as="b" color="red.800" fontSize="30px">
                              {starWarsLevel > 0 ? "Sith Lord" : "Sith Apprentice"}
                            </Text>
                            </HStack>
                            }
                          </ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Text as="i">
                            Do or do not. There is no try. 
                            </Text>
                            <br/><br/>
                           {starWarsLevel < 2 ? "Mission: Find a Spacecraft. " :
                            starWarsLevel < 4 ? "Mission: Sample Midichlorians." :
                            "Mission: Create a Legacy."
                            }                        
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                    </Stack>

                  </VStack>
                </FavoritesBox>
{/* Marvel */}
                <FavoritesBox hash="#marvel" start="entertainment"  src="/images/marvel.jpg" alt="Marvel">
                  <VStack>
                    <Text fontSize={["13px", "15px", "20px", "20px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]} align="left">
                        Marvel was on its' last legs when it created 2008's Iron Man. Since then, it has exploded back, creating a total of 23 movies in the 'Marvel Cinematic Universe'.
                    </Text>
                    <HStack>                    
                    <Popover direction="top" closeOnBlur={true}>
                    {({ isOpen, onClose }) => (
                      <>
                      <PopoverTrigger>
                        <Button rounded="full" h="6em" w="6em" p="0"  _active={{transform: "scale(0.9)"}} onClick={marvelSlide.onToggle}>
                          <Image rounded="full" w="6em" src="/images/gauntlet.png"  transform={isOpen ? "rotate(0deg)" : "rotate(30deg)"} _hover={{transform: "rotate(0deg)"}}/>
                        </Button>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverHeader h="62px" _hover={{h:"70px"}} display="flex" justifyContent="center"><Text as="b" fontFamily="Goldman" fontSize="30px" >Infinity Menu</Text></PopoverHeader>
                          <PopoverCloseButton />
                          <PopoverBody display="flex" justifyContent="center" p="0px">
                          <VStack w='100%' mx="0" px="0px" spacing="0px">
                          <Flex justifyContent="center" w="100%" h="42px" _hover={{zIndex:1, h:"50px", transform:"scale(1.07)", rounded:"md", border:"5px solid black", bg: (stones.reality?   "red.500":    "red.200")}}bg={stones.reality?   "red.500":    "red.100"}><HStack ><Text color="black" as={stones.reality?"b":null}>Reality Stone</Text><Text fontSize={stones.reality?16:12} color={stones.reality?"black":"gray.600"}>{stones.reality?"Found!":"Not Found"}</Text></HStack></Flex>
                          <Flex justifyContent="center" w="100%" h="42px" _hover={{zIndex:1, h:"50px", transform:"scale(1.07)", rounded:"md", border:"5px solid black", bg: (stones.space  ?  "blue.500":   "blue.200")}}bg={stones.space  ?  "blue.500":   "blue.100"}><HStack ><Text color="black" as={stones.space  ?"b":null}>  Space Stone</Text><Text fontSize={stones.space  ?16:12} color={stones.space  ?"black":"gray.600"}>{stones.space  ?"Found!":"Not Found"}</Text></HStack></Flex>
                          <Flex justifyContent="center" w="100%" h="42px" _hover={{zIndex:1, h:"50px", transform:"scale(1.07)", rounded:"md", border:"5px solid black", bg: (stones.time   ? "green.500":  "green.200")}}bg={stones.time   ? "green.500":  "green.100"}><HStack ><Text color="black" as={stones.time   ?"b":null}>   Time Stone</Text><Text fontSize={stones.time   ?16:12} color={stones.time   ?"black":"gray.600"}>{stones.time   ?"Found!":"Not Found"}</Text></HStack></Flex>
                          <Flex justifyContent="center" w="100%" h="42px" _hover={{zIndex:1, h:"50px", transform:"scale(1.07)", rounded:"md", border:"5px solid black", bg: (stones.soul   ?"orange.500": "orange.200")}}bg={stones.soul   ?"orange.500": "orange.100"}><HStack ><Text color="black" as={stones.soul   ?"b":null}>   Soul Stone</Text><Text fontSize={stones.soul   ?16:12} color={stones.soul   ?"black":"gray.600"}>{stones.soul   ?"Found!":"Not Found"}</Text></HStack></Flex>
                          <Flex justifyContent="center" w="100%" h="42px" _hover={{zIndex:1, h:"50px", transform:"scale(1.07)", rounded:"md", border:"5px solid black", bg: (stones.mind   ?"yellow.500": "yellow.200")}}bg={stones.mind   ?"yellow.500": "yellow.100"}><HStack ><Text color="black" as={stones.mind   ?"b":null}>   Mind Stone</Text><Text fontSize={stones.mind   ?16:12} color={stones.mind   ?"black":"gray.600"}>{stones.mind   ?"Found!":"Not Found"}</Text></HStack></Flex>
                          <Flex justifyContent="center" w="100%" h="42px" _hover={{zIndex:1, h:"50px", transform:"scale(1.07)", rounded:"md", border:"5px solid black", bg: (stones.power  ?"purple.500": "purple.200")}}bg={stones.power  ?"purple.500": "purple.100"}><HStack ><Text color="black" as={stones.power  ?"b":null}>  Power Stone</Text><Text fontSize={stones.power  ?16:12} color={stones.power  ?"black":"gray.600"}>{stones.power  ?"Found!":"Not Found"}</Text></HStack></Flex>
                          </VStack> 
                          </PopoverBody>
                          <PopoverFooter h="57px" _hover={{h:"65px"}} justifyContent="center" display="flex">
                          <Button as="a" href="https://www.marvel.com/characters" target="_blank">
                              Marvel Characters
                          </Button>
                          </PopoverFooter>
                        </PopoverContent>
                      </Portal>
                      </>
                    )}
                    </Popover>
                    {/* <SlideFade in={marvelSlide.isOpen} style={{ zIndex: 50 }}>
                      <Box  
                        p="40px"
                        mx="30vw"
                        color="white"
                        mt="4"
                        bg="teal.500"
                        rounded="md"
                        shadow="md"
                        position="static"
                        w="35vw"
                        h="55vh"
                      >
                        Test
                      </Box>
                    </SlideFade>                     */}
                    </HStack>
                  </VStack>
                </FavoritesBox>
{/* XKCD */}
                <FavoritesBox hash="#xkcd" start="entertainment" src="/images/xkcd.png" alt="XKCD" h={[64,64,80,80]}>
                  <Stack direction={["column", "column", "row", "row"]} spacing={0} alignItems="center">  
                    <Text fontSize={["10px", "11px", "16px", "18px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "20px", "40px"]} align="center" w={["80%", "80%", "40%", "40%"]}>
                      XKCD is an enormously addictive web comic strip. Don't get sucked in! 
                    </Text>
                  <VStack>
                    <Image src={useBreakpointValue({base: "/images/xkcd1.png", md:"/images/xkcd2.png"})} alt="Just some programming joke" w={["90%","75%","90%","95%"]}/>
                    <Button as="a" href="https://xkcd.com/1288/" target="_blank" colorScheme="purple">
                      Need More XKCD
                    </Button>
                  </VStack> 
                  </Stack>
                </FavoritesBox>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
{/* Technologies */}
            <AccordionItem mb="20px">
              <AccordionButton borderY="4px solid">
                <Box flex="1" textAlign="center" id="technologies">
                  <Text fontSize={["15px", "30px", "30px", "40px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]}>
                  Technologies
                  </Text>  
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Flex pb={4} justifyContent="center" w="100%" wrap="wrap">
{/* Lottie */}
                <FavoritesBox hash="#lottie" start="technologies" src="/images/lottie.webp" alt="Lottie">
                  <VStack>
                    <Text fontSize={["13px", "17px", "20px", "20px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]} align="left">
                      Lottie Files is the original home of Jerome the Giraffe and several of the other animations scattered around my website. Most Lotties are free, and quite easy to use. Highly recommend checking out their gallery!
                    </Text>
                    <Button pl="0" as="a" href="https://lottiefiles.com/popular" target="_blank" colorScheme="teal" leftIcon={<Box w="50px" play={isHoveringStar}><StarLottie/></Box>}
                    onMouseOver={() => setHoveringStar("true")}
                    onMouseLeave={() => setHoveringStar("false")}
                    >
                      Lottie Files
                    </Button>
                  </VStack>
                </FavoritesBox>
{/* Chakra */}
                <FavoritesBox hash="#chakra" start="technologies" src="/images/chakra.jpg" alt="Chakra">
                  <VStack>
                    <Text fontSize={["11px", "17px", "20px", "20px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]} align="left">
                      Chakra is a UI component library that makes Front-End development significantly easier. Its many features include responsive styles, aesthetically pleasing themes, and the ability to change color mode.
                    </Text>
                    <Stack direction={["column", "row"]} spacing={["6px", "24px"]}>
                      <Button as="a" href="https://chakra-ui.com/" target="_blank">
                        Chakra UI
                      </Button>
                      <Button onClick={toggleColorMode} colorScheme={useColorModeValue("red", "cyan")}>
                        {useColorModeValue("🍪 Dark Side", "🧙‍♂️ Light Side")}
                      </Button>
                    </Stack>
                  </VStack>
                </FavoritesBox>
{/* Next */}
                <FavoritesBox hash="#next" start="technologies" src="/images/next.svg" alt="Next">
                  <VStack>  
                    <Text fontSize={["11px", "17px", "20px", "20px"]} fontFamily="Lexend Deca" my={["4px","10px"]} mx={["20px", "20px", "40px", "80px"]} align="left">
                      Next.JS is a Front-End framework that complements React. It uses Server-Side Rendering, and is easily deployed with Vercel. Additionally, it supports Page components, including pages with dynamic routes.
                    </Text>
                    <Stack direction={["column", "row"]} spacing={["6px", "24px"]}>
                    <Button as="a" href="https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website" target="_blank">
                      Next JS
                    </Button>

                    <Button colorScheme="blue" onClick={navDrawer.onOpen}>
                    🔍 View Pages
                    </Button>
                    <NavigationDrawer onClose={navDrawer.onClose} isOpen={navDrawer.isOpen}/>
                    </Stack>
                  </VStack>
                </FavoritesBox>
{/* Redux */}
                <FavoritesBox hash="#redux" start="technologies" src="/images/redux.png" alt="Redux">
                  <VStack>  
                    <Text fontSize={["13px", "17px", "21px", "25px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]} align="left">
                      Redux is a Frontend State Library that stores information in cookies, and can persist it across sections! 
                    </Text>
                    <Stack direction={["column", "row"]} spacing={["12px", "24px"]}>
                      <Button as="a" href="https://redux.js.org/" target="_blank">
                        Redux JS
                      </Button>
                      <Button colorScheme="purple" onClick={() => {
                        if(reduxClicks == 99){
                          dispatch(unlockStone("power"));
                          toast({
                            title: "Power Stone Unlocked!",
                            description: "You are stronger than any mortal man.",
                            status: "success",
                            duration: 3000,
                            isClosable: true,
                          })
                        }
                        dispatch(incrementRedux(reduxClicks));
                      }}>
                        {useBreakpointValue({base: `Number of Clicks: ${reduxClicks}`, md: `Number of Times you Have Clicked this Button: ${reduxClicks}`})}  
                      </Button>
                    </Stack>
                  </VStack>  
                </FavoritesBox>  
{/* Formik */}
                <FavoritesBox hash="#formik" start="technologies" src="/images/formik.png" alt="Formik">
                <VStack>  
                    <Text fontSize={["13px", "17px", "20px", "20px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]} align="left">
                      Formik is a nifty addition that makes capturing input in forms easy! The form information is saved with Redux.
                    </Text>
                    <Stack direction={["column", "row"]} spacing={["12px", "24px"]}>
                      <Button as="a" href="https://formik.org/docs/overview" target="_blank">
                        Formik
                      </Button>
                      <Button colorScheme="blue" onClick={formikModal.onOpen}>
                      ✏️ Change Name 
                      </Button>
                      <Modal isOpen={formikModal.isOpen} onClose={formikModal.onClose} initialFocusRef={formikRef}>
                        <ModalOverlay />
                        <ModalContent> 
                          <ModalHeader>
                            
                          </ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                          <Formik
                          initialValues={{ name: username }}
                          onSubmit={(values, actions) => {
                            setTimeout(() => {
                              // alert(JSON.stringify(values, null, 2))
                              dispatch(setUsername(values.name));
                              actions.setSubmitting(false);
                              formikModal.onClose();
                            }, 200)
                          }}
                        >
                          {(props) => (
                            <Form>
                              <Field name="name" validate={()=>{return ""}}>
                                {({ field, form }) => (
                                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor="name">Let us know your nickname here</FormLabel>
                                    <Input {...field} ref={formikRef} id="name" placeholder="Crazy Awesome, Super Duper Nickname" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                  </FormControl>
                                )}
                              </Field>
                              <Button
                                mt={4}
                                colorScheme="teal"
                                isLoading={props.isSubmitting}
                                type="submit"
                              >
                                Submit
                              </Button>
                            </Form>
                          )}
                        </Formik>
                          </ModalBody>
                          {/* <ModalFooter>
                            <Button onClick={formikModal.onClose} mr={3}>Cancel</Button>
                            <Button colorScheme="blue" >Save</Button>
                          </ModalFooter> */}
                        </ModalContent>
                       </Modal>
                    </Stack>
                  </VStack>
                </FavoritesBox>
{/* Unity */}
                <FavoritesBox hash="#unity" start="technologies"  src="/images/unity.jpg" alt="Unity">
                  <VStack>  
                    <Text fontSize={["12px", "17px", "20px", "20px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]} align="left">
                      Unity is a 3D-editing software that is often used in game development, movie settings, and my personal favorite, the creation of virtual environments. It is free to use and relatively easy to learn.
                    </Text>
                    <Stack direction={["column", "row"]} spacing={["12px", "24px"]}>
                    <Button as="a" href="https://unity.com/" target="_blank">
                      Unity
                    </Button>
                      <Button colorScheme="teal" isDisabled={useBreakpointValue({base: true, md: false})} onClick={() => {
                        unityModal.onOpen();
                        setTimeout(() => {
                          try{
                          document.getElementById("rocketBoost").contentWindow.focus();
                          }
                          catch {

                          }
                        }, 3000)
                      }}>
                          {useBreakpointValue({base: "💻 Required", md: "🚀 Play!"})}
                      </Button>
                    </Stack>
                    <Modal isOpen={unityModal.isOpen} onClose={unityModal.onClose} size="xl" initialFocusRef={unityRef}>
                        <ModalOverlay />
                        <ModalContent> 
                          <ModalHeader pt="2px" pb="0" mb="0">
                            <Text fontFamily="Audiowide" fontSize="40px">Rocket Boost 🚀</Text>
                          </ModalHeader>
                          <ModalCloseButton />
                          <ModalBody px="0" pt="0">
                            {unityModal.isOpen ? <iframe id="rocketBoost" src="https://i.simmer.io/@Darth_Vader/rocket-boost?skin=smg" width="576px" height="360px" onload="this.contentWindow.focus()" ref={unityRef}></iframe> : null}
                          </ModalBody>
                          <ModalFooter>
                            <Flex w="100%" justifyContent="center" m="0">
                            <Spacer/><Text>⮪ <Kbd>A</Kbd></Text> <Spacer/> <Text>🔥🔥 <Kbd>space</Kbd> 🔥🔥</Text> <Spacer/> <Text><Kbd>D</Kbd> ⮫</Text><Spacer/>
                            </Flex>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                  </VStack>  
                </FavoritesBox>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
{/* Interests */}
            <AccordionItem>
              <AccordionButton borderY="4px solid">
                <Box flex="1" textAlign="center" id="interests">
                  <Text fontSize={["15px", "30px", "30px", "40px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]}>
                  Interests
                  </Text>  
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Flex pb={4} justifyContent="center" w="100%" wrap="wrap">
                <FavoritesBox hash="#space" start="interests"  src="/images/space.jpeg" alt="Outer Space">
                  <VStack>
                    <Text fontSize={["11px", "17px", "20px", "20px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]} align="left">
                      Space, the final frontier. There are plans to create a moon base and to mine asteroids. How cool is that!
                    </Text>
                    <Stack direction={["column", "row"]} spacing={["6px", "24px"]}>
                      <Button as="a" href="https://www.spacex.com/human-spaceflight/" target="_blank">
                        SpaceX
                      </Button>
                      <Button isDisabled={starWarsLevel % 2 == 1} onClick={()=>{
                        if(starWarsLevel < 3 && starWarsLevel % 2 == 0)
                        {
                          dispatch(incrementStarWars(starWarsLevel));
                        }
                        //dispatch(unlockStone("space"));
                      }} colorScheme="blue">
                      {starWarsLevel == 0 ? "🛸 Build a Spaceship" :
                       starWarsLevel == 1 ? "Spaceship Built 🛸" :
                       starWarsLevel == 2 ? "👽 Explore the Unknown" :
                       starWarsLevel == 3 ? "Aliens Discovered 👽" : 
                       "Contemplate"   
                      }
                      </Button>
                    </Stack>
                  </VStack>
                </FavoritesBox>
                {/* <FavoritesBox href="https://scratch.mit.edu/" src="https://res.cloudinary.com/primer-cloudinary/image/upload/f_auto,q_auto/fo5kxbquaidutqbha6hz" alt="Scratch"/> */}
                <FavoritesBox hash="#vr" start="interests" src="/images/vr.jpg" alt="Virtual Reality">
                  <VStack>  
                    <Text fontSize={["12px", "17px", "20px", "20px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]} align="left">
                      With the introduction of the Oculus Rift in 2012, Virtual Reality stepped onto the modern stage. Today, Virtual Reality is used in a variety of ways, including video games, medical training, and exposure therapy.
                    </Text>
                    <Stack direction={["column", "row"]} spacing={["12px", "24px"]}>
                    <Button as="a" href="https://www.oculus.com/" target="_blank">
                      Oculus
                    </Button>
                    <Button as="a" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" colorScheme="teal">
                    🕶️ Virtual Reality
                    </Button>
                    </Stack>
                  </VStack>                      
                </FavoritesBox> 
                <FavoritesBox hash="#frisbee" start="interests" href="https://ultimatefrisbeehq.com/rules-of-ultimate/" src="/images/frisbee.png" alt="Ultimate Frisbee"/> 
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {
          colorMode === "dark" 
          ?
          <Image my={["4em","8em"]} w={["70%", "60%", "50%", "40%"]} src="/images/Death_Star.png" alt=""/>
          :
          <BB8Lottie/>
          }
        </Flex>
      </Box>
    </div>
  );
}

export default Favorites;
