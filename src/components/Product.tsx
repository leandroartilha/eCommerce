import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Grid,
  SimpleGrid,
  Box,
  HStack,
} from "@chakra-ui/react";

import { Game } from "../interfaces/game";
import PlatformIconList from "./PlatformIconList";
import ScoreCritica from "./ScoreCritica";
import getCropUrl from "../crop-image";

interface Props {
  game: Game;
}

function Product({ game }: Props) {
  return (
    <>
      <Card maxW="lg" boxShadow="dark-lg" rounded="md">
        <CardBody>
          <Image
            src={getCropUrl(game.background_image)}
            alt="Imagem-Produto"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{game.name}</Heading>

            <HStack justifyContent={"space-between"}>
              <SimpleGrid columns={4} spacing={8} marginLeft={5}>
                <PlatformIconList
                  platforms={game.parent_platforms.map((p) => p.platform)}
                />
              </SimpleGrid>
              <ScoreCritica score={game.metacritic} />
            </HStack>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Button variant="solid" colorScheme="blue">
              Comprar
            </Button>
            <Button variant="ghost" colorScheme="blue">
              + Carrinho
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default Product;
