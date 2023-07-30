import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const ProductSkeleton = () => {
  return (
    <>
      <Card width="300px" margin="1rem" boxShadow="dark-lg" rounded="md">
        <Skeleton width="300px" height="300px" borderRadius="lg" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default ProductSkeleton;
