import React from 'react'
import axios from "axios"
import { useEffect } from "react"
import {TrendingCoins} from '../config/api'
import { CryptoState } from "../CryptoContext"

export default function Carosel(){
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
    return (
        <>
        ja
        </>
    )
}