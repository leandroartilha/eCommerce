import { Box, Button } from "@chakra-ui/react";
import { Skeleton, Stack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <h1>E-Commerce</h1>
      <Button colorScheme="blue">Button</Button>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
      {/* <Button
        isLoading
        colorScheme="blue"
        spinner={<BeatLoader size={8} color="white" />}
      >
        Click me
      </Button> */}
      <Box color="gray.50" />
    </>
  );
}

export default App;
