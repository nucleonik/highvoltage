'use client';
import { Checkbox, Flex, Img, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const page = () => {
  return (
    <Stack h='100vh' alignItems='center' spacing={4}>
      <Img mt='80px' mb='20px' h='120px' src='/TRESEMME.png' alt='tresemme logo'/>
      <Flex 
      borderTopColor='#A78C61'
      flexDirection='column'
      borderRadius="8px"  
      borderRight='1px solid #DDDDDD' 
      borderLeft='1px solid #DDDDDD' 
      borderBottom='1px solid #DDDDDD' 
      borderTop='8px solid #A78C61'
      minH='126px' 
      width={{base: '380px', md: '570px'}}
      
      p='24px'>
      
        <Text>Please enter your name</Text>
        <Input type='text' variant='flushed' placeholder='Your Answer' />
    </Flex>
    <Flex 
      borderTopColor='#A78C61'
      flexDirection='column'
      borderRadius="8px"  
      borderRight='1px solid #DDDDDD' 
      borderLeft='1px solid #DDDDDD' 
      borderBottom='1px solid #DDDDDD' 
      borderTop='1px solid #DDDDDD'
      minH='126px' 
      width={{base: '380px', md: '570px'}}
      p='24px'>
      
        <Text>Phone Number</Text>
        <Input type='number' variant='flushed' placeholder='01x xxxx xxxx' />
    </Flex>
    <Flex 
      borderTopColor='#A78C61'
      flexDirection='column'
      borderRadius="8px"  
      borderRight='1px solid #DDDDDD' 
      borderLeft='1px solid #DDDDDD' 
      borderBottom='1px solid #DDDDDD' 
      borderTop='1px solid #DDDDDD'
      minH='126px' 
      width={{base: '380px', md: '570px'}}
      p='24px'>
      
        <Text>Age</Text>
        <Input type='number' variant='flushed' placeholder='Your Answer' />
    </Flex>
    <Flex 
      borderTopColor='#A78C61'
      flexDirection='column'
      borderRadius="8px"  
      borderRight='1px solid #DDDDDD' 
      borderLeft='1px solid #DDDDDD' 
      borderBottom='1px solid #DDDDDD' 
      borderTop='1px solid #DDDDDD'
      minH='126px' 
      width={{base: '380px', md: '570px'}}
      p='24px'>
      
        <Text>Parlour Code</Text>
        <Input type='number' variant='flushed' placeholder='Your Answer' />
    </Flex>
    <Flex 
      borderTopColor='#A78C61'
      flexDirection='row'
      borderRadius="8px"  
      borderRight='1px solid #DDDDDD' 
      borderLeft='1px solid #DDDDDD' 
      borderBottom='1px solid #DDDDDD' 
      borderTop='1px solid #DDDDDD'
      minH='126px' 
      width={{base: '380px', md: '570px'}}
      p='24px'>
      
        <Checkbox></Checkbox>
        <Text fontSize='14px'>আমি সম্মতি দিচ্ছি যে আমার বয়স ১৮ বছরের উর্দ্ধে। আমি ইউনিলিভার বাংলাদেশ লিমিটেড এবং তার সাথে সম্পর্কিত তৃতীয় পক্ষকে আমার ব্যক্তিগত তথ্য ব্যবহার, সংরক্ষণ, প্রক্রিয়াকরণ এবং আমার সাথে যোগাযোগ করার অনুমতি দিচ্ছি।</Text>
    </Flex>
    </Stack>
  );
};

export default page;
