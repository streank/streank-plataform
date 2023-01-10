import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import Feed from "./Feed";

const Home: NextPage = () => {
  return (

    <>
      <Header/>
    <Flex> 
      <Flex bg='blue' w='18%' h='700px'> </Flex>     
      
      <Flex bg='GREEN' w='62%' h='700px'> <Feed/> </Flex>
      
      <Flex  w='20%' h='700px'>  <SideBar/> </Flex>
    </Flex>
    </>
    )
  };

export default Home;
