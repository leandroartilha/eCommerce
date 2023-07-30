import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import GenreList from "./components/GenreList";

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
          <GridItem area={"aside"}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Products />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
