import {
  Box,
  chakra,
  Container,
  IconButton,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiMailSend } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsTwitterX, BsFacebook } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { AppLogo } from "./AppLogo";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="blackAlpha.100"
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box bg="#ebeadf" mt="2rem">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <AppLogo />
            </Box>
            <Text fontSize="sm">
              © 2023 Muhammad Ahmad. All rights reserved
            </Text>
            <Stack direction="row" spacing={6}>
              <SocialButton label="Twitter" href={"#"}>
                <BsTwitterX fontSize="25" />
              </SocialButton>
              <SocialButton label="Facebook" href={"#"}>
                <BsFacebook fontSize="100" />
              </SocialButton>
              <SocialButton label="Instagram" href={"#"}>
                <FaInstagram fontSize="90" />
              </SocialButton>
              <SocialButton label="Linkedin" href={"#"}>
                <ImLinkedin2 fontSize="90" />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Company</ListHeader>
            <Link href={"/about"}>Why us</Link>
            <Link href={"/contact-us"}>Contact us</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Service</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Stay Updated</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder="Enter your email address"
                bg="blackAlpha.100"
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg="brand.primary"
                color="white"
                _hover={{
                  bg: "brand.primaryDark",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
