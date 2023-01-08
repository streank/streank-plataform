import { Flex, Text } from "@chakra-ui/react";

export function Follow() {
  return (
    <Flex
      alignItems="center"
      bg="pink.600"
      right="20"
      bottom="72"
      position="absolute"
    >
      <Text fontSize="1.1rem" fontWeight={"bold"}>
        999 Seguidores | 999 Streamers favoritos
      </Text>
    </Flex>
  );
}
