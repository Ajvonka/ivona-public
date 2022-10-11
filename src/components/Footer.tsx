import React, { FC } from "react";
import tw, { styled } from "twin.macro";

const StyledFooter = styled.div`
  background-color: #181815;
  ${tw`
  flex
  justify-center
  items-center
  bottom-0
  w-full
  h-16
  text-gray-200 
    `}
`;

const Footer: FC = () => {
  return (
    <StyledFooter>
      <p className="mb-0">Copyright © Ivona Gašparová</p>
    </StyledFooter>
  );
};

export default Footer;
