import { Box, Divider, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {CgProfile} from 'react-icons/cg'
import {CiMobile3} from 'react-icons/ci'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineHome , AiOutlineShoppingCart , AiOutlineGift,AiOutlineLaptop} from 'react-icons/ai'
import {TbDeviceWatchStats2} from 'react-icons/tb'
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../redux/auth/auth.action";

function Navbar(){
    const {isAuth , user } = useSelector((store)=>store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
           
           return <Box w='100%' m='auto' bg='#152238' color='white'>
           <Flex display={['none', 'none', 'flex','flex']} p='10px 20px' pr='50px' justifyContent='space-between' alignItems='center'>
           <Link to='/'>
            <Flex alignItems='center' gap='10px'>
           <Image  maxW='70px' h='60px' borderRadius='50%' src='https://i.ibb.co/GTP3SCx/White-and-Black-Phone-Store-Business-Logo.gif'/>
           <Text letterSpacing='2px' fontWeight='700' fontFamily='cursive' color='white'>Smart<span style={{color:'orange'}}>Genix</span></Text>
           </Flex>
            </Link>
           <Flex gap='20px' alignItems='center'>
            <Link to='/' className='navLink'>Home</Link>
            <Menu isLazy>
             <MenuButton  className='navLink'>Product</MenuButton>
                 <MenuList bg='#152238' color='white'>
                   <MenuItem bg='#152238' color='white'><Link className='navLink' to='/product/Mobiles'>Mobiles</Link></MenuItem>
                   <MenuItem bg='#152238' color='white'><Link className='navLink' to='/product/Laptops'>Laptops</Link></MenuItem>
                   <MenuItem bg='#152238' color='white'><Link className='navLink' to='/product/Watches'>Watches</Link></MenuItem>
                 </MenuList>
             </Menu>
            <Link to='order' className='navLink'>My Order</Link>
            <Link className='navLink'>{isAuth ?  <Menu isLazy>
             <MenuButton  className='navLink'>{user?.name}</MenuButton>
                  <MenuList bg='#152238' color='white'>
                   <MenuItem bg='#152238' color='white'><Text>{user?.name}</Text></MenuItem>
                   <MenuItem bg='#152238' color='white'><Text>{user?.email}</Text></MenuItem>
                   <MenuItem bg='#152238' color='white' onClick={()=>dispatch(logoutAPI())}><Text>Logout</Text></MenuItem>
                 </MenuList>
             </Menu> :<Link to='login'>Login</Link>}</Link>
            <Link to='cart' className='navLink'><AiOutlineShoppingCart fontSize='25px' /></Link>
           </Flex>
           </Flex>


           <Flex display={['flex','flex','none','none']} p='10px 20px' justifyContent='space-between' alignItems='center'>
           <Link to='/'>
            <Flex alignItems='center' gap='10px'>
           <Image  maxW='70px' h='60px' borderRadius='50%' src='https://i.ibb.co/GTP3SCx/White-and-Black-Phone-Store-Business-Logo.gif'/>
           <Text letterSpacing='2px' fontWeight='700' fontFamily='cursive' color='white'>Smart<span style={{color:'orange'}}>Genix</span></Text>
           </Flex>
            </Link>
           <Menu >
  <MenuButton
    as={IconButton}
    bg='#152238'
    _hover={{bg:'#152238'}}
    aria-label='Options'
    icon={<RxHamburgerMenu color='white' bg='#152238' fontSize='30px' />}
    variant='outline'
  />
  <MenuList mt='16px' bg='#152238' color='white'>
    <MenuItem onClick={()=>navigate('/')} bg='#152238' color='white' icon={<AiOutlineHome fontSize='25px' />}>
      <Link to='/'>Home</Link>
    </MenuItem>
    <MenuItem onClick={()=>navigate('/product/Mobiles')} bg='#152238' color='white' icon={<CiMobile3 fontSize='25px' />} >
    <Link to='/product/Mobiles'>Mobiles</Link>
    </MenuItem>
    <MenuItem onClick={()=>navigate('/product/Laptops')} bg='#152238' color='white' icon={<AiOutlineLaptop fontSize='25px' />}>
    <Link to='/product/Laptops'>Laptops</Link>
    </MenuItem>
    <MenuItem onClick={()=>navigate('/product/Watches')} bg='#152238' color='white' icon={<TbDeviceWatchStats2 fontSize='25px'/>}>
    <Link to='/product/Watches'>Watches</Link>
    </MenuItem>
    <MenuItem onClick={()=>navigate('/order')} bg='#152238' color='white' icon={<AiOutlineGift fontSize='25px' />}>
    <Link to='/order'>My Order</Link>
    </MenuItem>
    <MenuItem onClick={()=>navigate('/cart')} bg='#152238' color='white' icon={<AiOutlineShoppingCart fontSize='25px'/>}>
    <Link to='/cart'>Cart</Link>
    </MenuItem>
     {
        isAuth ?   <MenuItem icon={<CgProfile fontSize='25px' />} bg='#152238' color='white' onClick={()=>dispatch(logoutAPI())}><Text>Logout</Text></MenuItem>: 
        <MenuItem onClick={()=>navigate('/login')} bg='#152238' color='white' icon={<CgProfile fontSize='25px' />}>
       <Link to='/login'>
        Login
        </Link>
       </MenuItem>
     }
  </MenuList>
</Menu>
           </Flex>
           <Divider borderTop='1px solid gray' />
         </Box>
}


export default Navbar;