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

export const Nav = () => {
  return (
    <div className="flex  items-center justify-between">
      <div className="text-2xl">gymTrack</div>
      <div className="hidden items-center gap-4 md:flex lg:flex">
        <Button>signIn</Button>
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
          <PopoverContent>
            <div className="flex flex-col items-center justify-center pt-2 gap-2">
              <Button>signIn</Button>
              <Button variant="secondary">signUp</Button>
              <ThemeToggle />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
