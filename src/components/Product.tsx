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
} from "@chakra-ui/react";

interface Produto {
  name: string;
  backgroud_image: string;
}

function Product({ name, backgroud_image }: Produto) {
  return (
    <>
      <Card maxW="sm" margin="1rem" boxShadow="dark-lg" rounded="md">
        <CardBody>
          <Image src={backgroud_image} alt="Imagem-Produto" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>

            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
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
