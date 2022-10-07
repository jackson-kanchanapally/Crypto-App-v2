import { React} from "react";
import {
  HStack,
  Flex,
  Heading,
  Select,
  IconButton,
  useMediaQuery,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";
import { CryptoState } from "../CryptoContext";

export default function Header() {
  const { cur, setCur } = CryptoState();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const changeCur = (e) => {
    setCur(e.target.value);
    e.preventDefault();
  };

  return (
    <HStack
      bg={isDark ? "gray.900" : "gray.300"}
      height="16"
      alignContent={"center"}
      alignItems="center"
      justifyContent="space-between"
     
    >
       <Flex justifyContent="space-between" >
      <Heading
        pl={isNotSmallerScreen ? "10" : "10"}
        fontSize={isNotSmallerScreen ? "30" : "25"} mr={isNotSmallerScreen?'70vw':'20vw'}
      >
        Crypto
      </Heading>
      
        <Select
       
          variant="outline"
          borderColor={isDark ? "gray.700" : "gray.500"}
          width={isNotSmallerScreen ? "35" : "20"}
          fontSize="xs"
          value={cur}
          mr={isNotSmallerScreen?"10":"3"}
          onChange={changeCur}
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </Select>
        
          <IconButton
            mr={isNotSmallerScreen ? "5" : "2"}
            icon={isDark ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            color="gray.200"
            isRound
            bg={isDark ? "gray.600" : "gray.600"}
            _hover={
              isDark ? { background: "gray.800" } : { background: "gray.400" }
            }
          />
          <a href="https://github.com/jackson-kanchanapally">
            <IconButton
              icon={<FaGithub />}
              isRound
              color="gray.200"
              fontSize="25"
              bg={isDark ? "gray.600" : "gray.600"}
              _hover={
                isDark ? { background: "gray.800" } : { background: "gray.400" }
              }
            />
          </a>
    
      
      </Flex>
    </HStack>
  );
}
