import React from 'react'
import axios from "axios"
import { useEffect } from "react"
import {TrendingCoins} from '../config/api'
import { CryptoState } from "../CryptoContext"
import {Flex,Image,useMediaQuery} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'

export default function Carosel(){
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const [trending,setTrending]=React.useState([])
    const {cur,sym}=CryptoState()
    const fetchTrendingCoins=async()=>{
        const {data} =  await axios.get(TrendingCoins(cur))
        setTrending(data)
    }
    console.log(trending)
    useEffect(()=>{
        fetchTrendingCoins()
    },[cur])
    const items=trending.map((coin)=>{
        return(
            <Flex direction='column' alignItems='center' color='white'>
                <Link to={`/coins/${coin.id}`}>
                <Image src={coin.image}
                        alt={coin.name}
                        height="10vh"
                        style={{marginBottom:10}}></Image>
                    <span>{coin.symbol} &nbsp;</span>
                </Link>
            </Flex>
        )
    })
    return (
        <Flex height='10vh' width={isNotSmallerScreen?'80vw':'90vw'} justifyContent={'center'}>
        <AliceCarousel
            mouseTracking 
            infinite
            autoPlayDirection={300}
            animationDuaration={300}
            disableDotsControls
            responsive={{0:{items:3},512:{items:5}}}
            autoPlay
            disableButtonsControls
           items={items}>
        </AliceCarousel>
        </Flex>
    )
}