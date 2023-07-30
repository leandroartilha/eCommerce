import { Badge, Box } from "@chakra-ui/react";

interface Props {
  score: number;
}

function ScoreCritica({ score }: Props) {
  let corNum = score > 80 ? "green.200" : "red.200";

  return (
    <>
      <Badge colorScheme={corNum} color={corNum} paddingX={2}>
        {score}
      </Badge>
    </>
  );
}

export default ScoreCritica;
