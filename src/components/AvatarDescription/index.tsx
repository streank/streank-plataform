import { Avatar, Flex, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

export function AvatarDescription() {
  return (
    <Flex alignItems="center" maxWidth="70rem">
      <Wrap>
        <WrapItem padding="20px" minWidth="40rem">
          <Avatar
            marginRight="230px"
            showBorder
            borderColor="#0c051f"
            size="2xl"
            name="AvatarDescription"
            src="https://bit.ly/dan-abramov"
          />
        </WrapItem>
      </Wrap>

      <Stack spacing={1}>
        <Flex justifyContent="space-between" alignItems="center">
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
