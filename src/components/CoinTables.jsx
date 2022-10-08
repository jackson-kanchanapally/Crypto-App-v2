import axios from "axios";
import React from "react";
import { GrFormPrevious , GrFormNext} from "react-icons/gr";
import { CoinList } from "../config/api";
import { CryptoState } from "../CryptoContext";
import {
  Flex,
  Heading,
  TableContainer,
  Table,
  Tr,
  Image,
  Tbody,
  Th,
  Thead,
  Td,
  useMediaQuery,
  StatArrow,
  Stat,
  Progress,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CoinTables() {
    const navigate=useNavigate()
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark=colorMode==='dark'
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const [coins, setCoins] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { cur, sym } = CryptoState();
  const fetchCoins = async () => {
    const { data } = await axios.get(CoinList(cur));
    setCoins(data);
    setLoading(!loading);
  };
  React.useEffect(() => {
    fetchCoins();
  }, [cur]);
  const coinList = coins.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    return (
      <Tr onClick={() => navigate(`/coins/${coin.id}`)} cursor="pointer" _hover={isDark?{bg:'gray.900'}:{bg:'gray.200'}}>
        <Td>
          <Flex alignItems={"center"}>
            <Image
              src={coin.image}
              width={isNotSmallerScreen ? "12" : "8"}
              pr="3"
            ></Image>
            {coin.name}
            <Heading fontSize="15" pl="3" fontWeight={"600"}>
              {coin.symbol.toUpperCase()}
            </Heading>
          </Flex>
        </Td>
        <Td>
          {sym}
          {numberWithCommas(coin.current_price)}
        </Td>
        <Td color={profit ? "green.400" : "red.400"}>
          <Stat>
            <StatArrow type={profit ? "increase" : "decrease"} />
            {profit && "+"}
            {coin.price_change_percentage_24h.toFixed(2)}
          </Stat>
        </Td>
        <Td>
          {sym}
          {numberWithCommas(coin.market_cap.toString().slice(0,-6))}M
        </Td>
      </Tr>
    );
  });
  return (
    <>
      <Flex textAlign={"center"} direction="column" alignItems="center">
        <Heading pt="10" pb="8" fontWeight={"150"}>
          Cryptocurrency Prices by Market Cap
        </Heading>
        <TableContainer width="90vw">
          {loading ? (
            <Progress size="xs" isIndeterminate />
          ) : (
            <Table>
              <Thead bg={isDark?"gray.700":"gray.200"}>
                <Tr>
                  <Th fontSize={"15"}>Coin</Th>
                  <Th fontSize={"15"}>Price</Th>
                  <Th fontSize={"15"}>24h Change</Th>
                  <Th fontSize={"15"}>Market Cap</Th>
                </Tr>
              </Thead>
              <Tbody>{coinList.slice(0, 10)}</Tbody>
            </Table>
          )}
        </TableContainer>
        <Flex mt='10vh' mb='10vh'>
            <IconButton isRound mr='20' icon={<GrFormPrevious/>} backgroundColor={isDark?"gray.500":"gray.400"}></IconButton>
            <IconButton isRound icon={<GrFormNext/>} backgroundColor={isDark?"gray.500":"gray.400"}></IconButton>
        </Flex>
      </Flex>
    </>
  );
}
