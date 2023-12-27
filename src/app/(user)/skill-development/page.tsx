"use client";
import {
  Box,
  Flex,
  Text,
  Heading,
  Link,
  Image,
  ListItem,
  OrderedList,
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
        background="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1534774592507-488885376ad3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxsZWFybnxlbnwwfHwwfHx8MA%3D%3D')"
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
            Skill Development
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
            Empowering Refugees with Life Changing Skills
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
                <Text>
                  At Global Learning Bridge, we are committed to providing
                  refugees with the necessary skills and opportunities to
                  rebuild their lives and contribute to their communities.
                  Through our Skill Development Initiative, we create a bridge
                  to a brighter future, empowering refugees to thrive and
                  achieve their full potential.
                </Text>
              </Box>
              <Box mt={8}>
                <Heading fontSize={18} mb={8}>
                  Empowering Through Freelancing:
                </Heading>
                <Text>
                  One of the key aspects of our Skill Development Initiative is
                  equipping refugees with the skills needed for freelancing
                  opportunities. We partner with different organizations that
                  provide training in areas such as e-marketing, social media
                  marketing, web design and development, content writing,
                  graphic design, and AutoCAD. These skills are in high demand
                  in today's digital world, opening up opportunities for
                  refugees to work remotely and earn a sustainable income.
                  journey.
                </Text>
              </Box>
              <Box mt={8}>
                <Heading fontSize={18} mb={8}>
                  Expanding Skill Sets:
                </Heading>
                <Text>
                  Beyond freelancing, we recognize the importance of a diverse
                  skill set in creating more avenues for success. Our initiative
                  extends to a wide range of skills enhancements, including:
                </Text>
              </Box>
              {/* Listings */}
              <Box mt={8}>
                <OrderedList>
                  <ListItem>
                    <b>Tailoring:</b> We collaborate with experienced tailors to
                    provide training in garment construction, pattern making,
                    and sewing techniques. This empowers refugees with the
                    skills to create their own clothing or work in the fashion
                    industry.
                  </ListItem>
                  <ListItem mt={8}>
                    <b> Barber Training:</b> We partner with professional
                    barbers to offer training in haircutting, styling, and
                    grooming. This skill enables refugees to pursue careers in
                    the thriving beauty and grooming industry.
                  </ListItem>
                  <ListItem mt={8}>
                    <b> Electronics, Computer, and Mobile Repair:</b> We work
                    with experts in electronics repair to provide training on
                    troubleshooting, repairing, and maintaining electronic
                    devices such as computers, smartphones, and tablets. This
                    equips refugees with valuable skills in high-demand fields.
                  </ListItem>
                </OrderedList>
              </Box>
              <Box mt={8}>
                <Heading fontSize={18} mb={8}>
                  Exploring Other Opportunities:
                </Heading>
                <Text>
                  In addition to the mentioned skills, we continuously explore
                  and collaborate on various other initiatives to expand the
                  horizons of skill development for refugees. Some of the ideas
                  we have explored include:
                </Text>
              </Box>
              <Box mt={8}>
                <OrderedList>
                  <ListItem>
                    <b>Culinary Arts:</b> Partnering with culinary schools and
                    chefs to provide training in cooking, food preparation, and
                    kitchen management, enabling refugees to pursue careers in
                    the culinary industry or start their own food-related
                    businesses.
                  </ListItem>
                  <ListItem mt={8}>
                    <b> Language Proficiency:</b> Collaborating with language
                    institutes to offer language courses that enhance refugees'
                    communication skills and increase their employability in
                    diverse industries.
                  </ListItem>
                  <ListItem mt={8}>
                    <b> Green Energy and Sustainability:</b>Teaming up with
                    organizations focused on renewable energy and sustainability
                    to provide training in solar panel installation,
                    energy-efficient technologies, and sustainable farming
                    practices.
                  </ListItem>
                </OrderedList>
              </Box>
              <Box mt={8}>
                <Text>
                  Join us in this journey of empowerment and make a difference
                  in the lives of refugees. Together, we can build a more
                  inclusive and prosperous world.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Image src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=445,fit=crop/m6LDjVMDbgilEVxQ/dvipjwc-Y4L85EG6wZcJOrMB.jpeg" />
          </Box>
        </Flex>
      </Box>
      <Box bgColor={"#595959"} py={10} mt={10}>
        <Box
          mx={{ base: "20", md: "24" }}
          fontSize={{ base: 15, lg: 16 }}
          textAlign={"center"}
          color={"#fff"}
        >
          <Text>
            <Link mr={1} href="/contact">
              Contact us
            </Link>
            today to learn more about our Skill Development Initiative and how
            you can get involved!
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default page;
