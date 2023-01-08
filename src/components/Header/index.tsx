import { Flex, Image } from "@chakra-ui/react";
import { ButtonW } from "../Button";
export const Header = () => {
  return (
    <Flex
      bg="#000130"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="0.5rem"
      w="100%"
    >
      <Image src="/image/logo.svg" alt="logo" objectFit="cover" width="160px" />

      <ButtonW title="login" bg="#9101f5" />
    </Flex>
  );
};
