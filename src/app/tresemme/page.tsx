'use client';
import {
  Button,
  Checkbox,
  Flex,
  Img,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const page = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [parlourCode, setParlourCode] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const isFormComplete = name && phoneNumber && age && parlourCode && isChecked;

  return (
    <Stack>
      <Stack h="100vh" alignItems="center" spacing={4}>
        <Img
          mt="80px"
          mb="20px"
          h="120px"
          src="/TRESEMME.png"
          alt="tresemme logo"
        />
        <Flex
          borderTopColor="#A78C61"
          flexDirection="column"
          borderRadius="8px"
          borderRight="1px solid #DDDDDD"
          borderLeft="1px solid #DDDDDD"
          borderBottom="1px solid #DDDDDD"
          borderTop="8px solid #A78C61"
          minH="126px"
          width={{ base: '380px', md: '570px' }}
          p="24px"
        >
          <Text>Please enter your name</Text>
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            variant="flushed"
            placeholder="Your Answer"
          />
        </Flex>
        <Flex
          borderTopColor="#A78C61"
          flexDirection="column"
          borderRadius="8px"
          borderRight="1px solid #DDDDDD"
          borderLeft="1px solid #DDDDDD"
          borderBottom="1px solid #DDDDDD"
          borderTop="1px solid #DDDDDD"
          minH="126px"
          width={{ base: '380px', md: '570px' }}
          p="24px"
        >
          <Text>Phone Number</Text>
          <Input
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="number"
            variant="flushed"
            placeholder="01x xxxx xxxx"
          />
        </Flex>
        <Flex
          borderTopColor="#A78C61"
          flexDirection="column"
          borderRadius="8px"
          borderRight="1px solid #DDDDDD"
          borderLeft="1px solid #DDDDDD"
          borderBottom="1px solid #DDDDDD"
          borderTop="1px solid #DDDDDD"
          minH="126px"
          width={{ base: '380px', md: '570px' }}
          p="24px"
        >
          <Text>Age</Text>
          <Input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            variant="flushed"
            placeholder="Your Answer"
          />
        </Flex>
        <Flex
          borderTopColor="#A78C61"
          flexDirection="column"
          borderRadius="8px"
          borderRight="1px solid #DDDDDD"
          borderLeft="1px solid #DDDDDD"
          borderBottom="1px solid #DDDDDD"
          borderTop="1px solid #DDDDDD"
          minH="126px"
          width={{ base: '380px', md: '570px' }}
          p="24px"
        >
          <Text>Parlour Code</Text>
          <Input
            onChange={(e) => setParlourCode(e.target.value)}
            type="number"
            variant="flushed"
            placeholder="Your Answer"
          />
        </Flex>
        <Flex
          borderTopColor="#A78C61"
          flexDirection="row"
          borderRadius="8px"
          borderRight="1px solid #DDDDDD"
          borderLeft="1px solid #DDDDDD"
          borderBottom="1px solid #DDDDDD"
          borderTop="1px solid #DDDDDD"
          minH="126px"
          width={{ base: '380px', md: '570px' }}
          p="24px"
        >
          <Checkbox
            onChange={(e) => setIsChecked(e.target.checked)}
            pr="10px"
            mt="-50px"
          ></Checkbox>
          <Text fontSize="14px">
            আমি সম্মতি দিচ্ছি যে আমার বয়স ১৮ বছরের উর্দ্ধে। আমি ইউনিলিভার
            বাংলাদেশ লিমিটেড এবং তার সাথে সম্পর্কিত তৃতীয় পক্ষকে আমার ব্যক্তিগত
            তথ্য ব্যবহার, সংরক্ষণ, প্রক্রিয়াকরণ এবং আমার সাথে যোগাযোগ করার
            অনুমতি দিচ্ছি।
          </Text>
        </Flex>
      </Stack>
      <Stack alignItems="center">
        <Button
          p="15px"
          bg={isFormComplete ? '#A78C61' : 'gray.300'}
          color="white"
          _hover={{ bg: isFormComplete ? '#A78C61' : 'gray.300' }}
          disabled={!isFormComplete}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
        >
          Get OTP
        </Button>
      </Stack>
    </Stack>
  );
};

export default page;
