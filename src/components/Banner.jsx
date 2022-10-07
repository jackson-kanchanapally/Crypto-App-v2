import {Box,Flex,Heading,VStack} from '@chakra-ui/react'
import Carosel from '../components/Carosel'

export default function Banner(){
    return (
        <Box  backgroundImage={"url('banner3.jpg')"}> 
        <Flex direction="column" pt="10vh" height="400" justifyitems="space-around" alignItems="center" >
            <Flex justifyContent="space-around" alignContent="center" mb="10vh" >
            <Heading color="white" ><span style={{color:"#FFA500"}} >T</span>rending <span style={{color:"#FFA500"}}>C</span>oins</Heading>
            </Flex>
            <Carosel/>
        </Flex>
</Box>
    )
}