import { Box, Flex, Image } from "@chakra-ui/react";
import banner from './banner.jpg'
function Banner(){
    return <Box w='100%' m='auto' mt='40px'>
       <Flex w='100%' m='auto' justifyContent='center' alignItems='center' textAlign='center'>
       <Image w='100%' h={['100px', '150px','200px','300px']} m='auto' src={banner} />
     </Flex>
     </Box>

}

export default Banner;