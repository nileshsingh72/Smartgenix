import { Box, Flex, Image, Menu, MenuButton, MenuList, Radio, RadioGroup, SimpleGrid, Skeleton, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import LaptopCatList from "../components/product/LaptopCatList";
import MobileCatList from "../components/product/MobilesCatList";
import WatchCatList from "../components/product/WatchCatList";
import {FaSortAmountDown} from 'react-icons/fa'
import {FiFilter} from 'react-icons/fi'
import {MdGraphicEq} from 'react-icons/md'
import {BsFillStarFill} from 'react-icons/bs'
import Pagination from "../components/Pagination";
import axios from "axios";
import getApi from "../components/product/api";
function getPageUrl(val) {
  if (val <= 0 || val === undefined || val === null) {
      val = 1;
  }
  val = Number(val)
  return val
}
function Product() {
  const [searchParams, setSearchParams] = useSearchParams()
  const a = searchParams.get('min')||0
  const [min , setMin] = useState(a)
  const b = searchParams.get('max')||0

  const [max , setMax] = useState(b)
  const c = getPageUrl(searchParams.get('page'))
  const [page , setPage] = useState(c)
  const [totalPage , setTotalPage] = useState(10)
  const limit = 20;
  const d = searchParams.get('sort')||''
  const [sort , setSort] = useState(d)
  const e = searchParams.get('order')||''
  const [order , setOrder] = useState(e)
  const f = searchParams.get('brand')||''
  const [brand , setBrand] = useState(f)
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const ref = useRef();
  const id = params.id;
  const handleChange = (val)=>{
   const [a, b ]= val.split(':');
   setOrder(a)
   setSort(b)
  }
  const brandChange = (val)=>{
    setBrand(val)
  }
  const pageChange = (val)=>{
    setPage(val)
  }
  function debounce(cb,val,delay){
    if(ref.current){
         clearTimeout(ref.current);
         ref.current = undefined;
     }
     ref.current = setTimeout(()=>{
        cb(val)
     },delay)
  }
  function incMin(val){
     setMin(val);
  }
  function incMax(val){
     setMax(val)
  }
  useEffect(()=>{
   let url = getApi(id, brand, min, max, sort, order, page, limit)
   async function getdata(){
     setLoading(true)
      try {
        let data = await axios.get(url);
        let res = await data.data;
        setData(res.data);
        setTotalPage(Math.ceil(res.totalPage/limit))
        setLoading(false)
        console.log(res)
      } catch (error) {
         setLoading(false);
      }
   }
   getdata();
   window.scroll({
      top:70,
      behavior:'smooth'
   })
   let paramsObject = {
    page,
    limit
}
if (brand) {
    paramsObject.brand = brand
}
if (min) {
    paramsObject.min = min
}
if (max) {
    paramsObject.max = max
}
if (sort) {
    paramsObject.sort = sort
    paramsObject.order = order
}
setSearchParams(paramsObject)
  },[sort , page , min , max ,  brand , id])

  return <Box w='100%' m='auto' mt='70px'>
       <Flex w='100%' flexDirection={['column','column' , 'column','row']}>
        <Box w='30%' position='fixed' top='100'  display={['none','none','none','block']} m='auto' >
          <Text textAlign='center' mb='40px' fontWeight='600' fontSize='20px'>
            Filter & Sort
          </Text>
           <Box w='90%' m='auto' >
               <Box mb='20px'>
               <Text fontWeight='500'  >Min Price  -- ({min})</Text>
                <Slider aria-label='slider-ex-4' defaultValue={min} max='200000' value={min} onChange={(val) => debounce(incMin , val , 1000)} >
               <SliderTrack bg='red.100'>
                 <SliderFilledTrack bg='tomato' />
               </SliderTrack>
               <SliderThumb boxSize={6}>
                 <Box color='tomato' as={MdGraphicEq} />
               </SliderThumb>
              </Slider>
               </Box>
               <Box mb='20px'>
               <Text fontWeight='500'>Max Price  -- ({max})</Text>
                <Slider aria-label='slider-ex-4' defaultValue={max} max='400000' value={max} onChange={(val) => debounce(incMax , val , 1000)} >
               <SliderTrack bg='red.100'>
                 <SliderFilledTrack bg='tomato' />
               </SliderTrack>
               <SliderThumb boxSize={6}>
                 <Box color='tomato' as={MdGraphicEq} />
               </SliderThumb>
              </Slider>
               </Box>
               <Box mt='30px'>
               <Text fontWeight='500'  mb='20px'>Sort Items</Text>
               <RadioGroup onChange={(val)=>handleChange(val)} value={order+':'+sort}>
               <Stack direction='column'>
                 <Radio value='desc:price'>High to Low (price)</Radio>
                 <Radio value='asc:price'>Low to High (price)</Radio>
                 <Radio value='desc:rating'>High to Low (rating)</Radio>
                 <Radio value='asc:rating'>Low to High (rating)</Radio>
               </Stack>
             </RadioGroup>
               </Box>
           </Box>
        </Box>
        <Box w={['90%','90%','90%','70%']} m='auto' ml={['0%','0%','0%','30%']}>
           <Box >
            {
              id=='Mobiles'?<MobileCatList brandChange = {brandChange}/>:id=='Laptop'?<LaptopCatList brandChange = {brandChange}/>:<WatchCatList brandChange = {brandChange}/>
            }
           </Box>
           <Flex w={['90%','90%','90%','70%']} display={['flex','flex','flex','none']} m='auto' justifyContent='space-between' alignItems='center' mt='50px'>
           <Menu isLazy>
             <MenuButton  className='navLink'>
             <Flex justifyContent='center' gap='20px' alignItems='center'>
            <FiFilter color='orange' fontWeight='600' fontSize='20px' />
            <Text fontWeight='600'>Filter</Text>
           </Flex>
             </MenuButton>
                  <MenuList >
                  <Box w={['300px','400px','500px','500px']} p='40px' m='auto'>
          <Text textAlign='center' mb='40px' fontWeight='600' fontSize='20px'>
            Filter & Sort
          </Text>
           <Box w='90%' m='auto' >
               <Box mb='20px'>
               <Text fontWeight='500'  >Min Price  -- ({min})</Text>
                <Slider aria-label='slider-ex-4' defaultValue={min} max='200000' value={min} onChange={(val) => debounce(incMin , val , 1000)} >
               <SliderTrack bg='red.100'>
                 <SliderFilledTrack bg='tomato' />
               </SliderTrack>
               <SliderThumb boxSize={6}>
                 <Box color='tomato' as={MdGraphicEq} />
               </SliderThumb>
              </Slider>
               </Box>
               <Box mb='20px'>
               <Text fontWeight='500'>Max Price  -- ({max})</Text>
                <Slider aria-label='slider-ex-4' defaultValue={max} max='400000' value={max} onChange={(val) => debounce(incMax , val , 1000)} >
               <SliderTrack bg='red.100'>
                 <SliderFilledTrack bg='tomato' />
               </SliderTrack>
               <SliderThumb boxSize={6}>
                 <Box color='tomato' as={MdGraphicEq} />
               </SliderThumb>
              </Slider>
               </Box>
               <Box mt='30px'>
               <Text fontWeight='500'  mb='20px'>Sort Items</Text>
               <RadioGroup onChange={(val)=>handleChange(val)} value={order+':'+sort}>
               <Stack direction='column'>
                 <Radio value='desc:price'>High to Low (price)</Radio>
                 <Radio value='asc:price'>Low to High (price)</Radio>
                 <Radio value='desc:rating'>High to Low (rating)</Radio>
                 <Radio value='asc:rating'>Low to High (rating)</Radio>
               </Stack>
             </RadioGroup>
               </Box>
           </Box>
        </Box>
                  </MenuList>
             </Menu>
           <Flex justifyContent='center' gap='20px' alignItems='center'>
            <FaSortAmountDown color='orange' fontWeight='600' fontSize='20px'/>
            <Text fontWeight='600'>Sort</Text>
           </Flex>
        </Flex>

        {/* #### Product Data Map  */}

          <SimpleGrid columns={['1','2','3','5']} gap='20px' mt='50px'>
               {
                  loading?[1,2,3,4,5,6,7,8,9,10].map((ele)=>{
                    return <Skeleton key={ele} height='150px'>
                              
                    </Skeleton>
                  }):
                data?.map((ele)=>{
                  return  <Box key={ele._id} onClick={()=>navigate(`/signgleproduct/${ele._id}`)} textAlign='center' w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image m='auto' maxW='100%' h={['200px','200px','150px','150px']} src={ele.img} alt={ele.title} />
                  <Box p='6'>
                    <Box
                      mt='7px'
                      fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'
                      noOfLines={1}
                    >
                      {ele.title}
                    </Box>
            
                    <Box>
                    ₹ {ele.price}  <strike style={{color:'red'}}>₹ {ele.price +1299}</strike>
                    </Box>
            
                    <Box textAlign='center' justifyContent='center' display='flex' mt='2' alignItems='center'>
                      {Array(5)
                        .fill('')
                        .map((_, i) => (
                          <BsFillStarFill
                            key={i}
                            color={i < ele.rating ? 'teal' : 'gray'}
                          />
                        ))}
                    </Box>
                  </Box>
                </Box>
                })
               }
          </SimpleGrid>

           <Box>
             
         </Box>
           {/* Pagination  */}
           <Box mt='50px'>
            <Pagination totalPage={totalPage} pageChange={pageChange} page={page} />
           </Box>
        </Box>
       </Flex>
  </Box>
}

export default Product;
