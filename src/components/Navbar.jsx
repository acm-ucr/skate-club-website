"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import SkateLogo from "../public/Skate_LOGO.webp";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { items } from "../data/Nav.js";
//import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [selected, setSelected] = useState("");

  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      className="flex w-full items-center text-lg justify-between bg-black p-3"
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
            width={300}
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
        className="w-screen items-center justify-center"
      >
        <Nav className="flex items-center justify-center font-banco no-underline">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              style={{ fontSize: "3rem" }}
              onClick={() => setSelected(item.name)}
              className={`font-banco flex justify-center w-full font-light tracking-widest text-white hover:underline lg:text-3xl ${
                selected === item.name ? "underline" : "no-underline"
              }`}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
