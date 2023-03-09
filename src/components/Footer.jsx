import { Box, Divider, Flex, Heading, Image, List, ListIcon, ListItem, SimpleGrid } from "@chakra-ui/react";
import {MdCheckCircle} from 'react-icons/md'
import {BsTwitter , BsFacebook , BsLinkedin , BsGithub , BsYoutube , BsInstagram} from 'react-icons/bs'

function Footer(){
    return<Box
           bg='#152238'
           w='100%'
           m='auto'
           mt='100px'
           color='white'
           zIndex='1000'
           position='relative'
        >

        <Box w='100%' p='30px'>
        <Flex justifyContent='space-between' alignItems='center' flexDirection={['column','column','row','row']} gap='30px'>
               <Flex gap='20px' alignItems='center'>
              <Image maxW='60px' h='60px' borderRadius='50%' src='https://i.ibb.co/GTP3SCx/White-and-Black-Phone-Store-Business-Logo.gif'/>
              <Heading>
                SmartGenix
              </Heading>
               </Flex>
               <Flex gap='20px'>
                <BsInstagram color='white' fontSize='30px' />                
                <BsLinkedin color='white' fontSize='30px' />                
                <BsFacebook color='white' fontSize='30px' />                
                <BsTwitter color='white' fontSize='30px' />                
                <BsGithub color='white' fontSize='30px' />                
                <BsYoutube color='white' fontSize='30px' /> 
                </Flex>
             </Flex>


            <SimpleGrid mt='50px' spacing='10px' columns={['2','2','3','4']} >
              <Flex alignItems='center' flexDirection='column'>
    <Heading fontSize='16px' mb='20px'>Category</Heading>
  <List spacing={1}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Mobiles
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Laptops
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Watches
  </ListItem> 
    </List>
              </Flex>

              <Flex alignItems='center' flexDirection='column'>
    <Heading fontSize='16px' mb='20px'>Mobile Brands</Heading>
  <List spacing={1}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Apple
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Oppo
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Samsung
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Xiaomi
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    One Plus
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
     Realme
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
     Poco
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
     Motorola
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Vivo
  </ListItem> 
    </List>
              </Flex>

              <Flex alignItems='center' flexDirection='column'>
    <Heading fontSize='16px' mb='20px'>Laptop Brands</Heading>
  <List spacing={1}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Apple
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Acer
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Samsung
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Dell
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    HP
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
     Lenovo
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
     Asus
  </ListItem> 
    </List>
              </Flex>

              <Flex alignItems='center' flexDirection='column'>
    <Heading fontSize='16px' mb='20px'>Watches Brands</Heading>
  <List spacing={1}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Apple
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Samsung
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Noise
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    BoAt
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Fire-Boltt
  </ListItem> 
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
     Realme
  </ListItem> 
    </List>
              </Flex>
            </SimpleGrid>
        </Box>

            <Divider borderTop='1px solid white' />
            <Box textAlign='center' p='30px'>
         © 2023 SmartGenix. All Rights Reserved
            </Box>

    </Box>
}

export default Footer;