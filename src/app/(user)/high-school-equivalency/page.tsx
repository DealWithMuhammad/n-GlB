"use client";
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
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <Box
        background="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGxlYXJuaW5nfGVufDB8fDB8fHww')"
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
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
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
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
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
      {/* Section 3 */}
      <Box bgColor={"#ffc605"} pt={5} px={{ base: 10, md: 20 }}>
        <Box>
          <Heading mb={5}> Why GED?</Heading>
          <Box bgColor={"red"} mx={{ base: 10, md: 20 }}>
            <Flex
              w={{ base: "100%", lg: "100%" }}
              justify={{ base: "center", md: "space-around" }}
              align="center"
              mx="auto"
              flexDir={{ base: "column", md: "row" }}
              color={"white"}
              fontWeight={"bold"}
              textDecoration={"underline"}
            >
              <Box textAlign={"center"}>
                <Box py={3}>
                  <Text> Alternate to HSC/A-Level</Text>
                </Box>
                <Box>
                  <Text>Equivalent to USA High School Diploma</Text>
                </Box>
              </Box>
              <Box textAlign={"center"} py={3}>
                <Box py={3}>
                  <Text>
                    Accepted in USA,Canada, Australia, New Zealand, and more...
                  </Text>
                </Box>
                <Box>
                  <Text>
                    Accepted by a wide range of colleges and Universities
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
        {/* end red section */}
        <Flex
          w={{ base: "100%", lg: "100%" }}
          justify={{ base: "center", md: "space-around" }}
          mx="auto"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Box>
            <UnorderedList fontWeight={700} my={8} ml={{ base: 12, lg: 16 }}>
              <ListItem>Reasoning Through Language Arts (RLA)</ListItem>
              <ListItem>4 Subjects & 4 Exams</ListItem>
              <ListItem>Computer-Based Exams and Instant Result</ListItem>
              <ListItem>4-6 Months Easy to Pass Course</ListItem>
              <ListItem>
                Widely Accepted in the USA, Canada, Australia, Newzealand,
                Malaysia, Thailand, etc.
              </ListItem>
              <ListItem>
                Reccomended to refugees by IOM (International Organization for
                Migration)
              </ListItem>
            </UnorderedList>
            <Box>
              <Heading mb={5}> GED IS FOR?</Heading>
              <UnorderedList fontWeight={700} my={8} ml={{ base: 12, lg: 16 }}>
                <ListItem>
                  Individuals who have successfully completed O-Levels
                </ListItem>
                <ListItem>Individuals who have completed SSC</ListItem>
                <ListItem>Holders of Ordinary Level</ListItem>
                <ListItem>
                  Individuals who were dropped out of Eduation due to unsual
                  circumstanced (USA)
                </ListItem>
                <ListItem>Individuals with study gap</ListItem>
                <ListItem>
                  Ideal for refugees and displaced citizens with limited
                  finances and study gap
                </ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading mb={5}>WHY GLB?</Heading>
              <UnorderedList fontWeight={700} my={8} ml={{ base: 12, lg: 16 }}>
                <ListItem>Teachers with GED Background and Experience</ListItem>
                <ListItem>GED Aligned Resources & Mocks</ListItem>
                <ListItem>5 Days/week Classes</ListItem>
                <ListItem>12 Free Practice Tests</ListItem>
                <ListItem>
                  Intensive Care and Doubt Classes for Weak Students
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
          {/* divider */}
          <Box mt={3}>
            <Box p={8} bgColor={"#dddddd"}>
              <Heading fontSize={18} mb={4}>
                Successfull People who earned GED
              </Heading>
              <UnorderedList>
                <ListItem>
                  Richard Carmona- 17th Surgeon General of the United States
                </ListItem>
                <ListItem>George Bernard Shaw-Writer </ListItem>
                <ListItem>Robert De Niro-Hollywood Film star </ListItem>
                <ListItem>
                  Arnold Schwarzenegger-Mr. Olympia, Film Star, Governo
                  california
                </ListItem>
                <ListItem>Quentin Tarantino-Hollywood Film Director</ListItem>
                <ListItem>
                  George Eastman-Founder of Kodak camera company
                </ListItem>
                <ListItem>Wally Amos-known for Amos Cookies </ListItem>
                <ListItem>Sir Elton John-Musician and Singer</ListItem>
                <ListItem>Sean Connery-James Bond</ListItem>
                <ListItem>Oscar Dela Hoya-Boxer</ListItem>
              </UnorderedList>
              <Text mt={10}>And many more...</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      {/* Last Section */}
      <Box mx={16} mt={10}>
        <Box textAlign={"center"}>
          <Heading fontSize={{ base: "25px", md: "27px" }}>
            Comparing Costs: IGCSE A Level vs. GED Exam in Malaysia -
          </Heading>
          <Heading fontSize={{ base: "25px", md: "27px" }}>
            Factoring in Tuition and Materials
          </Heading>
        </Box>
        <Flex
          w={{ base: "100%", lg: "100%" }}
          justify={{ base: "center", md: "space-around" }}
          mx="auto"
          flexDir={{ base: "column", lg: "row" }}
          mt={10}
        >
          <Box mx={20}>
            <Heading fontSize={18}>A-Level</Heading>
            <UnorderedList>
              <ListItem>
                IGCSE A Level programs in Malaysia have a base fee for
                examination registration, which is approximately RM12,000.
              </ListItem>
              <ListItem>
                The cost of IGCSE A Level programs does not cover tuition fees
                or the cost of textbooks and study materials.
              </ListItem>
              <ListItem>
                Tuition fees for IGCSE A Level programs can vary significantly
                depending on the educational institution or private tutoring
                center.
              </ListItem>
              <ListItem>
                Tuition fees for IGCSE A Level programs can range from a few
                thousand ringgit to tens of thousands of ringgit.
              </ListItem>
              <ListItem>
                Additional expenses for IGCSE A Level students include the
                purchase or rental of textbooks and study materials.
              </ListItem>
            </UnorderedList>
          </Box>
          <Box mx={20}>
            <Heading fontSize={18}>GED</Heading>
            <UnorderedList>
              <ListItem>
                The cost of the GED exam in Malaysia is relatively lower, with
                an approximate fee of RM1,500.
              </ListItem>
              <ListItem>
                The fee for the GED exam covers registration and examination
                fees only.
              </ListItem>
              <ListItem>
                GED exam preparation is primarily self-study, with individuals
                having the flexibility to choose their study materials and
                resources.
              </ListItem>
              <ListItem>
                The GED Prep Book costs approximately RM 125 only
              </ListItem>
              <ListItem>
                The lower cost of the GED exam is primarily attributed to the
                examination and registration fees.
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
        <Box>
          <Heading mt={10} fontSize={{ base: 35, lg: 50 }} textAlign={"center"}>
            Total Cost of all 4 GED Exams: USD 320.00
          </Heading>
        </Box>
      </Box>
    </>
  );
}

export default page;
