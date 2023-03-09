import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function LaptopCatList({brandChange}) {
    const settings = {
        slidesToShow: 7,
        slidesToScroll: 7,
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
            <Flex onClick={()=>brandChange('Samsung')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/Jyvf8TT/Mpmb153D.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Samsung</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Acer')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/6WyD53y/6ulIitPA.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Acer</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Lenovo')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/2t36fGf/BBB0XL3G.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Lenovo</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Dell')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/LYDDS2G/VRshvHFl.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Dell</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Apple')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/RTLzF6b/cwmK02DN.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Apple</Text>
            </Flex>
            <Flex onClick={()=>brandChange('HP')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/KjJ455M/tt3nmocz.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>HP</Text>
            </Flex>
            <Flex onClick={()=>brandChange('Asus')} justifyContent='center' alignItems='center' flexDirection='column' gap='10px'>
              <Image m='auto' borderRadius='50%' mb='10px' maxW='50px' src='https://i.ibb.co/KNn1cFM/AqRuBtYE.webp' />
              <Text fontSize='12px' textAlign='center' fontWeight='600'>Asus</Text>
            </Flex>
          </Slider>
         
     </Box>
}
export default LaptopCatList;