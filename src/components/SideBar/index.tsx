import { Flex, InputGroup, Stack, Input, Box, InputLeftElement, Button } from "@chakra-ui/react";
import { SearchIcon, BellIcon, CalendarIcon, StarIcon } from '@chakra-ui/icons'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
export const SideBar = () => {
  return (
    <Flex
      p={'20px'}
      flexDirection={"column"}
      bg='#F5F5F5'
    >
      <Flex flexDirection={'column'}>
        <Stack>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input type='src'
              placeholder='Pesquisa'
              textColor='white'
              background='#00002D'
              htmlSize={14}
              width='auto' />
          </InputGroup>
        </Stack>

        <Flex flexDirection={'column'}>

          <Accordion defaultIndex={[0]} allowMultiple>


            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: '#9001F5', color: 'white' }}>
                  <Box textAlign='left'>
                    <BellIcon />
                  </Box>
                  <AccordionIcon />
                </AccordionButton >
              </h2>
              <AccordionPanel pb={3}>
                Notifications
              </AccordionPanel>
            </AccordionItem>



            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: '#9001F5', color: 'white' }}>
                  <Box textAlign='left'>
                    <CalendarIcon />
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel _hover={{ bg: 'white', color: '#BA00ED' }} pb={4}>
                Neverland| 12/03
                Evento 2
                Evento 3
                Evento 4
                Evento 5

              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: '#9001F5', color: 'white' }}>
                  <Box textAlign='left'>
                    <StarIcon />
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Communities
              </AccordionPanel>
            </AccordionItem>

          </Accordion>


        </Flex>


      </Flex>
    </Flex>
  );
};