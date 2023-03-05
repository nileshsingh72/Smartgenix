import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Image, Skeleton } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
function Carousel({cat}) {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)
    const settings = {
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: false,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              arrows: false,
              slidesToShow: 4,
              slidesToScroll: 4,

            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
       
      };
      useEffect(()=>{
        setLoading(true)
         async function getData(){
               let res = await axios.get(`https://cloudy-cyan-dragonfly.cyclic.app/product?category=${cat}&page=1&limit=40`);
               let ans = await res.data;
               setData(ans.data)
               if(ans.status || !ans.status){
               setLoading(false)
               }
         }
         getData();
      },[])
  return <Box w='100%' m='auto' mt='50px' mb='50px'>
          <Slider {...settings} >
              {
                loading?[1,2,3,4,5,6,7,8].map((ele)=>{
                  return <Skeleton height='150px' key={ele}>
                            
                  </Skeleton>
                }):data?.map((ele)=>{
                    return <Flex
                            p='10px'
                            boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
                            justifyContent='center'
                            flexDirection='column'
                            alignItems='center'
                            key={ele._id}>
                          
                        
                         <Image m='auto' maxW='100%' h='100px' src={ele.img} />
                         <Heading textAlign='center' mt='10px' noOfLines='1' fontSize='14px'>{ele.title}</Heading>
                    </Flex>
                })
              }
          </Slider>
     </Box>
}
export default Carousel;