import React from "react";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Banner from "../components/Home/banner";
import Carousel from "../components/Home/Carousel";
import { useNavigate } from "react-router-dom";
function Home() {
   const navigate = useNavigate();
  return <Box w={['90%' , '90%', '90%','90%']} m='auto'>
               <Banner />
               <Text mb='40px' mt='70px' textAlign='center' fontSize='25px' fontWeight='600'>Categories</Text>
               <Flex mt='70px' mb='70px' justifyContent='space-around'>
                     <Flex onClick={()=>navigate('/product/Mobiles')}  borderRadius='50%' p='20px' flexDirection='column' alignItems='center' gap='10px'>
                       <Image borderRadius='50%' maxW={['50px','50px','70px','100px']} h={['50px','50px','70px','100px']} src='https://i.ibb.co/7n8GDX2/3545757.jpg'/>
                       <Text fontWeight='500' >Mobiles</Text>
                    </Flex>
                    <Flex onClick={()=>navigate('/product/Laptops')} borderRadius='50%' p='20px' flexDirection='column' alignItems='center' gap='10px'>
                       <Image mixBlendMode='multiply' borderRadius='50%' maxW={['50px','50px','70px','100px']} h={['50px','50px','70px','100px']} src='https://i.ibb.co/kGVWp1R/240-F-391443016-22-VTAufhzlq-F5-Ymho-Nbrrwa-KKMb-N7etz.jpg' />
                       <Text fontWeight='500' >Laptops</Text>
                    </Flex>
                    <Flex onClick={()=>navigate('/product/Watches')} borderRadius='50%' p='20px' flexDirection='column' alignItems='center' gap='10px'>
                       <Image borderRadius='50%' maxW={['50px','50px','70px','100px']} h={['50px','50px','70px','100px']} src='https://i.ibb.co/74bnXzk/digital-watch-500x500.jpg' />
                       <Text fontWeight='500' >Watches</Text>
                    </Flex>
               </Flex>
               <Text mb='70px' textAlign='center' fontSize='25px' fontWeight='600'> Watch Products</Text>
               <Carousel cat={'Mobiles'}/>
               <Divider border='1px solid gray' />

               <Carousel cat={'Laptop'}/>
               <Divider border='1px solid gray' />
               

               <Carousel cat={'Watches'}/>
               <Divider border='1px solid gray' />
               
          </Box>
}

export default Home;
