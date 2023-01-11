import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import Feed from "./Feed";

const Home: NextPage = () => {
  return (

    <>
      <Header />
      <Flex>
        <Flex w='15%' h='100vh'> <SideBar /> </Flex>
        <Flex w='70%' h='100vh'> <Feed /> </Flex>
        <Flex bg='gray' w='15%' h='100vh'> </Flex>
      </Flex>
    </>
  )
};

export default Home;
