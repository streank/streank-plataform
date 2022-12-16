import { Box, Flex, Text, Image } from "@chakra-ui/react";

export function HeaderPerfil() {
    return (
        <Flex blockSize={"18rem"} width= {"80%"} alignSelf={"center"} margin={"2%"}>
            <Image borderRadius={"4rem"} src='https://i.pinimg.com/originals/62/02/b9/6202b931f3d654284e53d6a3e8616a4a.jpg' alt='Header' />
        </Flex>
    )
}
