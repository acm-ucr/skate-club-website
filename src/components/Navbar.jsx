"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import SkateLogo from "../../public/assets/Skate_LOGO.webp";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { items } from "../data/Nav.js";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [selected, setSelected] = useState("");

  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="xl"
      className="flex w-full items-center justify-between bg-black p-0 text-lg"
    >
      <Navbar.Brand className="flex items-center p-0 sm:justify-between md:w-auto">
        <Link
          href="/"
          onClick={() => setSelected("")}
          className="flex flex-row items-center"
        >
          <Image
            src={SkateLogo}
            alt="Skate-Logo"
            width={250}
            height={50}
            className="w-36 md:w-48 lg:w-56"
          />
        </Link>
      </Navbar.Brand>

      {/* Navbar Toggle with hamburger icon */}
      <Navbar.Toggle className="border-0" aria-controls="navbar-nav">
        <FaBars className="m-4 block flex-row text-3xl text-white lg:hidden" />
      </Navbar.Toggle>

      <Navbar.Collapse
        id="navbar-nav"
        className="w-full items-center justify-center"
      >
        <Nav className="flex w-full items-center justify-center no-underline">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              }}
              onClick={() => setSelected(item.name)}
              className={`mx-5 flex w-full justify-center whitespace-nowrap font-banco text-2xl font-light tracking-widest text-white hover:underline ${
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
