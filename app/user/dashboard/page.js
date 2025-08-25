"use client";
import Dashboard from "@/components/Dashboard";
import Wrapper from "@/components/Wrapper";
import React from "react";

function page() {
  return (
    <Wrapper>
        <h1 className="text-2xl font-bold text-teal-700">Dashboard</h1>
        <hr className="border-t border-teal-700 my-2" />

        <Dashboard />
    </Wrapper>
  )
}

export default page;
