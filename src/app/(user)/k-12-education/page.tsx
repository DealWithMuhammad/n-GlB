import {
  Heading,
  Box,
  Text,
  Flex,
  Link,
  Button,
  ListItem,
  List,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <Box
        background="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m6LDjVMDbgilEVxQ/padedit-AzG8MyGbw1FezkPj.png')"
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
            size={{ base: "3xl", lg: "4xl" }}
            lineHeight="4rem"
            fontWeight={"800"}
            mt={{ base: "0px", lg: "70px" }}
            textAlign={"center"}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            GLB Education Online-K12
          </Heading>

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
        </Flex>
      </Box>
      {/* Section 2 */}

      <Box
        mx={{ base: "20", md: "24" }}
        fontSize={{ base: 15, lg: 16 }}
        textAlign={"left"}
      >
        {/* Box 1 */}

        <Box mt={10}>
          <Text>
            K-12, a term widely employed in the field of education and
            educational technology across the United States, Canada, and various
            other nations, serves as an abbreviation for the comprehensive
            continuum of publicly supported schooling encompassing grades
            preceding college. This educational framework encompasses a
            sequential progression from kindergarten (K) through the twelfth
            grade (1-12), and is conventionally structured into three distinct
            levels:
          </Text>
          <UnorderedList mt={4} ml={{ base: 12, lg: 16 }}>
            <ListItem>Elementary school (grades K-5)</ListItem>
            <ListItem>
              Middle school or junior high school (grades 6-8)
            </ListItem>
            <ListItem>High school (grades 9-12)</ListItem>
          </UnorderedList>
        </Box>
        {/* Box 2 */}

        <Box mt={10}>
          <Text>
            The K-12 educational experience stands as a pivotal foundation in a
            student's academic journey, instilling essential knowledge and
            competencies necessary for attainment of success in higher education
            and professional pursuits. Additionally, K-12 education assumes a
            crucial role in fostering the development of responsible citizenship
            and preparing young individuals for the challenges encountered
            during adulthood. The advantages associated with a K-12 education at
            GLB K-12 Education online program encompass multifaceted aspects,
            including:
          </Text>
          <UnorderedList mt={4} ml={{ base: 12, lg: 16 }}>
            <ListItem>
              Academic preparation for collegiate endeavors and the workforce
            </ListItem>
            <ListItem>Facilitation of social and emotional growth</ListItem>
            <ListItem>Exposure to diverse cultures and perspectives</ListItem>
            <ListItem>
              Provision of opportunities for engagement in extracurricular
              pursuits
            </ListItem>
          </UnorderedList>
        </Box>
        {/* Box 3 */}
        <Box mt={10}>
          <Heading fontSize={18} mb={4}>
            What subjects are studied in GLB Education Ondine’s K-12?
          </Heading>
          <Text>
            GLB Education Ondine’s K-12 covers a wide range of topics, including
            the following:
          </Text>
          <UnorderedList mt={4} ml={{ base: 12, lg: 16 }}>
            <ListItem>
              Language arts (reading, writing and comprehension);
            </ListItem>
            <ListItem>Mathematics</ListItem>
            <ListItem>Science</ListItem>
            <ListItem>Social studies</ListItem>
            <ListItem>History</ListItem>

            <ListItem>Art</ListItem>
          </UnorderedList>
        </Box>
        {/* Box 4 */}
        <Box mt={10}>
          <Heading fontSize={18} mb={4}>
            What types of assignments are given to GLB Education Ondine’s K-12?
          </Heading>
          <Text>
            Assignments may vary substantially based on the students' age and
            level. They can range in difficulty from basic activities like math
            puzzles or reading comprehension exercises to more sophisticated
            undertakings like research papers or presentations. Assignments, in
            general, are intended to measure a student's grasp of the content
            given in class as well as their ability to apply it to real-world
            circumstances.
          </Text>
        </Box>
        {/* Box 5 */}
        <Box mt={10}>
          <Heading fontSize={18} mb={4}>
            What types of assessments are given in K-12?
          </Heading>
          <Text>
            Assessments in <b>GLB Education Ondine’s K-12 </b>, like
            assignments, can vary substantially. They might be formal like
            standardized testing or informal like class participation or
            assignment completion. Assessments are often used to track a
            student's development over time and indicate areas where they may
            want more assistance.
          </Text>
        </Box>
      </Box>
      {/* section 3 */}
      <Box bgColor={"#ffc605"} py={10} mt={10}>
        <Box
          mx={{ base: "20", md: "24" }}
          fontSize={{ base: 15, lg: 16 }}
          textAlign={"left"}
        >
          <Text>
            For more information about our initiative, please feel free to
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
    </>
  );
}

export default Education;
