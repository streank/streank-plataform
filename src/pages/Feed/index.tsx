import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AvatarDescription } from "../../components/AvatarDescription";
import { Header } from "../../components/Header";


const Feed: NextPage = () => {
  return (
    <Flex justifyContent="center" flexDir="column">
      <Header />
      <AvatarDescription />
    </Flex>
  );
};

export default Feed;
