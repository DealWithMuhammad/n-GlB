"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

// bg = 'center / cover no-repeat url(/banner-img1.jpg)';

export const Banner = () => {
  return (
    <Box
      background="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGxlYXJuaW5nfGVufDB8fDB8fHww')"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      height={{ base: "240px", lg: "480px" }}
      minH={"600px"}
    >
      <Flex direction="column" justify="center" height="100%">
        <Heading
          color={"#fff"}
          size={{ base: "3xl", lg: "4xl" }}
          lineHeight="4rem"
          fontWeight={"800"}
          ml={{ base: "40px", lg: "40px" }}
          mt={{ base: "0px", lg: "50px" }}
        >
          Empowering <br /> Education for All
        </Heading>
        <Text
          ml={{ base: "40px", lg: "40px" }}
          color={"#fff"}
          fontSize={{ base: "md", lg: "lg" }}
          py="1rem"
        >
          Providing accessible and innovative learning solutions for refugees of
          all ages.
        </Text>
        <Link href="/enroll">
          <Button
            ml={{ base: "40px", lg: "40px" }}
            borderRadius="0px"
            minW="12rem"
            py={6}
            bgColor="transparent"
            border={"1px solid"}
            color="white"
            _hover={{ bgColor: "red", border: "0px solid black" }}
          >
            Enroll Now
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
