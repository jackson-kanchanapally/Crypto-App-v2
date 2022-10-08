import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "../CryptoContext";
import {
  Flex,
  Image,
  useMediaQuery,
  Stat,
  StatNumber,
  StatArrow,
  StatLabel,
  HStack
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";

export default function Carosel() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const [trending, setTrending] = React.useState([]);
  const { cur, sym } = CryptoState();
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(cur));
    setTrending(data);
  };
  useEffect(() => {
    fetchTrendingCoins();
  }, [cur]);
  const items = trending.map((coin) => {
    const profit = coin.price_change_percentage_24h >= 0;
    const numberWithCommas=(x)=>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }
    return (
      <Flex direction="column" alignItems="center" justifyContent={'center'} color="white">
        <Link to={`/coins/${coin.id}`}>
          <Image
            src={coin.image}
            alt={coin.name}
            height={isNotSmallerScreen ? "10vh" : "7vh"}
            style={{ marginBottom: 10 }}
            ></Image>
         <Stat>
       <HStack>
       <StatLabel fontSize={'xl'} textAlign='center'>{coin.symbol} &nbsp;</StatLabel>
      
      <StatNumber color={profit?'green.400':'red.400'} fontSize={'18'} >
      <StatArrow type={profit?"increase":"decrease"} color={profit?'green.400':'red.400'} fontSize={'s'} />{profit && "+"}{coin.price_change_percentage_24h.toFixed(2)}
      </StatNumber>
       </HStack>
            
      <Flex justifyContent={'center'} pr='8'>
      <StatNumber fontWeight={400} fontSize={'18'} >
            {sym} {numberWithCommas(coin.current_price.toFixed(2))}
        </StatNumber>
      </Flex>
          </Stat>
      
        </Link>
      </Flex>
    );
  });
  return (
    <Flex
      height="10vh"
      width={isNotSmallerScreen ? "80vw" : "90vw"}
      justifyContent={"center"}
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayDirection={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={{ 0: { items: 2 }, 512: { items: 4 } }}
        autoPlay
        disableButtonsControls
        items={items}
      ></AliceCarousel>
    </Flex>
  );
}
