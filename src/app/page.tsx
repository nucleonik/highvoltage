'use client';

import { Button, Stack } from '@chakra-ui/react';
import React from 'react';

const page = () => {
  return (
    <Stack h="100vh" justifyContent="center" alignItems="center" spacing={6}>
      <Button _hover={{ bg: '#E0A75E' }} minW="240px" size="lg">
        Tresemme
      </Button>
      <Button _hover={{ bg: '#E0A75E' }} minW="240px" size="lg">
        Petromax
      </Button>
    </Stack>
  );
};

export default page;
