import React, { FC } from "react";
import tw, { styled } from "twin.macro";
import StyledLabel from "./StyledLabel";

type InputProps = {
  children?: React.ReactNode;
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  className?: string;
  labelColor?: string;
};

const StyledInput = styled.input`
  ${tw`
  bg-gray-50 border border-gray-300 text-black font-black text-sm rounded-lg focus:ring-gray-900  block w-full p-2.5
`}
`;

const Input: FC<InputProps> = (props) => {
  return (
    <>
      <StyledLabel className={props.className}>{props.label}</StyledLabel>
      <StyledInput
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
      >
        {props.children}
      </StyledInput>
    </>
  );
};

export default Input;
