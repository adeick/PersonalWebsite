import React from 'react';
import NextLink from 'next/link';
import Sidebar from '../components/Sidebar';
import FavoritesBox from '../components/FavoritesBox';


import { Box, Flex, Text, Center, Square, Circle } from "@chakra-ui/react"

const Favorites = () => (
  <div id="Website">
    <title>Andrew's Website</title>
    <Sidebar />
      <Box bg="blue.100" h="120vh" w="85vw" right="0" position="fixed" display="inline-block" className="Background" px={["20px", "20px", "40px", "80px"]} py="6%">
        <Text as="b" fontSize={["30px", "30px", "60px", "80px"]} fontFamily="Lexend Deca" mb="30px">
        Favorites
        </Text>

        <Flex padding="3%" h="100%" w="85vw" wrap="wrap">
          <FavoritesBox src="https://images.wallpapersden.com/image/download/star-wars-the-mandalorian-4k-minimalist_a21tbG2UmZqaraWkpJRnZWltrWdlaW0.jpg" alt="Star Wars" bg="black"/>
          <FavoritesBox src="https://3.bp.blogspot.com/-MZ2WEgcPcoo/WvFoyQSeLwI/AAAAAAAAF1I/8-nMb4EXoQQ6dugaq8j53SVoo_1ZX08GwCLcBGAs/s00/Thanos-With-Gauntlet-Infinity-Stones-02.jpg" alt="Marvel" bg="black"/>
          <FavoritesBox href="https://scratch.mit.edu/" src="https://www.logolynx.com/images/logolynx/0b/0bdbd10ab2fa7096299f7c78e1ac55f5.png" alt="Scratch" bg="black"/>
        </Flex>
      </Box>
  </div>
);

export default Favorites;
