import React, { ChangeEvent, FC } from "react";
import tw, { styled } from "twin.macro";
import StyledLabel from "./StyledLabel";

type Props = {
  placeholder: string;
  label: string;
  rows?: number;
  value: string;
  name?: string;
  className?: string;
  onChange(event: ChangeEvent<HTMLTextAreaElement>): void;
};

const StyledTextarea = styled.textarea`
  ${tw`
 bg-gray-50 border border-gray-300 text-black font-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
`}
`;

const Textarea: FC<Props> = ({
  placeholder,
  label,
  value,
  onChange,
  name,
  className,
}) => {
  return (
    <>
      <StyledLabel className={className}>{label}</StyledLabel>
      <StyledTextarea
        placeholder={placeholder}
        rows={6}
        value={value}
        onChange={onChange}
        name={name}
      ></StyledTextarea>
    </>
  );
};

export default Textarea;
