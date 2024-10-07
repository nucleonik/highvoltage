'use client';
import {
  Button,
  Center,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { setLazyProp } from 'next/dist/server/api-utils';

import React, { useState } from 'react';

const hello = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Stack h="100vh" justifyContent="center" alignItems="center" spacing={5}>
      <Img mb="30px" h="50px" w="50px" src="./hvl logo.png" alt="hvl logo" />

      <Input maxW="350px" pr="10px" type="email" placeholder="Email" />
      <InputGroup maxW="350px">
        <Input
          pr="10px"
          type={show ? 'text' : 'password'}
          placeholder="Password"
        />
        <InputRightElement width="4.5rem">
          <Button size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button onClick={handleLogin} isLoading={loading} minW="350px">
        Login
      </Button>
    </Stack>
  );
};

export default hello;
