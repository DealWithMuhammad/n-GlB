"use client";

import {
  Box,
  Flex,
  Link,
  Image,
  Text,
  Heading,
  Button,
  UnorderedList,
  ListItem,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import { Banner } from "@src/components/Banner";
import Contact from "@src/components/Contact/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const revalidate = 60;
export default async function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <main>
      <Banner />
      {/* Section 1 */}
      <Flex
        py="2rem"
        w={{ base: "100%", lg: "100%" }}
        justify="space-center"
        align="center"
        mx="auto"
        flexDir={{ base: "column", md: "row" }}
        data-aos="fade-up"
      >
        <Box
          mx={{ base: "11", md: "16", lg: "14" }}
          position="relative"
          overflow="hidden"
          maxW={{ base: "500px", md: "400px", lg: "600px" }}
        >
          <Heading
            size={{ base: "3xl", lg: "4xl" }}
            letterSpacing={1}
            fontSize={"55"}
          >
            Driving Change
          </Heading>
          <Box
            mt={5}
            borderTop={"7px solid #ffc605"}
            width={20}
            color={"#ffc605"}
          ></Box>
          <Heading mt={10} mb={4} fontWeight={"medium"} fontSize={"25"}>
            The Crisis
          </Heading>
          <Text>
            More than half of the world&apos;s 14.8 million school-aged refugee
            children are missing out on formal education, risking their future
            prosperity and global development goals, according to the 2023 UNHCR
            Refugee Education Report. By the end of 2022, the number of
            school-aged refugees increased by nearly 50 percent, with over 7
            million children not enrolled in school. Limited access to secondary
            and tertiary education exacerbates the disparity between refugee and
            non-refugee enrollment rates. The report emphasizes the need for
            inclusive education systems and financial support from global
            institutions, high-income states, and the private sector. When given
            access to education, school-aged refugees can thrive, benefiting
            individuals, host states, and home countries.
          </Text>
        </Box>
        <Box
          fontWeight={"medium"}
          letterSpacing={1}
          textAlign={{ base: "left", md: "left" }}
          fontSize={"larger"}
          mx={{ base: "20", md: "16", lg: "10" }}
        >
          <UnorderedList>
            <ListItem mt={10}>
              Over half of the world&apos;s 14.8 million school-aged refugee
              children lack formal education.
            </ListItem>
            <ListItem mt={10}>
              The number of school-aged refugees rose by nearly 50% from 10
              million to over 14.8 million by the end of 2022.
            </ListItem>
            <ListItem mt={10}>
              Approximately 51% of school-aged refugee children, over 7 million
              in total, lack school enrollment.
            </ListItem>
            <ListItem mt={10}>
              Refugee education enrollment varies: 38% in pre-primary, 65% in
              primary, 41% in secondary, and just 6% in tertiary education.
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      {/* End */}
      {/* Section 2 */}
      <Box mt={10} mx={{ base: "11", md: "16", lg: "14" }} data-aos="fade-up">
        <Box>
          <Heading size={{ base: "2xl", lg: "2xl" }}>ABOUT</Heading>
          <Heading mt={3} size={{ base: "2xl", lg: "3xl" }} color={"#ffc605"}>
            Global Learning Bridge
          </Heading>
          <Box
            mt={10}
            borderTop={"7px solid #ffc605"}
            width={20}
            color={"#ffc605"}
          ></Box>
        </Box>
        <Box mx={{ base: "11", md: "16", lg: "14" }}>
          <Text mt={10}>
            Global Learning Bridge is a compassionate and innovative educational
            initiative dedicated to addressing the critical educational needs of
            refugees all over the world. We are committed to providing inclusive
            and accessible educational opportunities for children, youth, and
            adults with limited financial capacity.
          </Text>
          <Text mt={7}>
            At Global Learning Bridge, we believe in the transformative power of
            education and its ability to empower individuals to rebuild their
            lives and contribute positively to their communities. We understand
            the challenges faced by refugees in accessing quality education, and
            we are here to bridge that gap.
          </Text>
          <Text mt={7}>
            Our team of dedicated educators and mentors are passionate about
            creating a nurturing and supportive learning environment for our
            students. We offer a comprehensive range of programs, including K-12
            Education, GED Preparation, Higher Education, and Skills Development
            Programs, tailored to meet the unique needs of our diverse student
            population.
          </Text>
          <Text mt={7}>
            Through our compassionate approach, we aim to restore hope, dignity,
            and a sense of normalcy to the lives of refugees. We believe that
            education is a fundamental human right and should be accessible to
            all, regardless of their background or legal status. By providing
            educational support and resources, we empower individuals to unlock
            their full potential and pursue a brighter future.
          </Text>
          <Text mt={7}>
            Join us at Global Learning Bridge and become part of a community
            that values compassion, inclusivity, and the inherent worth of every
            individual. Together, we can make a difference and ensure that
            education becomes a pathway to success for refugees, enabling them
            to thrive and contribute to society.
          </Text>
          <Link href="/contact-us">
            <Button
              mt={10}
              borderRadius="0px"
              minW="12rem"
              py={6}
              bgColor="Red"
              border={"1px solid"}
              color="#fff"
              _hover={{ bgColor: "#ffc605", border: "0px solid black" }}
            >
              Join Us
            </Button>
          </Link>
        </Box>
      </Box>
      {/* Section 3 */}

      <Box
        mt={{ base: 10, lg: 10 }}
        background={`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGxlYXJuaW5nfGVufDB8fDB8fHww') repeat fixed 0 0`}
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        height={{ base: "440px", lg: "380px" }}
        color={"white"}
        letterSpacing={3}
        textAlign={"center"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Flex
          py="2rem"
          w={{ base: "100%", lg: "100%" }}
          justify="space-center"
          align="center"
          mx="auto"
          flexDir={{ base: "column", md: "row" }}
          my={16}
        >
          <Box
            mx={{ base: "11", md: "16", lg: "14" }}
            position="relative"
            overflow="hidden"
            maxW={{ base: "500px", md: "400px", lg: "600px" }}
            data-aos="fade-up"
          >
            <Heading letterSpacing={1} size={{ base: "2xl", lg: "3xl" }}>
              Vision
            </Heading>
            <Text>
              Our vision is to bridge the educational gap by providing
              innovative and adaptable learning solutions, ensuring that no one
              is left behind and that education becomes a fundamental human
              right for all.
            </Text>
          </Box>
          <Box
            mx={{ base: "11", md: "16", lg: "14" }}
            position="relative"
            overflow="hidden"
            maxW={{ base: "500px", md: "400px", lg: "600px" }}
            mt={{ base: 10, lg: 0 }}
            data-aos="fade-up"
          >
            <Heading letterSpacing={1} size={{ base: "2xl", lg: "3xl" }}>
              Mission
            </Heading>
            <Text>
              Provide access to educational opportunities for children, youth,
              and adults with limited financial capacity to attain a
              certificate/degree
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* End */}
      {/* Section 3 */}
      <Box bgColor={"#e0e0e0"}>
        <Box mx={{ base: "11", md: "16", lg: "10" }}>
          <Box data-aos="fade-up">
            <Heading pt={10} size={{ base: "2xl", lg: "2xl" }}>
              GLB Initiatives
            </Heading>
            <Box mt={10} borderTop={"10px solid #ffc605"} width={20}></Box>
          </Box>
          {/* Cards */}
          <Flex
            py="2rem"
            w={{ base: "100%", lg: "100%" }}
            justify="space-center"
            align={"center"}
            flexWrap={"wrap"}
            flexDir={{ base: "column", md: "row" }}
          >
            {/* Card 1 */}
            <Card maxW="sm" data-aos="fade-up">
              <CardBody>
                <Box py={4} textAlign={"center"} bgColor={"#ffc605"}>
                  <Heading fontWeight={"400"} color={"#fff"} fontSize={"24px"}>
                    K-12 Education
                  </Heading>
                </Box>
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=861&h=608"
                  alt="Green double couch with wooden legs"
                />
                <Stack mt="6" spacing="3">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod sunt tenetur ad nisi vero iste at optio enim dicta.
                    Accusantium inventore velit voluptate quaerat nesciunt
                    quibusdam deserunt laudantium provident voluptas.
                  </Text>
                  <Button
                    borderRadius="0px"
                    minW="12rem"
                    py={6}
                    bgColor="Red"
                    border={"1px solid"}
                    color="#fff"
                    _hover={{ bgColor: "#ffc605", border: "0px solid black" }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </CardBody>
            </Card>
            {/* Card 2 */}
            <Card
              my={{ base: 10, lg: 10 }}
              mx={{ base: 0, lg: 3 }}
              maxW="sm"
              data-aos="fade-up"
            >
              <CardBody>
                <Box py={4} textAlign={"center"} bgColor={"#ffc605"}>
                  <Heading fontWeight={"400"} color={"#fff"} fontSize={"24px"}>
                    High School Equivalency
                  </Heading>
                </Box>
                <Image
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=662,fit=crop,trim=306.6373626373626;0;0;0/m6LDjVMDbgilEVxQ/gedgrad-m5K2EPM8PlS27ag0.jpeg"
                  alt="Green double couch with wooden legs"
                />
                <Stack mt="6" spacing="3">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod sunt tenetur ad nisi vero iste at optio enim dicta.
                    Accusantium inventore velit voluptate quaerat nesciunt
                    quibusdam deserunt laudantium provident voluptas.
                  </Text>
                  <Button
                    borderRadius="0px"
                    minW="12rem"
                    py={6}
                    bgColor="Red"
                    border={"1px solid"}
                    color="#fff"
                    _hover={{ bgColor: "#ffc605", border: "0px solid black" }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </CardBody>
            </Card>
            {/* Card 3 */}
            <Card mb={{ base: 10, lg: 0 }} maxW="sm" data-aos="fade-up">
              <CardBody>
                <Box py={4} textAlign={"center"} bgColor={"#ffc605"}>
                  <Heading fontWeight={"400"} color={"#fff"} fontSize={"24px"}>
                    Higher Education
                  </Heading>
                </Box>
                <Image
                  src="https://images.unsplash.com/photo-1591218214141-45545921d2d9?auto=format&fit=crop&w=861&h=603"
                  alt="Green double couch with wooden legs"
                />
                <Stack mt="6" spacing="3">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod sunt tenetur ad nisi vero iste at optio enim dicta.
                    Accusantium inventore velit voluptate quaerat nesciunt
                    quibusdam deserunt laudantium provident voluptas.
                  </Text>
                  <Button
                    borderRadius="0px"
                    minW="12rem"
                    py={6}
                    bgColor="Red"
                    border={"1px solid"}
                    color="#fff"
                    _hover={{ bgColor: "#ffc605", border: "0px solid black" }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </CardBody>
            </Card>
            {/* Card 4 */}
            <Card mb={{ base: 10, lg: 0 }} maxW="sm" data-aos="fade-up">
              <CardBody>
                <Box py={4} textAlign={"center"} bgColor={"#ffc605"}>
                  <Heading fontWeight={"400"} color={"#fff"} fontSize={"24px"}>
                    Skills Development
                  </Heading>
                </Box>
                <Image
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=631,fit=crop,trim=121.56424581005587;0;48.625698324022345;0/m6LDjVMDbgilEVxQ/skills-mjEQNzNN0rUyL18z.png"
                  alt="Green double couch with wooden legs"
                />
                <Stack mt="6" spacing="3">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod sunt tenetur ad nisi vero iste at optio enim dicta.
                    Accusantium inventore velit voluptate quaerat nesciunt
                    quibusdam deserunt laudantium provident voluptas.
                  </Text>
                  <Button
                    borderRadius="0px"
                    minW="12rem"
                    py={6}
                    bgColor="Red"
                    border={"1px solid"}
                    color="#fff"
                    _hover={{ bgColor: "#ffc605", border: "0px solid black" }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </CardBody>
            </Card>
            {/* Card 5 */}
            <Card
              data-aos="fade-up"
              mb={{ base: 10, lg: 0 }}
              mx={{ base: 0, lg: 3 }}
              maxW="sm"
            >
              <CardBody>
                <Box py={4} textAlign={"center"} bgColor={"#ffc605"}>
                  <Heading fontWeight={"400"} color={"#fff"} fontSize={"24px"}>
                    Short Cources
                  </Heading>
                </Box>
                <Image
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=562,fit=crop/m6LDjVMDbgilEVxQ/e3eru3hje-YrD6Z3pj5ySJgj5Z.jpeg"
                  alt="Green double couch with wooden legs"
                />
                <Stack mt="6" spacing="3">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod sunt tenetur ad nisi vero iste at optio enim dicta.
                    Accusantium inventore velit voluptate quaerat nesciunt
                    quibusdam deserunt laudantium provident voluptas.
                  </Text>
                  <Button
                    borderRadius="0px"
                    minW="12rem"
                    py={6}
                    bgColor="Red"
                    border={"1px solid"}
                    color="#fff"
                    _hover={{ bgColor: "#ffc605", border: "0px solid black" }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </CardBody>
            </Card>
            {/* Card 6 */}
            <Card data-aos="fade-up" mb={{ base: 10, lg: 0 }} maxW="sm">
              <CardBody>
                <Box py={4} textAlign={"center"} bgColor={"#ffc605"}>
                  <Heading fontWeight={"400"} color={"#fff"} fontSize={"24px"}>
                    Financial Assistance
                  </Heading>
                </Box>
                <Image
                  src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=861&h=565"
                  alt="Green double couch with wooden legs"
                />
                <Stack mt="6" spacing="3">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod sunt tenetur ad nisi vero iste at optio enim dicta.
                    Accusantium inventore velit voluptate quaerat nesciunt
                    quibusdam deserunt laudantium provident voluptas.
                  </Text>
                  <Button
                    borderRadius="0px"
                    minW="12rem"
                    py={6}
                    bgColor="Red"
                    border={"1px solid"}
                    color="#fff"
                    _hover={{ bgColor: "#ffc605", border: "0px solid black" }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </Flex>
        </Box>
      </Box>

      {/* Contact */}
      <Contact />
    </main>
  );
}
