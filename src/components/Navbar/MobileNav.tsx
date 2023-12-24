"use client";

import { Box, Flex, Stack } from "@chakra-ui/react";
import { AppLogo } from "../AppLogo";
import { NavMenu } from "./NavMenu";
import Link from "next/link";

export function MobileNav() {
  return (
    <>
      <Flex
        justify="space-between"
        alignItems="center"
        display={{ base: "flex", lg: "none" }}
        px="2rem"
        py="1rem"
      >
        <NavMenu />
        <AppLogo />
      </Flex>
    </>
  );
}
