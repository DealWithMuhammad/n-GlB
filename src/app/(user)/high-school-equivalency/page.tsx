import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  Text,
  Link,
} from "@chakra-ui/react";
import { Hero } from "@src/components/Hero/Hero";
import React from "react";

function page() {
  return (
    <>
      <Box
        background="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWR5aW5nfGVufDB8fDB8fHww')"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        height={{ base: "200px", lg: "350px" }}
        minH={"300px"}
      >
        <Flex
          direction="column"
          textAlign={"center"}
          justify="center"
          height="100%"
        >
          <Heading
            color={"#fff"}
            size={{ base: "2xl", lg: "4xl" }}
            lineHeight="4rem"
            fontWeight={"800"}
            mt={{ base: "0px", lg: "70px" }}
            textAlign={"center"}
          >
            Unlocking Potential
          </Heading>
          <Heading
            color={"#fff"}
            size={{ base: "lg", lg: "lg" }}
            lineHeight="4rem"
            fontWeight={"400"}
            mt={{ base: "0px", lg: "3px" }}
            textAlign={"center"}
          >
            American High School Equivalency for Youth and Adults.
          </Heading>
        </Flex>
      </Box>
      {/* Se3ction 2 */}

      <Box mx={{ base: "20", md: "10" }}>
        <Flex
          py="2rem"
          w={{ base: "100%", lg: "100%" }}
          justify="space-center"
          mx="auto"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box mr={6} w={{ base: "100%", lg: "120%" }}>
            <Box fontSize={{ base: 15, lg: 16 }} textAlign={"left"}>
              {/* Box 1 */}

              <Box>
                <Text>
                  Our High School Equivalency Initiative aims to empower
                  individuals who did not complete their high school education
                  by offering comprehensive GED coaching and support. We
                  recognize the importance of education as a fundamental tool
                  for personal growth, career advancement, and overall success.
                  By providing GED coaching, we seek to bridge the educational
                  gap for these individuals, equipping them with the knowledge
                  and skills necessary to earn their high school equivalency
                  credential and open doors to a brighter future. Through
                  personalized guidance, interactive learning resources, and a
                  supportive community, this initiative is dedicated to helping
                  individuals achieve their academic goals and unlocking
                  opportunities for further education and career prospects.
                </Text>
              </Box>
              <Box mt={8}>
                <Text>
                  GED Stands for 'general Education Development" is an
                  equivalent of United States High school diploma. The diploma
                  is accredited by US state District of Columbia (DC) and
                  accepted at major colleges and universities all over the world
                  for admission in: Engineering, Medical, Computer Science, Law,
                  business, finance, etc. GED test includes following four
                  subjects:
                </Text>
                <UnorderedList my={8} ml={{ base: 12, lg: 16 }}>
                  <ListItem>Reasoning Through Language Arts (RLA)</ListItem>
                  <ListItem>Methmatical Reasoning</ListItem>
                  <ListItem>Science</ListItem>
                  <ListItem>Social Science</ListItem>
                </UnorderedList>
              </Box>
              <Box my={8}>
                <Text>
                  GLB Education Online prepares students for GED testing based
                  on their age (you must be 18 to take the test) and educational
                  experience. Depending on their educational background, a
                  student can be prepared in as little as 6 months to 2 years.
                  Once prepared and accessed, the student may register for a
                  test online by paying a testing fee of $80 (USD) each exam,
                  schedule a test, and take the test at the testing facility in
                  Kuala Lumpur, Malaysia. After passing all four tests, the
                  student obtains an immediate diploma that is accepted at major
                  colleges and universities of choice. For more information
                  visit
                  <Link
                    ml={2}
                    color={"blue"}
                    textDecoration={"underline"}
                    href="https://ged.com/"
                  >
                    www.ged.com
                  </Link>{" "}
                  or
                  <Link
                    ml={2}
                    color={"blue"}
                    textDecoration={"underline"}
                    href="/contact"
                  >
                    contact us
                  </Link>
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Image src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1316,fit=crop/m6LDjVMDbgilEVxQ/image001-mv04WQa60Es1KW6G.png" />
            <Box position={"relative"} bottom={{ base: 100, lg: 180 }}>
              <Box
                fontSize={{ base: "xs", lg: "15" }}
                textAlign="center"
                bgColor={"#ffc605"}
              >
                <Text>
                  Join GLB Education Online's GED Coaching Classes! Seek your
                  credential, get personalized coaching. Contact us for a free
                  assessment and unlock new possibilities. Let's start this
                  journey together. Achieve your goals with us!
                </Text>
              </Box>
              <Link href="/enroll">
                <Button
                  borderRadius="0px"
                  minW="12rem"
                  py={6}
                  bgColor="red"
                  color="white"
                  mt={5}
                  _hover={{ bgColor: "#ffc605", border: "0px solid black" }}
                >
                  Enroll Now
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default page;
