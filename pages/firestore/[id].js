//https://medium.com/swlh/lets-create-blog-app-with-next-js-react-hooks-and-firebase-backend-tutorial-7ce6fd7bbb3a
import fire from '../../src/config/fire-conf';
import Link from 'next/link'
import Sidebar from '../../src/components/Sidebar';
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

const Firestore = (props) => {
  return (
    <div id="Website">
      <Sidebar/>
      <Box bg={useColorModeValue("blue.100", "gray.900")} h="100vh" w="85vw" right="0" position="fixed" display="inline-block" className="Background" 
      px={["20px", "20px", "40px", "80px"]} py="6%">
        <Text as="b" fontSize={[30, 30, 60, 80]} fontFamily="Lexend Deca" mb="30px">
        {props.title}
        </Text>
        <Text fontSize={[25, 25, 40, 40]} fontFamily="Lexend Deca">
          <br /> 
        {props.content}
        </Text>
        <Button as="a" href='/firestore'>
            Back    
        </Button>        
      </Box>
  </div>
  )
}
export const getServerSideProps = async ({ query }) => {
  const content = {}
  await fire.firestore()
    .collection('blog')
    .doc(query.id)
    .get()
    .then(result => {
      content['title'] = result.data().title;
      content['content'] = result.data().content;
    });
return {
    props: {
      title: content.title,
      content: content.content,
    }
  }
}
export default Firestore;