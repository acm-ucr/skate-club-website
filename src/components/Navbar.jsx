"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import SkateLogo from "../public/Skate_LOGO.webp";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
//import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [setSelected] = useState("");

  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      className="flex w-full items-center justify-between bg-black p-3"
    >
      <Navbar.Brand className="p-0">
        <Link
          href="/"
          onClick={() => setSelected("")}
          className="flex items-center"
        >
          <Image
            src={SkateLogo}
            alt="Skate-Logo"
            width={250}
            height={100}
            className="m-3"
          />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle className="border-0">
        {/* <FaBars className="text-white text-xl" /> */}
      </Navbar.Toggle>
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="items-center justify-center"
      >
        <Nav className="flex w-full items-center justify-center gap-10 pr-5 text-center font-banco text-3xl no-underline">
          <Nav.Link
            as={Link}
            href="/"
            className="hover: text-white underline"
            onClick={() => setSelected("BOARD")}
          >
            BOARD
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/about"
            className="text-white hover:underline"
            onClick={() => setSelected("ABOUT US")}
          >
            ABOUT US
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/gallery"
            className="text-white hover:underline"
            onClick={() => setSelected("GALLERY")}
          >
            GALLERY
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/calendar"
            className="text-white hover:underline"
            onClick={() => setSelected("CALENDAR")}
          >
            CALENDAR
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

// const Navigation = () => {
//     const [selected, setSelected] = useState("");

//     return (
//         <Navbar
//         collapseOnSelect
//         sticky= "top"
//         expand= "lg"
//         className="w-full md:min-h-[7vh] lg:min-h-[9vh] bg-black flex justify-between items-center p-3"
//         >
//        <Navbar.Brand className = "p-0">
//          <Link
//          eventKey = "1"
//          className="p-0 flex items-center"
//          href="/"
//          onClick={() => setSelected("")}
//          >
//           <Image src={SkateLogo} alt="Skate-Logo"  className  ="w-2/3 h-1 w-1 m-3"/>
//          </Link>
//        </Navbar.Brand>
//        <Navbar.Toggle
//          className="list-unstyled !text-transparent border-0"
//          aria-controls="basic-navbar-nav"
//        >
//         <FaBars className= "text-white text-xl" />
//        </Navbar.Toggle>
//        <Navbar.Collapse
//          id = "basic-navbar-nav"
//          className ="items-center lg:justify-end justify-center flex"
//          >

//           <Nav className = "w-full no-underline font-normal flex items-center text-center text-sm lg:text-base justify-end= pr-5 gap-10">
//             <p className = "text-white tracking-widest font-banco font-light hover:underline"> Hello What do I do Like acutally help wtf </p>

//             </Nav>"
//          {/* <Nav className = "w-full no-underline font-normal flex items-center text-center text-sm lg:text-base justify-end pr-5 gap-10">
//             {items.map((item,index) => (
//               <Nav.Link
//                 as = {Link}
//                 key = {index}
//                 href={item.link}
//                 onClick={() => setSelected(item.name)}
//                 className= {`text-black tracking-widest font-banco font-light hover:underline ${
//                     selected === item.name? "underline" : "no-underline"
//                 }`}
//                 >
//                 {item.name}
//               </Nav.Link>
//             ))}
//          </Nav> */}
//          </Navbar.Collapse>
//        </Navbar>
//         );
//     };

//     export default Navigation;
