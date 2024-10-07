'use client';

import { Button, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const page = () => {
  const [loading, setLoading] = React.useState(false);


  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

    }, 2000);
  };

  return (
    <Stack h="100vh" justifyContent="center" alignItems="center" spacing={6}>
      <Link href="../tresemme/">
        <Button
          _hover={{ bg: '#E0A75E', color: 'white' }}
          isLoading={loading}
          onClick={handleLoading}
          minW="240px"
          size="lg"
        >
          Tresemme
        </Button>
      </Link>
      <Button _hover={{ bg: '#E0A75E', color: 'white' }} minW="240px" size="lg">
        Petromax
      </Button>
    </Stack>
  );
};

export default page;
