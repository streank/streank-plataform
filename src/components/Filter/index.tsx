import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Post } from "../Post/indetx";

export function Filter() {
  return (
    <Flex justifyContent="center" padding="1rem" w="96%">
      <Tabs size="lg" variant="solid-rounded" colorScheme="#0c051f" w="96%">
        <Flex justifyContent="center" marginBottom="16px">
          <TabList
            background="#0c051f"
            w="400px"
            borderRadius="100px"
            color="orange.400"
          >
            <Tab
              _hover={{ color: "#4B00C2" }}
              fontWeight={"bold"}
              color={"#9001F5"}
            >
              Postagens
            </Tab>
            <Text alignSelf="center">|</Text>
            <Tab
              _hover={{ color: "#4B00C2" }}
              fontWeight="bold"
              color="#9001F5"
            >
              Fotos
            </Tab>
            <Text alignSelf="center">|</Text>
            <Tab
              _hover={{ color: "#4B00C2" }}
              fontWeight="bold"
              color="#9001F5"
            >
              Vídeos
            </Tab>
            <Text alignSelf={"center"}>|</Text>
            <Tab
              _hover={{ color: "#4B00C2" }}
              fontWeight="bold"
              color="#9001F5"
            >
              Lives
            </Tab>
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel bg="purple.300">
            <Post />
          </TabPanel>
          <TabPanel bg="purple.600">
            <p>Em construção! (Fotos)</p>
          </TabPanel>
          <TabPanel bg="purple.700">
            <p>Em construção! (Vídeos)</p>
          </TabPanel>
          <TabPanel bg="purple.900">
            <p>Em construção! (Lives)</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
