import React, { Component, useState, useEffect } from 'react';
import { Image, Center, VStack, Button, Box, Square, Circle , Collapse, Flex, Text, Tooltip, useDisclosure, useColorModeValue} from "@chakra-ui/react";
import Link from 'next/link';

// const useFavoritesBox = (props) => {
//     let test = "test1";
//     if(props.hash === window.location.hash){
//         onOpen;
//         test = "opened"
//     }
//     return { isOpen, onToggle, test };
// }

const RecipeBox = (props) => {
    // const {isOpen, onToggle, test } = useFavoritesBox(props);
    const { isOpen, onToggle } = useDisclosure();
    const [isHovering, setHovering] = useState(false);



    // useEffect(() => {

    // }, isOpen);

    return (
        <Link passHref href={props.href ? props.href : '/recipes'}><a>
        <Flex h="250px" w="350px" bg="gray.900" m="50px" border="15px solid black" borderRadius="75px" position="relative" overflow="hidden"
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        bg={isHovering ? useColorModeValue("blue.100","gray.800") : useColorModeValue("blue.200","gray.900")}
        >
            {props.children ? props.children : 
            <Text fontSize={50} pt="30px" h="100%" w="100%" textAlign="center">🚧</Text>
            }
            <Flex position="absolute" bottom="0" w="100%" h="50px" alignItems="center" justifyContent="center"
            bg={isHovering ? useColorModeValue("blue.200","red.800") : useColorModeValue("blue.300","red.900")}
            >
            <Text fontFamily="Russo One" color="black" fontSize={props.textSize ? props.textSize : 28}>
                {props.text ? props.text : "Coming Soon"}
            </Text>
            </Flex>
        </Flex>
        </a></Link>
    )
}

export default RecipeBox;