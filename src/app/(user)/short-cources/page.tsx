import { Flex, Box, Text, Heading, Image, Link } from "@chakra-ui/react";
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
        background="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1603205431143-ce58f21799a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fExlYXJuaW5nfGVufDB8fDB8fHww')"
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
            Short Cources
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
            Expand Your Horizons
          </Heading>
        </Flex>
      </Box>
      {/* Se3ction 2 */}

      <Box mx={{ base: "20", md: "20" }}>
        <Flex
          py="2rem"
          w={{ base: "100%", lg: "100%" }}
          justify="space-center"
          mx="auto"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box mr={6} w={{ base: "100%", lg: "70%" }}>
            <Box fontSize={{ base: 15, lg: 16 }} textAlign={"left"}>
              {/* Box 1 */}

              <Box>
                <Heading fontSize={18} mb={4}>
                  Coming Soon: Discover your hidden potential with Global
                  Learning Bridge's Exciting Short Courses!
                </Heading>
                <Text>
                  Global Learning Bridge is thrilled to announce an upcoming
                  project in the pipeline: a range of enriching short courses
                  designed to empower individuals in today's dynamic world. In
                  collaboration with esteemed organizations like the Red
                  Cross/Red Crescent, we are dedicated to delivering top-notch
                  education in various fields.
                </Text>
              </Box>
              <Box mt={8}>
                <Text>
                  Get ready to dive into a diverse array of subjects, including
                  First Aid and CPR training, Mobile Repair and Electronics
                  Workshops, Social Media Marketing, and more. These short
                  courses are meticulously crafted to provide practical
                  knowledge and hands-on experience, equipping you with valuable
                  skills that can enhance your personal and professional
                  journey.
                </Text>
              </Box>
              <Box my={8}>
                <Text>
                  With Global Learning Bridge's short courses, you'll have the
                  opportunity to learn from industry experts, engage in
                  interactive sessions, and gain practical insights that can
                  make a real impact. Whether you're seeking to boost your
                  career prospects, acquire new skills, or simply explore your
                  passions, our short courses will be tailored to meet your
                  needs.
                </Text>
              </Box>
              <Box my={8}>
                <Text>
                  Stay tuned for more updates as we prepare to launch these
                  exciting short courses. Global Learning Bridge is committed to
                  empowering individuals like you with the knowledge and tools
                  necessary to thrive in an ever-changing world. Get ready to
                  unlock your potential and embark on a transformative learning
                  experience with us!
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Image src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=437,fit=crop/m6LDjVMDbgilEVxQ/refugees-learn-electronics-YyvPgNrnxZF6EO9j.png" />
          </Box>
        </Flex>
      </Box>
      <Box bgColor={"#ffc605"} py={10} mt={10}>
        <Box
          mx={{ base: "20", md: "24" }}
          fontSize={{ base: 15, lg: 16 }}
          textAlign={"center"}
        >
          <Text>
            <Link
              mr={1}
              color={"blue"}
              textDecoration={"underline"}
              href="/contact"
            >
              Contact us
            </Link>{" "}
            today to learn more about our Short Cources Initiative and how you
            can get involved!
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default page;
