//https://medium.com/swlh/lets-create-blog-app-with-next-js-react-hooks-and-firebase-backend-tutorial-7ce6fd7bbb3a
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '../src/components/Sidebar';
import fire from '../src/config/fire-conf';

import {
  Image,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  ButtonGroup,
  Drawer,
  Text,
  useColorMode,
  useColorModeValue,
  HStack,
  VStack,
} from '@chakra-ui/react';
//import UncontrolledLottie from '../components/UncontrolledLottie';

const Firestore = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fire.firestore()
      .collection('blog')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogs);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fire.firestore()
      .collection('blog')
      .add({
        title: title,
        content: content,
      });
    setTitle('');
    setTimeout(() => {
    }, 2000)
  }

  return(
  <div id="Website">
    <title>Andrew's Website</title>
    <Sidebar />
      <Box bg={useColorModeValue("blue.100", "gray.900")} h="100vh" w="85vw" right="0" position="fixed" display="inline-block" className="Background" 
      px={["20px", "20px", "40px", "80px"]} py="6%">
        <Text as="b" fontSize={[30, 30, 60, 80]} fontFamily="Lexend Deca" mb="30px">
        Welcome to Firebase Testing
        </Text>
        <Text fontSize={[25, 25, 40, 40]} fontFamily="Lexend Deca">
          <br /> 
          Best lookin' test page you've seen
        </Text>
        <HStack w="100%">
            <VStack mr="60px">
                <Button mr="10px" isDisabled onClick={() => {
                    setTitle("Book of Knowledge of Everything");
                    setContent("This one hasn't been written yet.");
                }}>
                Setter
                </Button>
                <Button isDisabled onClick={handleSubmit}>
                Firestore Testing
                </Button>
            </VStack>
            <VStack>
            {blogs.map(blog =>
                <Link href="/firestore/[id]" as={'/firestore/' + blog.id}>
                <a>{blog.title}</a>
                </Link>
            )}
            </VStack>
        </HStack>
        
      </Box>
  </div>
)};

export default Firestore;
