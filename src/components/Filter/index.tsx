import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Text,
} from "@chakra-ui/react";

export function Filter() {
  return (
    <Flex justifyContent="center" padding="1rem">
      <Tabs size="lg" variant="solid-rounded" colorScheme="#0c051f">
        <TabList background="#0c051f" borderRadius="100px" color="orange.400">
          <Tab
            _hover={{ color: "#50577A" }}
            fontWeight={"bold"}
            color={"orange.400"}
          >
            Postagens
          </Tab>
          <Text alignSelf="center">|</Text>
          <Tab
            _hover={{ color: "#50577A" }}
            fontWeight="bold"
            color="orange.400"
          >
            Fotos
          </Tab>
          <Text alignSelf="center">|</Text>
          <Tab
            _hover={{ color: "#50577A" }}
            fontWeight="bold"
            color="orange.400"
          >
            Vídeos
          </Tab>
          <Text alignSelf={"center"}>|</Text>
          <Tab
            _hover={{ color: "#50577A" }}
            fontWeight="bold"
            color="orange.400"
          >
            Lives
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Em construção! (Postagens)</p>
          </TabPanel>
          <TabPanel>
            <p>Em construção! (Fotos)</p>
          </TabPanel>
          <TabPanel>
            <p>Em construção! (Vídeos)</p>
          </TabPanel>
          <TabPanel>
            <p>Em construção! (Lives)</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
