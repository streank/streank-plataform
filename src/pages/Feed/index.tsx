import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../../components/Header";

const Feed: NextPage = () => {
  return (
    <Flex justifyContent="center" flexDir="column">
      <Header />
    </Flex>
  );
};

export default Feed;
