import router from "next/router";
import React, { FC, useState } from "react";
import tw, { styled } from "twin.macro";
import RightNav from "./RightNav";

type Props = {
  open: boolean;
};

type BurgerProps = {
  setFormOpen: (arg: boolean) => void;
};

const StyledBurger = styled.div`
  ${tw`
  flex
  justify-around
  flex-col
  flex-nowrap
  w-8
  h-8
  top-5
  right-10
  md:hidden
  items-center
  z-50
    `};

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props: Props) => (props.open ? "#ccc" : "#dfd5d7")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props: Props) =>
        props.open ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${(props: Props) =>
        props.open ? "translateX(100%)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger: FC<BurgerProps> = ({ setFormOpen }) => {
  const [open, setOpen] = useState(false);

  const openNavbar = () => {
    setOpen(!open);
  };

  const redirect = (to: string): void => {
    router.push(`#${to}`);
    setOpen(!open);
  };

  return (
    <>
      <StyledBurger open={open} onClick={openNavbar}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setFormOpen={setFormOpen} redirect={redirect} />
    </>
  );
};

export default Burger;
