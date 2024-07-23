import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[80vh] flex flex-col justify-center items-center  font-bold">
        <h1 className="text-4xl">Page not found.</h1>
        <Link href={"/"} className="mt-10 hover:underline">
          Go Back to Home
        </Link>
      </div>
      ;
    </>
  );
};

export default NotFound;
