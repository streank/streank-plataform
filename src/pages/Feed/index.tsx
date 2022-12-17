import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AvatarDescription } from "../../components/AvatarDescription";
import { Follow } from "../../components/Follow";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";


const Feed: NextPage = () => {
  return (
    <Flex justifyContent="center" flexDir="column">
      <Header />
      <Banner />
      <Flex >
        <AvatarDescription />
        <Follow />
      </Flex>
    </Flex>
  );
};

export default Feed;
