import React, { FC } from "react";
import tw, { styled } from "twin.macro";
import Burger from "./Burger";
import Menubar from "./Menubar";

interface Props {
  setFormOpen: (arg: boolean) => void;
}

const Nav = styled.nav`
  ${tw`
  w-full
  flex
  items-center
  overflow-hidden
  top-0
  fixed
  pt-3.5
  pr-5
  sm:flex-grow
  content-between
  z-30
    `};
  background-color: #181815;
`;

const Logo = styled.div`
  ${tw`
    md:mx-11
    ml-5
    flex-shrink-0
    text-gray-200
    lg:text-xl
    text-lg
    `}
`;

const Navbar: FC<Props> = ({ setFormOpen }) => {
  return (
    <section id="home">
      <Nav>
        <Logo>
          <p>IVONA GASPAROVA</p>
        </Logo>
        <Menubar />
        <Burger setFormOpen={setFormOpen} />
      </Nav>
    </section>
  );
};

export default Navbar;
