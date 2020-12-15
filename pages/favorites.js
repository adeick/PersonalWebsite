import React from 'react';
import NextLink from 'next/link';
import Sidebar from '../components/Sidebar';
import FavoritesBox from '../components/FavoritesBox';
import BB8Lottie from '../components/BB8Lottie';


import { Box, Flex, Text, Center, Square, Circle, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"

const Favorites = () => (
  <div id="Website">
    <title>Andrew's Website</title>
    <Sidebar />
    <Box bg="blue.100" w="88vw" right="-3vw" position="absolute" display="inline-block" className="Background" pt="6%" textAlign={["center", "center", "left", "left"]}>
      <Text as="b" fontSize={["30px", "50px", "60px", "80px"]} fontFamily="Lexend Deca" mb="10px" mx={["20px", "20px", "40px", "80px"]}>
      Things I Like
      </Text>

      <Flex padding="3%" h="100%" w="85vw" wrap="wrap" justifyContent="center">
        <Accordion allowToggle w="100%">
          <AccordionItem mb="20px">
            <AccordionButton borderY="4px solid">
              <Box flex="1" textAlign="center">
                <Text fontSize={["15px", "30px", "30px", "40px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]}>
                Entertainment
                </Text>  
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Flex pb={4} justifyContent="center" w="100%" wrap="wrap">
              <FavoritesBox href="https://www.starwars.com/databank" src="https://images.wallpapersden.com/image/download/star-wars-the-mandalorian-4k-minimalist_a21tbG2UmZqaraWkpJRnZWltrWdlaW0.jpg" alt="Star Wars"/>
              <FavoritesBox href="https://www.marvel.com/articles" src="https://3.bp.blogspot.com/-MZ2WEgcPcoo/WvFoyQSeLwI/AAAAAAAAF1I/8-nMb4EXoQQ6dugaq8j53SVoo_1ZX08GwCLcBGAs/s00/Thanos-With-Gauntlet-Infinity-Stones-02.jpg" alt="Marvel"/>
              <FavoritesBox href="https://xkcd.com/1288/" src="https://lh3.googleusercontent.com/Px91d1tMaIWKk11zl-DM-aTEYYvS9kBvUdzPT_zBS0AbmJzc6aLEueafEHLN-Gd199Jf_cSBUA=w640-h400-e365-rj-sc0x00ffffff" alt="XKCD"/>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb="20px">
            <AccordionButton borderY="4px solid">
              <Box flex="1" textAlign="center">
                <Text fontSize={["15px", "30px", "30px", "40px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]}>
                Technologies
                </Text>  
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Flex pb={4} justifyContent="center" w="100%" wrap="wrap">
              <FavoritesBox href="https://lottiefiles.com/popular" src="https://airbnb.io/lottie/images/logo.webp" alt="Lottie"/>
              <FavoritesBox href="https://chakra-ui.com/" src="https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg" alt="Chakra"/> 
              <FavoritesBox href="https://unity.com/" src="https://fadigeorge.files.wordpress.com/2010/02/unity_01.jpg" alt="Unity"/> 
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton borderY="4px solid">
              <Box flex="1" textAlign="center">
                <Text fontSize={["15px", "30px", "30px", "40px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]}>
                Interests
                </Text>  
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Flex pb={4} justifyContent="center" w="100%" wrap="wrap">
              <FavoritesBox href="https://www.spacex.com/human-spaceflight/" src="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/hcukymjitstff5zm_1590834618.jpeg?tr=w-812,h-464" alt="SpaceX"/>
              <FavoritesBox href="https://scratch.mit.edu/" src="https://res.cloudinary.com/primer-cloudinary/image/upload/f_auto,q_auto/fo5kxbquaidutqbha6hz" alt="Scratch"/> 
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <BB8Lottie/>
      </Flex>
    </Box>
  </div>
);

export default Favorites;
