"use client";

import React from "react";
import { ThemeToggle } from "../ThemeToggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className="flex  items-center justify-between">
      <Link href={"/"}>
        <div className="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900  dark:text-white">
          gymTrack
        </div>
      </Link>

      <div className="hidden items-center gap-4 md:flex lg:flex">
        <Link href={"/login"}>
          <Button>signIn</Button>
        </Link>
        <Button variant="secondary">signUp</Button>
        <ThemeToggle />
      </div>
      <div className="visible lg:hidden md:hidden">
        <Popover>
          <PopoverTrigger>
            <Button variant="outline" size="icon" className="bg-inherit">
              <HamburgerMenuIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col items-center justify-center pt-2 gap-2 border-2 border-green-300 bg-green-100 rounded">
            <Link href={"/login"}>
              <Button>signIn</Button>
            </Link>
            <Button variant="secondary">signUp</Button>
            <ThemeToggle />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
