import React from "react";
import {
  HStack,
  Heading,
  Select,
  IconButton,
  useMediaQuery,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { FaSun, FaGithub } from "react-icons/fa";

export default function Header() {
    const {toggleColorMode}=useColorMode();
  const [isNotSmallerScreen] =useMediaQuery("(min-width:600px)")
  return (
    <HStack
      bg="gray.900"
      height="16"
      alignContent={"center"}
      alignItems="center"
      justifyContent="space-between"
      width="100vw"
    >
      <Heading color="goldenrod" pl={isNotSmallerScreen?"10":"5"} fontSize={isNotSmallerScreen?"30":'25'}>
        Crypto
      </Heading>
      <HStack justifyContent={"space-between"} width={isNotSmallerScreen?"30vw":"46vw"}>
        <Select width={isNotSmallerScreen?"30":"40"} placeholder="select" fontSize="xs">
          <option value="usd">INR</option>
          <option value="inr">USD</option>
        </Select>
        <HStack pr="20">
          <IconButton mr={isNotSmallerScreen?"5":"2"} icon={<FaSun />} color="white" bg="gray" isRound />
          <a href="https://github.com/jackson-kanchanapally" >
            
            <IconButton icon={<FaGithub />} color="black"onClick={toggleColorMode} isRound fontSize='25'/>
          </a>
        </HStack>
      </HStack>
    </HStack>
  );
}
