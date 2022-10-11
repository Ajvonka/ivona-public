import tw, { styled } from "twin.macro";

type Props = {
  labelColor?: string;
};
const StyledLabel = styled.label<Props>`
  color: ${(props) => props.labelColor || "#e0b24d"};
`;

export default StyledLabel;
