import React, { FC } from "react";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";

const Ul = styled.ul`
  ${tw`
  md:visible
  flex
  items-center
  justify-end
  lg:text-base
  md:text-sm
  gap-3
  lg:gap-5
  flex-grow
  overflow-hidden
  invisible
    `};
`;

const NavLi = styled.li`
  ${tw`
  flex
  text-center
  justify-center
  items-center
  text-gray-50
  hover:bg-[#a57a1d]
  hover:text-white
  hover:rounded-full
  h-16
    `};
  cursor: pointer;
`;

const NavLink = styled.a`
  margin: 0px 10px;
`;

const Menubar: FC = () => {
  const router = useRouter();

  return (
    <Ul>
      <NavLi onClick={() => router.push("/")}>
        <NavLink>HOME</NavLink>
      </NavLi>
      <NavLi onClick={() => router.push("/#aboutMe")}>
        <NavLink>ABOUT ME</NavLink>
      </NavLi>
      <NavLi onClick={() => router.push("/#projects")}>
        <NavLink>MY PROJECTS</NavLink>
      </NavLi>
    </Ul>
  );
};

export default Menubar;
