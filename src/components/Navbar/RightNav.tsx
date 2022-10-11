import React, { FC } from "react";
import tw, { styled } from "twin.macro";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaRegEnvelope, FaLaptopCode } from "react-icons/fa";

type Props = {
  open: boolean;
  setFormOpen: (arg: boolean) => void;
  redirect: (to: string) => void;
};

const Ul = styled.ul`
  flex-flow: column nowrap;
  background-color: #181815;
  position: fixed;
  transform: ${(props: Props) =>
    props.open ? "translateX(0)" : "translateX(100%)"};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  transition: transform 0.3s ease-in-out;
  li {
    ${tw`
    hover:text-[#e0b24d] text-[#fff]
    `};
  }
  ${tw`
  md:hidden
  text-lg
  pt-20
  z-40
    `};
`;

const NavLi = styled.li`
  ${tw`
  mt-5 mr-auto hover:rounded-full
  `}

  .icon {
    ${tw`
    inline mb-1 mr-2 text-[#cec7c7]
    `}
  }
`;

const RightNav: FC<Props> = ({ open, setFormOpen, redirect }) => {
  return (
    <Ul open={open} setFormOpen={setFormOpen} redirect={redirect}>
      <NavLi>
        <button onClick={() => redirect("home")}>
          <AiOutlineHome className="icon" /> HOME
        </button>
      </NavLi>
      <NavLi>
        <button onClick={() => redirect("aboutMe")}>
          <AiOutlineUser className="icon" /> ABOUT ME
        </button>
      </NavLi>
      <NavLi>
        <button onClick={() => redirect("projects")}>
          {" "}
          <FaLaptopCode className="icon" /> MY PROJECTS
        </button>
      </NavLi>
      <NavLi>
        <button onClick={() => setFormOpen(true)}>
          {" "}
          <FaRegEnvelope className="icon" /> CONTACT ME
        </button>
      </NavLi>
    </Ul>
  );
};

export default RightNav;
