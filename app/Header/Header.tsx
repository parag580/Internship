import React from "react";
import Link from "next/link";
import Head from "next/head";
import Logo from "./Logo";



const Navbar = () => {
  return (
    <>
      <div className="toppane w-full h-24 bg-primary sticky top-0">
        <div className="container mx-auto h-full">
          <div className="flex justify-between items-center h-full">
        <Logo/>
        <p className=" text-white text-4xl font-extrabold " >Student Portal</p>
        <div className="text-white hidden md:flex gap-x-6 ">
           
            <div>
                <p className=" text-3xl">Hello, Gabrisa!</p>
                <p  className="text-right" >Class 7, Math + Science</p>
            </div>
        </div>
              
          
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;