import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import {
  Flex,
  useMediaQuery,
  useColorMode,
  Image,
  Text,
  Heading,
  Divider,
  Box
} from "@chakra-ui/react";
import CoinInfo from "../components/CoinInfo";

export default function Coinpage() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();
  const [coin, setCoin] = React.useState();
  const { cur, sym } = CryptoState();
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  React.useEffect(() => {
    fetchCoin();
    setLoading(!loading);
  }, [cur]);
  const htmll = (
    <span
      dangerouslySetInnerHTML={{ __html: coin?.description?.en.split(". ")[0] }}
    ></span>
  );
  return (
    <>
      <Flex direction={isNotSmallerScreen ? "row" : "column"}>
        <Flex
          width={isNotSmallerScreen ? "30vw" : "100vw"}
          justifyContent="center"
          direction={'column'} alignItems='center'
          p='8' borderRight="2px solid gray"  mt='25'
        >
          <Image pb='5' width={isNotSmallerScreen?"50%":"60%"} src={coin?.image.large}></Image>
          <Heading  pb='5'>{coin?.name}</Heading>
          
          <Text fontSize='18'>{htmll}</Text>
          <Box width={isNotSmallerScreen?'90%':'95%'}>
         <Flex alignItems='center'  pt='8'> <Heading mr="1vw"  fontSize="2xl">Rank : </Heading><Text fontSize="2xl">{coin?.coingecko_rank}</Text></Flex>
         <Flex alignItems='center'  pt='8'> <Heading mr="1vw"  fontSize="2xl">Current Price : </Heading><Text fontSize="2xl">{sym} {
               coin?.market_data?.current_price[cur.toLowerCase()].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</Text></Flex>
         <Flex alignItems='center'  pt='8'> <Heading mr="1vw"  fontSize="2xl">Market Cap : </Heading><Text fontSize="2xl">{" "}{sym} {
                coin?.market_data?.market_cap[cur.toLowerCase()]
                  ?.toString()
                  ?.slice(0, -6).replace(/\B(?=(\d{3})+(?!\d))/g,",")
              }
              M</Text></Flex>

          </Box>
        </Flex>
        
        <Flex></Flex>
      </Flex>
    </>
  );
}
