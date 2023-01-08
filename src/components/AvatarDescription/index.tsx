import { Avatar, Flex, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

export function AvatarDescription() {
  return (
    <Flex alignItems="center" w="100%">
      <Flex padding="1rem">
        <Avatar
          showBorder
          borderColor="#0c051f"
          size="2xl"
          name="AvatarDescription"
          src="https://bit.ly/dan-abramov"
        />
      </Flex>

      <Stack spacing={1}>
        <Flex
          justifyContent={{ base: "start", md: "start", xl: "space-between" }}
          alignItems={{ base: "start", md: "start", xl: "center" }}
          flexDirection={{ base: "column", md: "column", xl: "row" }}
        >
          <Text fontSize="2xl" fontWeight="bold">
            Nome de usuário
          </Text>
          <Text fontSize="1.1rem" fontWeight="bold">
            999 Seguidores | 999 Streamers favoritos
          </Text>
        </Flex>
        <Text fontSize="md" noOfLines={[1, 2, 3]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Nisi itaque magnam
          reprehenderit, et animi illo molestias ipsam, reiciendis commodi
          exercitationem harum, veniam corrupti qui modi libero dignissimos
          explicabo similique cum?
        </Text>
      </Stack>
    </Flex>
  );
}
