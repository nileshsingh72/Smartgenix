import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function WatchCatList({brandChange}) {
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 5,
        dots:true,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,

            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          }
        ]
       
      };
  return <Box w='100%' m='auto' >
    <Slider {...settings} >
            <Flex onClick={()=>brandChange('Noise')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/MRjxTWM/1656924935678-e-2147483647-v-beta-t-erw-JELRu-R2-m0-GSK4-Ok-NJj-Rd-O-n-bquf-Jw-Y-nn-HNt8.jpg' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Noise</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Fire-Bolt')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/YQFVGWw/images-q-tbn-ANd9-Gc-Ss6-Qi-Og-A7a-YWa-Tb-I8g-Ck-I6y-Ys8-Tdbn-CQTg-SPj-F2e-QLd-SSOS-Eh-Uq-Yq-usqp-CA.png' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Fire-Boltt</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Boat')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/6NfwB6W/YQherp-Z71-Hh-MJZGJJBR9y-D-3-Z8f3ej-EZb-Hr-A1c9-Mh-Xq-E0-Uifl-Pef-Ujaev-Ap-LQ6rqe-Q.png' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>BoAt</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Samsung')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/Jyvf8TT/Mpmb153D.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Samsung</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Apple')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/RTLzF6b/cwmK02DN.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Apple</Text>
            </Flex>
          </Slider>
         
     </Box>
}
export default WatchCatList;