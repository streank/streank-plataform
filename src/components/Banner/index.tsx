import { Box, Flex, Text, Image } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex blockSize={"20rem"} width={"77rem"} alignSelf={"center"} margin={"2%"}>
            <Image src="/image/header.png" alt='Header' />
        </Flex>
    )
}
