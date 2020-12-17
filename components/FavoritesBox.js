import React, { Component } from 'react';
import { Image, Center, Square, Circle , Flex, Text, Tooltip} from "@chakra-ui/react"

FavoritesBox = (props) => {
    return (
        <Tooltip label={props.tooltip} aria-label={props.alt}> 
        {/* Change to Collapse */}
            <Square //Box 1
            w="250px"
            h="250px"
            as="a"
            href={props.href}
            target="_blank"
            bg={props.bg}
            borderRadius="35px" 
            m="30px" 
            position="relative"
            onClick={props.onClick}
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
        </Tooltip>
    )
}

export default FavoritesBox;