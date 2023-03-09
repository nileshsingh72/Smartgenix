import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MobileCatList({brandChange}) {
    const settings = {
        slidesToShow: 9,
        slidesToScroll: 9,
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
  return <Box w='100%' m='auto'>
    <Slider {...settings} >
          <Flex onClick={()=>brandChange('Vivo')} justifyContent='center' alignItems='center' flexDirection='column' >
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/0YS4Cpv/YeBboDh6.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Vivo</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Oppo')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/z4NzYHt/XPLoWt2W.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Oppo</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Samsung')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/Jyvf8TT/Mpmb153D.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Samsung</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Xiaomi')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/sVgMXD6/GbJv9eGO.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Xiaomi</Text>
            </Flex>
            <Flex onClick={()=>brandChange('OnePlus')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/Jy1twWY/0H6IiRiJ.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>One Plus</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Realme')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/CQcrxRs/HrOF1ejy.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Realme</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Apple')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/RTLzF6b/cwmK02DN.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Apple</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Motorola')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/CbM0LhT/hZnoypHg.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Motorola</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Poco')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/4dxZsz6/kSD2W9Dr.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Poco</Text>
            </Flex>
          </Slider>
         
     </Box>
}
export default MobileCatList;