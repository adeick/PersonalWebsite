import React, { useState, useEffect } from 'react';
import Sidebar from '../../src/components/Sidebar';
import Footer from '../../src/components/Footer';
import Link from 'next/link';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { RiPagesLine } from 'react-icons/ri'

import { AiOutlineWarning } from 'react-icons/ai'
import { DiGit } from 'react-icons/di'
import { ArrowBackIcon  } from '@chakra-ui/icons'


import {
  Image,
  Box,
  Flex,
  IconButton,
  Button,
  ButtonGroup,
  Drawer,
  Text,
  useColorMode,
  useColorModeValue, Stack, 
  VStack, HStack, Spacer, Icon,
  useBreakpointValue, 
  Alert, AlertIcon, AlertTitle, AlertDescription,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react';
//import UncontrolledLottie from '../components/UncontrolledLottie';

const GitHubTutorial = () => {
  return(
  <div id="Website">
    <Sidebar />
      <Flex bg={useColorModeValue("blue.100", "gray.900")} justifyContent="center" flexDirection="column"
      w="85vw" right="0" position="absolute" className="Background" 
      backgroundImage={
        useColorModeValue(
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cg fill='%234072fb' fill-opacity='0.09'%3E%3Cpath fill-rule='evenodd' d='M29.42 29.41c.36-.36.58-.85.58-1.4V0h-4v26H0v4h28c.55 0 1.05-.22 1.41-.58h.01zm0 29.18c.36.36.58.86.58 1.4V88h-4V62H0v-4h28c.56 0 1.05.22 1.41.58zm29.16 0c-.36.36-.58.85-.58 1.4V88h4V62h26v-4H60c-.55 0-1.05.22-1.41.58h-.01zM62 26V0h-4v28c0 .55.22 1.05.58 1.41.37.37.86.59 1.41.59H88v-4H62zM18 36c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm16-26a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 58a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 78a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zM34 4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm-8 82a2 2 0 1 1 4 0v2h-4v-2zm0-68a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V18zM66 4a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm0 72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm-48 0a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm0-72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm24-4h4v2a2 2 0 1 1-4 0V0zm0 60a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V60zm14-24c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm-28-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM36 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 68a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-34a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-12a2 2 0 1 0 0 4 6 6 0 1 1 0 12 2 2 0 1 0 0 4 10 10 0 1 0 0-20zm-64 0a2 2 0 1 1 0 4 6 6 0 1 0 0 12 2 2 0 1 1 0 4 10 10 0 1 1 0-20zm56-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-48 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm24 32a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm36-36a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 44c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm56 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm8 24c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zM3 68c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm0-48c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm71 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm6 66a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 86a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-68A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm36 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E")`,        
        `url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23151313' fill-opacity='0.35' fill-rule='evenodd'/%3E%3C/svg%3E")`
        )}
      //px={["20px", "20px", "40px", "80px"]} py="4%">
      >
        <VStack>
        <Flex w="100%" alignItems="center" justifyContent="center" flexDirection="column"
        px={["20px", "20px", "40px", "80px"]} pt="4%">
        
        <Text as="b" fontSize={[25, 25, 30, 60]} textAlign="center" fontFamily="Lexend Deca" mb="20px">
        How to Clone a GitHub Repository with GitHub Desktop
        </Text>
        <Text fontSize={[18, 18, 20, 20]} as="i" pl="30px" textAlign="center" fontFamily="Newsreader">
            A Guide for New Programmers or Curious Hobbyists
        </Text>
        </Flex>
        <VStack w="100%" h="100%" spacing="0px" maxW="750px">
{/* Warning Box */}
        <Flex bg="orange.100" borderRadius="10px" my="30px" border="3px solid black" w="100%" py="5px"
        alignItems="center" hidden={useBreakpointValue({base: false, md: true})}
        px="10px">
            <Icon as={AiOutlineWarning} color="black"/>
            <Text as="b" fontSize={[18, 18, 20, 20]} pl="5px" color="black">
            Note: 
            </Text>
            <Text fontSize={[18, 18, 20, 20]} pl="5px" color="black">
            A desktop or laptop computer is required to use GitHub Desktop
            </Text>
        </Flex>

        <Text fontSize={[15, 15, 15, 20]} textAlign="left" fontFamily="Lexend Deca" w="100%">
        Before we get started...
        </Text>
{/* Requirements Box */}
        <Flex bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px"
        alignItems="center"
        px="10px">
        <VStack>
            <Text as="b" fontSize={[25, 25, 30, 40]} textAlign="left" fontFamily="Lexend Deca" w="100%">
                Requirements
            </Text>
            <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader">
            - A 64-bit desktop or laptop computer (almost all modern computers) <br/>
            - A GitHub account (we can create one for free later)
            </Text>
            </VStack>
        </Flex>
        {/* Step 1 */}
        <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px"
        px="10px">
        <Text as="b" fontSize={[25, 25, 30, 40]} textAlign="left" fontFamily="Lexend Deca" w="100%">
        1. Cloning and Repos and Git, Oh My!
        </Text>
        <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader">
            Depending on your level of coding experience, you've probably had different levels of exposure to Git version control. 
            Please take time to refresh your knowledge, and it will help you understand what is going on behind the scenes.
        </Text>

        <Accordion allowToggle w="100%" defaultIndex={null}>
            <AccordionItem mb="5px" border="0" >
              <AccordionButton bg={useColorModeValue("blue.100","gray.900")} borderY="2px solid">
                <Flex id="git" alignItems="center">
                <Image src="/images/instructions/git.png" alt="git" w="30px"/>
                    <Text ml="5px" fontSize={["15px", "15px", "15px", "20px"]} textAlign="left" fontFamily="Lexend Deca">
                    What is Git?
                    </Text>  
                </Flex>
                <Spacer/>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel bg={useColorModeValue("blue.100","gray.900")} borderRadius="0 0 15px 15px">
                <Flex justifyContent="center" w="100%" wrap="wrap">
                <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader">
                Git is a version control software. This means that it saves all the old versions 
                of your project in a folder on your device. If you find a bug in the current version, 
                you can look through the past versions to see what created the bug.
                </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb="5px" border="0" >
              <AccordionButton bg={useColorModeValue("blue.100","gray.900")} borderY="2px solid">
                <Flex id="git" alignItems="center">
                <Image src={useColorModeValue("/images/instructions/github.png","/images/instructions/githubwhite.webp")} alt="git" w="30px"/>
                    <Text ml="5px" fontSize={["15px", "15px", "15px", "20px"]} textAlign="left" fontFamily="Lexend Deca">
                    What is GitHub?
                    </Text>  
                </Flex>
                <Spacer/>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel bg={useColorModeValue("blue.100","gray.900")} borderRadius="0 0 15px 15px">
                <Flex justifyContent="center" w="100%" wrap="wrap">
                <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader">
                GitHub is a service that helps you use Git collaboratively. You put code on 
                GitHub, which allows other people to see and use it. It's also a security measure, 
                since if your computer crashes, then your code will already be safely on the cloud. 
                There are alternatives to GitHub, like GitLab and GitKraken, but they are not as
                 popular or as ubiquitous as GitHub.
                </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb="5px" border="0" >
              <AccordionButton bg={useColorModeValue("blue.100","gray.900")} borderY="2px solid">
                <Flex id="git" alignItems="center">
                <Image src="/images/instructions/purplecat.png" alt="git" w="30px"/>
                    <Text ml="5px" fontSize={["15px", "15px", "15px", "20px"]} textAlign="left" fontFamily="Lexend Deca">
                    What is GitHub Desktop?
                    </Text>  
                </Flex>
                <Spacer/>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel bg={useColorModeValue("blue.100","gray.900")} borderRadius="0 0 15px 15px">
                <Flex justifyContent="center" w="100%" wrap="wrap">
                <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader">
                GitHub Desktop is an application that makes it easier to use GitHub. If GitHub is the Google
                Search Engine, then GitHub desktop is like Google Chrome. Another popular alternative to GitHub Desktop is an 
                application called GitBash, but it's challenging to learn and intimidating for novice programmers.
                </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb="5px" border="0" >
              <AccordionButton bg={useColorModeValue("blue.100","gray.900")} borderY="2px solid">
                <Flex id="git" alignItems="center">
                <Image src="/images/instructions/question.png" alt="git" w="30px"/>
                    <Text ml="5px" fontSize={["15px", "15px", "15px", "20px"]} textAlign="left" fontFamily="Lexend Deca">
                    Repos and Cloning... What does it mean?
                    </Text>  
                </Flex>
                <Spacer/>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel bg={useColorModeValue("blue.100","gray.900")} borderRadius="0 0 15px 15px">
                <Flex justifyContent="center" w="100%" wrap="wrap">
                <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader">
                Repo is an abbreviation for repository, which is a collection of code that serves a 
                specific purpose. A repository can have thousands of files, or just one. Cloning a 
                repository is the act of copying that code onto your local computer, whether you 
                intend to run it, update it, or learn from it is all up to you!
                </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb="5px" border="0" >
              <AccordionButton bg={useColorModeValue("blue.100","gray.900")} borderY="2px solid">
                <Flex id="git" alignItems="center">
                <Image src="/images/instructions/book.png" alt="git" w="30px"/>
                    <Text ml="5px" fontSize={["15px", "15px", "15px", "20px"]} textAlign="left" fontFamily="Lexend Deca">
                    Why would I ever use this?
                    </Text>  
                </Flex>
                <Spacer/>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel bg={useColorModeValue("blue.100","gray.900")} borderRadius="0 0 15px 15px">
                <Flex justifyContent="center" w="100%" wrap="wrap">
                <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader">
                GitHub is enormous, and its repositories cover a wide range of disciplines. Perhaps
                you are a researcher who wants to download software to analyze a graph, or maybe you 
                want to install a video game. GitHub doesn't even need to be code; some people use it
                to store recipes or write books collaboratively.
                </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </Box>
        {/* Step 2 */}
        <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px"
        px="10px">
          <Text as="b" fontSize={[25, 25, 30, 40]} pt="5px" textAlign="left" fontFamily="Lexend Deca" w="100%">
        2. Downloading Desktop
        </Text>
        <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader">
            If you haven't done it already, you'll need to install GitHub Desktop. You can download it
            for Windows and Mac right <a target="_blank" href="https://desktop.github.com/"><Text color="purple.500" 
            fontFamily="Lexend Deca" as="u">here</Text></a>. 
        </Text>
        <Image borderRadius="10px"  src="/images/instructions/GitHubDesktop.png" alt="GitHub Desktop Download"/>
        <Text fontSize={13} pl="5px" fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 1</Text>: <Text fontFamily="Newsreader" as="i">GitHub Desktop Website</Text>
            </Text>
        <Text fontSize={[18, 18, 20, 20]} pl="30px" pt="30px" fontFamily="Newsreader">
            Click "Open" when it finishes downloading, and follow all steps as the setup wizard demonstrates.
        </Text>
        </Box>
        {/* Step 3 */}
        <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px" px="10px">
            <Text as="b" fontSize={[25, 25, 30, 40]} pt="5px" textAlign="left" fontFamily="Lexend Deca" w="100%">
            3. Create a GitHub account (or login)
            </Text>
            <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader">
                If you don't have a GitHub account, create one <a  target="_blank" href="https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home">
                <Text fontFamily="Lexend Deca" color="purple.500" as="u">here</Text></a>. Login to GitHub on your browser,
                and also login to GitHub Desktop, if you're not already signed in.<br/><br/>
                If you're not sure if you're signed in, you can look under "File &gt; Options". You should see a 
                screen like Figure 2 if you are signed in.
            </Text>
            <Image borderRadius="10px" src="/images/instructions/GitHubSignIn.png" alt="Sign In Example"/>
            <Text fontSize={13} pl="5px" fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 2</Text>: <Text fontFamily="Newsreader" as="i">GitHub Desktop Options</Text>
            </Text>
        </Box>
        {/* Step 4 */}
        <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px"
        px="10px">
            <Text as="b" fontSize={[25, 25, 30, 40]} pt="10px" textAlign="left" fontFamily="Lexend Deca" w="100%">
            4. Locate your Desired Repository
            </Text>
            <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader">
                You may already have a GitHub account in mind that you want to clone. If so, navigate to that 
                repository using Google or GitHub's search functionality. If not, I encourage you to explore 
                GitHub for a repository that interests you. <br/><br/>
                Now, click the green <Text fontFamily="Lexend Deca" color="green.500" as="b">Code</Text> button to open the clone menu to match Figure 3:
            </Text>
            <Image src="/images/instructions/GitHubCodeExample.png" alt="Green Code Example"/>
            <Text fontSize={13} pl="5px" fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 3</Text>: <Text fontFamily="Newsreader" as="i">Sample Repository</Text>
            </Text>
        </Box>
        {/* Step 5 */}
        <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px"
        px="10px">
        <VStack>
            <Text as="b" fontSize={[25, 25, 30, 40]} pt="10px" textAlign="left" fontFamily="Lexend Deca" w="100%">
            5. Clone The Repository
            </Text>
            <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader" w="100%">
                {/* <Text fontFamily="Lexend Deca" as="b">Method 1: Open With GitHub Desktop</Text><br/> */}
                Click "Open with GitHub Desktop", and a Dialog Box will open, as shown in Figure 4: 
            </Text>
            <Image borderRadius="10px" src="/images/instructions/GitHubDialogExample.png" alt="Dialogue Example"/>
            <Text fontSize={13} textAlign="left" w="100%" pl={["5px", "20px", "80px", "120px"]} fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 4</Text>: <Text fontFamily="Newsreader" as="i">GitHub Dialog Box</Text>
            </Text>
            <Text fontSize={[18, 18, 20, 20]} pl="30px" pt="10px" fontFamily="Newsreader">
                Click on "Open GitHubDesktop.exe", which should bring you to the following screen in GitHub Desktop, as shown in Figure 5:
            </Text> 
            <Image borderRadius="10px" src="/images/instructions/GitHubCloneExample.png" alt="Clone Example"/>
            <Text fontSize={13} textAlign="left" w="100%" pl={["5px", "20px", "45px", "60px"]} fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 5</Text>: <Text fontFamily="Newsreader" as="i">GitHub Desktop Clone Menu</Text>
            </Text>
            <Text fontSize={[18, 18, 20, 20]} pl="30px" pt="10px" fontFamily="Newsreader">
                Choose your local path (the C drive is usually a good place), and click the 
                blue <Text fontFamily="Lexend Deca" color="blue.500" as="b">Clone</Text> button to save the repository 
                to your local device.
            </Text>
        </VStack>
        </Box> 
        <Text as="b" fontSize={[25, 25, 30, 40]} pt="10px" textAlign="center" fontFamily="Lexend Deca" w="100%">
        🎉 Voila! You have cloned your first GitHub repository.
        </Text>
        <Accordion allowToggle w="100%" defaultIndex={null}>
            <AccordionItem mb="5px" border="0" w="100%">
              <AccordionButton w="100%" alignItems="center" justifyContent="center" border="0">
                <Flex id="more" maxW="300px" alignItems="center" border="0">
                {/* <Image src="/images/instructions/git.png" alt="git" w="30px"/> */}
                    <Text ml="5px" fontSize={["15px", "15px", "15px", "20px"]} fontFamily="Lexend Deca">
                    Want to know more?
                    </Text>  
                    <Spacer/>
                    <AccordionIcon />
                </Flex>
              </AccordionButton>
              <AccordionPanel w="100%">
              <Box bg={useColorModeValue("blue.200", "gray.700")} borderRadius="10px" my="30px" border="3px solid" w="100%" py="5px"
        px="10px">
        <VStack>
            <Text as="b" fontSize={[25, 25, 30, 40]} pt="10px" textAlign="left" fontFamily="Lexend Deca" w="100%">
            Bonus: Use the Repository!
            </Text>
            <Text fontSize={[18, 18, 20, 20]} pl="30px" fontFamily="Newsreader" w="100%">
                {/* <Text fontFamily="Lexend Deca" as="b">Method 1: Open With GitHub Desktop</Text><br/> */}
                You now have cloned the repository to your computer. What happens now will vary drastically depending on what you want
                to do with the software. If you are interested in downloading some files to read, all you need to do is open the files.
                If you are installing software from GitHub that you intend to use, there are often instructions relevant to that 
                repository in a README file. An example README is featured in Figure 6.
            </Text>
            <Image borderRadius="10px 10px 0 0" src="/images/instructions/ChakraREADME.png" alt="README Example"/>
            <Text fontSize={13} textAlign="left" w="100%" pl="5px" fontFamily="Newsreader">
                <Text fontFamily="Newsreader" as="b">Figure 6</Text>: <Text fontFamily="Newsreader" as="i">Chakra README</Text>
            </Text>
            <Text fontSize={[18, 18, 20, 20]} pl="30px" pt="10px" fontFamily="Newsreader">
                However, if you're using GitHub, it's possible, even probable that you are attempting to collaborate on someone else's 
                project. If it's a large project, you will be creating new branches and 
                using pull requests, which is out of the scope of this article. You can learn more <a  target="_blank" 
                href="https://dev.to/inezabonte/introduction-to-branches-and-pull-requests-for-beginners-3kjc"><Text as="u" color="blue.500">here</Text></a>.
                If it's a small project, then they will likely <a 
                href="https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository" target="_blank">
                <Text as="u"> add you as a collaborator on GitHub </Text></a> and you will be able to 
                push and pull straight from the main/master branch. If you are collaborating, you should learn the functions of the following buttons:
                <br/>
                <br/><Text color="blue.500" as="b">Commit to ...</Text> Think of this button like saving your files to GitHub Desktop. 
                Before you commit, GitHub Desktop will show you all the files you changed and what those changes are in the viewing panel. 
                Figure 8 depicts the commit button, as well as a sample Summary and Description.
                <br/><br/><Text color="blue.500" as="b">🗘 Fetch</Text>: Refreshes GitHub Desktop, in case the repository online changed.
                <br/><br/><Text color="blue.500" as="b">↓ Pull</Text>: This means that the online version of the repository has new changes that don't exist
                 on your device. If you click this button, then GitHub will load those changes onto your computer.
                <br/><br/><Text color="blue.500" as="b">↑ Push</Text>: If you see this button, it's because you just "committed" code to GitHub Desktop.
                You should now press this button to send your code to GitHub, it will keep your code safe and allow other people to see your changes. (Figure 7)
            </Text> 
            <Image borderRadius="10px" src="/images/instructions/GitHubPush.png" alt="Push Example"/>
            <Stack direction={useBreakpointValue({base:"column", md: "row"})}>
                <Text fontSize={13} textAlign="left" w="100%" px={["5px", "20px", "45px", "60px"]} fontFamily="Newsreader">
                    <Text fontFamily="Newsreader" as="b">Figure 7</Text>: <Text fontFamily="Newsreader" as="i">(above) GitHub Desktop Push Button</Text>
                    <br/><br/>
                    <Text fontFamily="Newsreader" as="b">Figure 8</Text>: <Text fontFamily="Newsreader" as="i">{useBreakpointValue({base: "(below)", md: "(right)"})} GitHub Desktop Commit Button</Text>
                </Text>  
                <Image borderRadius="10px" src="/images/instructions/GitHubCommit.png" alt="Commit Example"/>
            </Stack>
        </VStack>
        </Box> 
        <Flex w="100%">
        <Text as="b" fontSize={[25, 25, 30, 40]} pt="10px" textAlign="center" fontFamily="Lexend Deca" w="100%">
        🎉🎉🎉
        </Text>
        </Flex>
              </AccordionPanel>
            </AccordionItem>
        </Accordion>      
        <Box w="100%">
          <Link passHref href="../blog">
          <Button as="a" variant="ghost" leftIcon={<ArrowBackIcon/>} ml="20px">
            Back to Blog
          </Button>
          </Link>
        </Box>
        </VStack>
        </VStack>
        <Footer text="Made by Andrew Deick"/>
      </Flex>
      
  </div>
)};

export default GitHubTutorial;
