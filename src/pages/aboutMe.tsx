import React, { FC } from "react";
import tw, { styled } from "twin.macro";
import { FaHeart } from "react-icons/fa";
import Button from "../components/Button";
import Image from "next/image";

interface Props {
  handleClick(): void;
}

const Container = styled.div`
  ${tw`
  flex
  flex-col
  flex-grow
  items-center
    `};
`;

const Flex = styled.div`
  ${tw`
flex
flex-col
flex-grow
flex-wrap
w-full
bg-black
`}
`;

const StyledHeader = styled.header`
  ${tw`
  flex
  flex-wrap
  bg-cover
  bg-no-repeat 
  bg-center
  h-auto
  lg:w-3/4
  mx-5
  mt-10
  xl:mx-0
  w-full
      `};
`;

const AboutTitle = styled.div`
  ${tw`
my-3
flex-shrink-0
text-[#e0b24d]
lg:text-2xl
text-xl
`}
`;

const AboutText = styled.div`
  ${tw`
flex 
flex-col 
pt-10 px-10 
mx-2
lg:mx-0
flex-grow 
text-gray-200 
text-base 
lg:text-xl 
lg:w-96 
2xl:w-full
self-center 
sm:self-start 
pb-10
h-auto
background-size[cover]
`};
  border: 1px solid #7c7c7cf9;
  background-image: url("./images/sep09_1024lg.jpg");
  background-repeat: no-repeat;
`;

const Ivona = styled.div`
  ${tw`
flex flex-grow relative w-full mt-10
`}
  .ivonaImg {
    ${tw`
    flex-grow
    justify-center 
    mx-2
    lg:mx-0
`}
  }
`;

const AboutMe: FC<Props> = ({ handleClick }) => {
  return (
    <section id="aboutMe">
      <Flex>
        <Container>
          <StyledHeader>
            <AboutText>
              <AboutTitle>
                <p>_About Me</p>
              </AboutTitle>
              <p>
                Front-End Developer and team player with a proven ability to
                collaborate effectively with team members.
              </p>
              <p>
                My journey started as an Automation Java Developer. With a
                passion for personal growth and software development, I&apos;ve
                obtained 4+ years of experience in delivering client-facing
                projects in an agile environment.
              </p>
              <p>
                I&apos;m interested in modern web technologies and reactive
                frameworks - primary on React.js using TypeScript. I love modern
                designs and simplicity.
              </p>
              <p>
                To be honest, this passion for learning, progressing and seeking
                challenges makes me really happy{" "}
                <FaHeart className="inline" style={{ color: "#cec7c7" }} />
              </p>

              <div className="mt-10 self-center lg:self-start">
                <Button onClick={handleClick}>CONTACT ME</Button>
              </div>
            </AboutText>
            <Ivona>
              <Image
                className="ivonaImg"
                src="/images/Ivonka.jpg"
                alt=""
                layout="intrinsic"
                width={1500}
                height={1200}
              />
            </Ivona>
          </StyledHeader>
        </Container>
      </Flex>
    </section>
  );
};

export default AboutMe;
