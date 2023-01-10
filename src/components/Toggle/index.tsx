
import {BellIcon} from '@chakra-ui/icons'
import{ Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box,} from '@chakra-ui/react'

export const Toggles = () => {

    return (
        <>
         <Accordion defaultIndex={[0]} allowMultiple> 
        <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <BellIcon />
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Notifications
    </AccordionPanel>
  </AccordionItem>

         </Accordion>
        </>
    )
}