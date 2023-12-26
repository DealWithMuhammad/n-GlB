"use client";

import { navItems } from "@/helpers";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { AppLogo } from "../AppLogo";
import { usePathname } from "next/navigation";

export function DesktopNav() {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      display={{ base: "none", lg: "flex" }}
      px="2rem"
      py="1rem"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Stack direction="row" gap={6} flex={1} alignItems="center">
        <Box mr="1rem">
          <AppLogo />
        </Box>

        {navItems.map((navItem) => {
          const isActive = usePathname() === navItem.href;

          return (
            <Box
              color={isActive ? "red" : "black"}
              borderBottom={isActive ? "2px solid red" : "none"}
              key={navItem.label}
              position="relative"
              display="inline"
              transition={"all 0.45s"}
              _after={{
                content: '""',
                position: "absolute",
                left: "50%",
                bottom: "-2px",
                width: "0",
                height: "0.7px",
                background: "red", // Change this color as needed
                transition: "all 0.45s",
              }}
              _hover={{
                _after: {
                  width: "100%",
                  left: "0",
                },
                color: "red",
              }}
            >
              <Link href={navItem.href}>{navItem.label}</Link>
            </Box>
          );
        })}
      </Stack>
    </Flex>
  );
}
