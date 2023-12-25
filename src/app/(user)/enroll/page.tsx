import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import { Hero } from "@src/components/Hero/Hero";
import React from "react";
function Enroll() {
  return (
    <>
      <Hero
        heading="Enroll with us"
        description="Enroll at Global Learning Bridge for a transformative educational journey without boundaries. Our inclusive programs cater to learners of all backgrounds, offering flexible learning solutions and dedicated support. Join our global community, empower yourself, and make a positive impact through education."
        imageUrl="https://images.unsplash.com/photo-1542587227-8802646daa56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW5yb2xsfGVufDB8MHwwfHx8MA%3D%3D"
      />
      <Box mx={{ base: 10, md: "100px", lg: "250px" }}>
        <FormControl isRequired>
          <FormLabel color={"red"}>First name</FormLabel>
          <Input bgColor={"#f1f1f1"} placeholder="Your name" />
        </FormControl>
        <FormControl mt={6} isRequired>
          <FormLabel color={"red"}>Last Name</FormLabel>
          <Input bgColor={"#f1f1f1"} placeholder="Your last name" />
        </FormControl>
        <FormControl mt={6} isRequired>
          <FormLabel color={"red"}>Phone number</FormLabel>
          <Input
            bgColor={"#f1f1f1"}
            type="email"
            placeholder="Your phone number"
          />
        </FormControl>
        <FormControl mt={6}>
          <FormLabel color={"red"}>Community</FormLabel>
          <Input
            bgColor={"#f1f1f1"}
            type="phone"
            placeholder="Your community"
          />
        </FormControl>
        <Box mt={6}>
          <FormLabel color={"red"}>Field(s) of interest</FormLabel>
          <CheckboxGroup>
            <Stack
              color={"black"}
              spacing={[1, 3]}
              direction={["column", "column"]}
            >
              <Checkbox>K-12 Education</Checkbox>
              <Checkbox>High school squivalency (GED)</Checkbox>
              <Checkbox>Higher education</Checkbox>
              <Checkbox>Skill Development</Checkbox>
              <Checkbox>Short Cources</Checkbox>
              <Checkbox>Financial Assistance</Checkbox>
            </Stack>
          </CheckboxGroup>
          <Box>
            <Link href="/contact-us">
              <Button
                mt={10}
                minW="12rem"
                py={6}
                bgColor="Red"
                color="#fff"
                _hover={{ bgColor: "#ffc605" }}
              >
                Submit
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Enroll;
