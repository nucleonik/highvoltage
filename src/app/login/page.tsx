import { Img, Input, InputGroup, Stack } from '@chakra-ui/react';
import React from 'react';

const hello = () => {
  return (
    <Stack align="center">
      <Stack flex="1" bg="red" align="center">
        <Img h="50px" w="50px" src="./hvl logo.png" alt="hvl logo" />
      </Stack>
      <Stack align="center">
        <InputGroup>
          <Input pr="10px" type="password" maxW="350px" placeholder="Email" />
        </InputGroup>
      </Stack>
    </Stack>
  );
};

export default hello;
