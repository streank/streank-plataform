import { Avatar, Flex, Stack, StackDivider, Text, Wrap, WrapItem } from "@chakra-ui/react"

export function AvatarDescription() {
    return (
        <Flex alignItems={"center"}>
            <Wrap >
                <WrapItem padding={"10px"}>
                    <Avatar showBorder borderColor={"#0c051f"} size='xl' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
            </Wrap>

            <Stack spacing={1}>
                <Text fontSize='2xl' fontWeight={"bold"}>Nome de usuário</Text>
                <Text fontSize='md'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
            </Stack>
        </Flex>
    )
}