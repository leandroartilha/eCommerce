import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

// 2. Extend the theme with new layer styles

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main"`,
          lg: `"header header" "aside main"`,
        }}
      >
        <GridItem area={"header"} padding="0.5rem">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem bg="pink.300" area={"aside"}>
            aside
          </GridItem>
        </Show>

        <GridItem bg="green.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
