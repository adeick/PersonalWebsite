import React, { Component } from 'react';
import { Image, Center, Square, Circle } from "@chakra-ui/react"

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
            borderRadius="30px" 
            m="30px" 
            > 
                <Image src={this.props.src}
                alt={this.props.alt}  boxSize="255px"
                borderRadius="30px" fit="cover"
                borderColor="black"
                borderWidth="5px"
                />
            </Square>
        )
    }
}

export default FavoritesBox;