import { useEffect, useState } from "react";
import apiClient from "../api-client";
import Product from "./Product";
import { Spinner, SimpleGrid } from "@chakra-ui/react";

function Products() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setLoading] = useState(false);

  interface Game {
    id: number;
    name: string;
    background_image: string;
  }

  interface ListaGame {
    results: Game[];
  }

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<ListaGame>("/games")
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <>
      {isLoading && (
        <Spinner
          className="mt-5"
          thickness="15px"
          speed="0.8s"
          emptyColor="gray.200"
          color="green.300"
          width="20rem"
          height="20rem"
        />
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <li key={game.id}>
            <Product name={game.name} backgroud_image={game.background_image} />
          </li>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Products;
