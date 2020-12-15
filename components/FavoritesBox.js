import React, { Component } from 'react';
import { Image, Center, Square, Circle , Flex, Text} from "@chakra-ui/react"

class FavoritesBox extends Component {
    render() {
        return (
            <Square //Box 1
            w="250px"
            h="250px"
            as="a"
            href={this.props.href}
            target="_blank"
            bg={this.props.bg}
            borderRadius="35px" 
            m="30px" 
            position="relative"
            > 
                <Image src={this.props.src}
                    alt={this.props.alt}  boxSize="250px"
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
                    <Text fontSize={[25, 25, 40, 40]} fontFamily="Russo One">
                        {this.props.alt}
                    </Text>
                </Flex>
            </Square>
        )
    }
}

export default FavoritesBox;