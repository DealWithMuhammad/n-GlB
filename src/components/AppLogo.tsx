import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const AppLogo = () => {
  return (
    <Link href="/">
      <Image
        src={
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=422,fit=crop,q=95/m6LDjVMDbgilEVxQ/glblogo3-AVLz1b34GOI9zo7K.png"
        }
        alt="logo"
        height={100}
        width={160}
        unoptimized
      />
    </Link>
  );
};
