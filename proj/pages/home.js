import React from 'react';
import { Image, Box, Heading } from '@chakra-ui/core';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';


const Home = () => (
  <>
    <Sidebar />
    <Box size="md" m="auto">
      <Heading>Welcome Home</Heading>
      <Image src="/images/logo_heads.png" alt="LoCampus" />
    </Box>
    <Map />
  </>
);

export default Home;
