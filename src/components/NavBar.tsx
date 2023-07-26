import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"}>
      <Image
        src="src/assets/carrinho.png"
        alt="Dan Abramov"
        boxSize="90px"
        margin="0.8em"
      />
      <Box>
        <Heading>Vendas</Heading>
        <Text fontSize={15} mb={0}>
          Saia daqui no kit
        </Text>
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
