import React, { FC } from "react";
import tw, { styled } from "twin.macro";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  color?: string;
};

const StyledButton = styled.button`
  ${tw`
      text-black
      hover:text-black
      font-bold
      text-base
      py-2
      px-4
      w-full
    `}
  background-color: ${(props) => props.color || "#ca9e3f"};
`;

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type,
  color,
  disabled,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      color={color}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
