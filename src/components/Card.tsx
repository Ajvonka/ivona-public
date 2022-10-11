import React, { FC } from "react";
import { StyledCard } from "./StyledCard";
import Image from "next/image";

export interface Item {
  item: {
    id: number;
    title: string;
    body: string;
    image: string;
  };
}

const Card: FC<Item> = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard flex-direction={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <Image src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
};

export default Card;
