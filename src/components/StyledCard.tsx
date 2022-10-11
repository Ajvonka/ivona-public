import tw, { styled } from "twin.macro";

export const StyledCard = styled.div.attrs((props) => ({
  layout: "text",
}))`
  display: flex;
  align-items: center;
  background-color: #383837;
  border: 1px solid #7c7c7cf9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${(props) => props.layout || "row"};
  color: white;

  img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
