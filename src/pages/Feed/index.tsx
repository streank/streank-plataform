import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AvatarDescription } from "../../components/AvatarDescription";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Filter } from "../../components/Filter";

const Feed: NextPage = () => {
  return (
    <Flex flexDir="column" h="100vh" alignItems="center" w="100%">
      <Header />
      <Banner />

      <Flex w="90%" h="auto">
        <AvatarDescription />
      </Flex>

      <Filter />
    </Flex>
  );
};

export default Feed;
