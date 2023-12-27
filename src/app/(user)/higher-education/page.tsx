"use client";
import {
  Box,
  Text,
  Image,
  Flex,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Button,
  UnorderedList,
} from "@chakra-ui/react";
import { Hero } from "@src/components/Hero/Hero";
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
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Unlocking Opportunities
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
            GBL's Higher Education Initiative
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
                  Global Learning Bridge (GLB) is dedicated to facilitating
                  higher education opportunities for high school graduates
                  within the refugee community, including pathways to
                  universities like University of the People (UoPeople), an
                  online university based in the USA, and other reputable
                  institutions. While the GLB initiative does not directly
                  provide grants or scholarships, it plays a crucial role in
                  assisting students in winning these benefits. Through
                  strategic partnerships and guidance, GLB supports students in
                  navigating the competitive landscape of grants and
                  scholarships, maximizing their chances of securing financial
                  support to minimize or completely eliminate the costs
                  associated with pursuing a bachelor's degree in fields such as
                  health science, computer science, and business administration.
                  The initiative provides extensive resources, mentorship, and
                  application assistance to empower students in their pursuit of
                  these funding opportunities, ensuring that they can access
                  higher education with minimal financial burden.
                </Text>
              </Box>
              <Box mt={8}>
                <Text>
                  Here's how the GLB initiative assists high school graduates in
                  accessing higher education with minimal or no cost:
                </Text>
                <OrderedList my={8} ml={{ base: 12, lg: 16 }}>
                  <ListItem>
                    <b> Grant and Scholarship Support: </b>GLB Initiative
                    actively seeks out and secures grants and scholarships
                    specifically designated for refugee students. These
                    financial resources are utilized to cover tuition expenses,
                    course materials, and related educational costs, ensuring
                    that high school graduates can pursue their chosen degree
                    programs without financial constraints.
                  </ListItem>
                  <ListItem mt={8}>
                    <b> Enabling Accessible Education: </b>GBL Facilitates
                    admission in University of the People and Other
                    institutions. Through this initiative, qualified refugee
                    students are guided through the application and admission
                    processes, ensuring a smooth transition into the chosen
                    degree programs.
                  </ListItem>
                  <ListItem mt={8}>
                    <b>Academic Counseling and Guidance:</b> GLB initiative
                    provides personalized academic counseling and guidance to
                    high school graduates, helping them navigate the university
                    selection process. Students receive assistance in choosing
                    the most suitable degree programs aligning with their
                    interests, career goals, and eligibility for available
                    grants and scholarships.
                  </ListItem>
                  <ListItem mt={8}>
                    <b> Application and Admission Support: </b>The GLB
                    initiative assists students with preparing strong
                    applications, including guidance on writing personal
                    statements, obtaining recommendation letters, and completing
                    necessary documentation. Support is provided throughout the
                    application and admission process, ensuring that students
                    have the best chance of securing admission into their
                    desired universities.
                  </ListItem>
                  <ListItem mt={8}>
                    <b> Connection to Resources: </b>GLB connects high school
                    graduates with a range of resources, including online
                    learning platforms, digital libraries, and academic support
                    services, enabling them to access educational materials and
                    support systems necessary for successful completion of their
                    higher education journey.
                  </ListItem>
                  <ListItem mt={8}>
                    <b> Ongoing Mentorship and Networking:</b> The GLB
                    initiative offers ongoing mentorship and networking
                    opportunities, connecting students with professionals and
                    alumni in their respective fields of study. This support
                    fosters personal and professional growth, guiding students
                    towards internships, job placements, and career advancement
                    opportunities.
                  </ListItem>
                </OrderedList>
              </Box>
              <Box my={8}>
                <Text>
                  Global Learning Bridge (GLB) empowers high school graduates
                  within the refugee community, providing pathways to higher
                  education and a brighter future. Through strategic
                  partnerships, guidance, and support, GLB assists students in
                  accessing reputable institutions, particularly in fields like
                  health science, computer science, and business administration.
                  While not directly providing grants or scholarships, GLB plays
                  a vital role in helping students secure financial benefits,
                  breaking down barriers and fostering personal and professional
                  growth. By transforming lives through education, GLB strives
                  for a more inclusive and equitable world.
                </Text>
              </Box>
            </Box>
            <Box mt={8}>
              <Heading mb={3}>Prerequisits</Heading>
              <Text>
                In the realm of education, prerequisites serve as fundamental
                requirements that must be fulfilled prior to pursuing higher
                levels of academic study. Among these prerequisites, three
                common pathways include but <b> may not be limited*</b> to the
                following:
              </Text>
              <UnorderedList my={8} ml={{ base: 12, lg: 16 }}>
                <ListItem>Higher Secondary education (English medium)</ListItem>
                <ListItem>A-Level qualifications</ListItem>
                <ListItem>The GED (American High School Equabalency)</ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box w={{ base: "100%", lg: "80%" }}>
            <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=656&h=437" />
            <Box textAlign={"center"} mt={8}>
              <Heading>Education Unleashed: </Heading>
              <Heading>Unlock Your Degree, Zero Cost Assured!</Heading>
              <Box
                fontSize={{ base: "xs", lg: "18" }}
                bgColor={"#ffc605"}
                mt={10}
              >
                <Text>
                  "Essential Prerequisites: Higher Secondary, A-Level, or GED"
                </Text>
              </Box>
              <Link href="/enroll">
                <Button
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
      <Box bgColor={"#ffc605"} py={10} mt={10}>
        <Box
          mx={{ base: "20", md: "24" }}
          fontSize={{ base: 15, lg: 16 }}
          textAlign={"center"}
          color={"#000"}
        >
          <Text>
            <Link mr={1} href="/contact">
              Contact us
            </Link>
            for information about "other pathways"
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default page;
