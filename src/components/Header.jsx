import { React} from "react";
import {
  HStack,
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
      width="100vw"
    >
      <Heading
        pl={isNotSmallerScreen ? "10" : "5"}
        fontSize={isNotSmallerScreen ? "30" : "25"}
      >
        Crypto
      </Heading>
      <HStack
        justifyContent={"space-between"}
        width={isNotSmallerScreen ? "30vw" : "46vw"}
      >
        <Select
          variant="outline"
          borderColor={isDark ? "gray.700" : "gray.500"}
          width={isNotSmallerScreen ? "30" : "40"}
          fontSize="xs"
          value={cur}
          onChange={changeCur}
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </Select>
        <HStack pr="20">
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
        </HStack>
      </HStack>
    </HStack>
  );
}
