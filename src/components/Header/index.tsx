import { Flex, Image, AvatarGroup, Avatar, Heading } from "@chakra-ui/react";
import { useState } from "react";


export const Header = () => {
  const [users,setUsers] = useState( [{
    id: 1,
    name: 'Josis',
    avatarImg:'https://i.pinimg.com/564x/07/4a/f7/074af7897a6ee02de6b90176e3f70f73.jpg',
  }])

  return (
    <Flex
    bg="#000130">
    <Flex
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="0.5rem"
      w="100%"
    >
      <Image src="/image/logo.svg" alt="logo" objectFit="cover" width="160px" />
      </Flex>
     
      {users?.map((user) => (
        
        <div key={user.id}>
         <AvatarGroup>
           <Avatar bg="gray.300" src={user.avatarImg}/>
          </AvatarGroup>
  
          <Flex flexDirection='column' justifyContent='center'>
  
            <Heading  as='h2' size='sm' color='white'>
            Olá,{user.name}
            </Heading>
          </Flex>
      </div>
 ))}         

    </Flex>
  );
};
