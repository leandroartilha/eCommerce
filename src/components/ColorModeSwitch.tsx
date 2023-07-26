import { Switch, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch onChange={toggleColorMode}>
      Tema {colorMode === "light" ? "Claro" : "Escuro"}
    </Switch>
  );
}

export default ColorModeSwitch;
