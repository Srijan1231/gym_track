"use client";

import React, { useState } from "react";
import { ThemeToggle } from "../ThemeToggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

export const Nav = () => {
  return (
    <div className="flex  items-center justify-between">
      <div className="text-2xl">gymTrack</div>
      <div className="flex items-center gap-4 ">
        <p>signIn</p>
        <p>signUp</p>
        <ThemeToggle />
      </div>
      <Popover className="lg:invisible md:invisible">
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <p>signIn</p>
          <p>signUp</p>
          <ThemeToggle />
        </PopoverContent>
      </Popover>
    </div>
  );
};
