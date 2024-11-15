"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import SkateLogo from "../public/Skate_LOGO.webp";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { items } from "../data/Nav.js";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [selected, setSelected] = useState("");

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="md"
      className="flex w-full items-center justify-between bg-black p-0 text-lg"
    >
      <Navbar.Brand className="p-0">
        <Link
          href="/"
          onClick={() => setSelected("")}
          className="flex flex-row items-center"
        >
          <Image
            src={SkateLogo}
            alt="Skate-Logo"
            width={100}
            height={100}
            className="m-3"
          />
        </Link>
      </Navbar.Brand>

      {/* Navbar Toggle with hamburger icon */}
      <Navbar.Toggle className="border-0" aria-controls="navbar-nav">
        <FaBars className="block text-xl text-white md:hidden" />
      </Navbar.Toggle>

      <Navbar.Collapse
        id="navbar-nav"
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
              className={`flex w-full justify-center font-banco font-light tracking-widest text-white hover:underline lg:text-3xl ${
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
