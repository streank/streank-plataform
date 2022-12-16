import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AvatarDescription } from "../../components/AvatarDescription";
import { Follow } from "../../components/Follow";
import { Header } from "../../components/Header";
import { HeaderPerfil } from "../../components/HeaderPerfil";


const Feed: NextPage = () => {
  return (
    <Flex justifyContent="center" flexDir="column">
      <Header />
      <HeaderPerfil />
      <Flex >
        <AvatarDescription />
        <Follow />
      </Flex>
    </Flex>
  );
};

export default Feed;
