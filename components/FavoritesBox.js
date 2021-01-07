import React, { Component, useEffect } from 'react';
import { Image, Center, VStack, Button, Box, Square, Circle , Collapse, Flex, Text, Tooltip, useDisclosure, useColorModeValue} from "@chakra-ui/react";

import scrollIntoView from 'scroll-into-view-if-needed';

const FavoritesBox = (props) => {
    const { isOpen, onToggle } = useDisclosure()

    // useEffect(() => {

    // }, isOpen);

    return (
        <VStack isInline={false} m="30px" order={isOpen ? -1 : props.order}> 
        {/* Change to Collapse */}
            <Square //Box 1
            w="250px"
            h="250px"
            //as="a"
            //href={props.href}
            //onClick={onToggle}
            target="_blank"
            bg={props.bg}
            borderRadius="35px" 
            position="relative"
            id={props.alt}
            onClick={() => {
                onToggle();
                //window.scrollTo(0,360);
                props.onClick ? props.onClick() : null;
                const node = document.getElementById(props.start); //because position is calculated before reordering
                scrollIntoView(node, {
                    scrollMode: 'always',
                    block: 'start',
                    inline: 'start',
                    behavior: 'smooth',
                  });
            }}//{props.onClick}
            > 
                <Image src={props.src}
                    alt={props.alt}  boxSize="250px"
                    borderRadius="30px" fit="cover"
                    borderColor="black"
                    borderWidth="5px"
                    zIndex={20}
                />
                <Flex
                opacity="80%"
                bg="gray.300"
                w="100%"
                h="35%"
                zIndex={99}
                position="absolute"
                bottom="0"
                borderRadius="0 0 30px 30px" 
                justifyContent="center"
                alignItems="center"
                >
                    <Text fontSize={28} fontFamily="Russo One" color="black">
                        {props.alt}
                    </Text>
                </Flex>
            </Square>
        <Collapse in={isOpen} animateOpacity direction="bottom" w="100%">
            <Flex h={props.h ? props.h : 64} w="70vw" bg={useColorModeValue("gray.300", "gray.700")} position="relative" top="0px" 
            borderRadius="30px 30px 30px 30px" border="5px black solid" justifyContent="center" alignItems="center">
                {props.children ? props.children : 
                <VStack>
                <Text fontSize={["25px", "25px", "35px", "45px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]} align="left">
                    Description Coming Soon!
                </Text>
                <Button as="a" href={props.href} target="_blank">
                    {props.alt}
                </Button>
                </VStack>
                }
            </Flex>
        </Collapse>
        </VStack>
    )
}

export default FavoritesBox;