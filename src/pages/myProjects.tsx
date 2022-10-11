import Button from "../components/Button";
import tw, { styled } from "twin.macro";
import { FC } from "react";
import Image from "next/image";

const Container = styled.div`
  ${tw`
  flex
  flex-col
  flex-grow
  bg-black
  items-center
  lg:pt-20
  pt-10
    `};
`;

const Flex = styled.div`
  ${tw`
flex
flex-grow
flex-wrap
w-full
items-center
justify-center
`}
`;

const Wrapper = styled.div`
  ${tw`
  flex
  flex-wrap
  items-center
  justify-center
  h-auto
  lg:w-3/4
  mx-2
  xl:mx-0
  w-full
  mb-10
  background-size[cover]
      `};
  border: 1px solid #7c7c7cf9;
  background-image: url("./images/sep09_1024lg.jpg");
  background-repeat: no-repeat;
`;

const ProjectTitle = styled.div`
  ${tw`
my-3
flex-shrink-0
text-[#e0b24d]
lg:text-2xl
text-xl
`}
`;

const Title = styled.div`
  ${tw`
my-3
lg:w-3/4
flex-shrink-0
text-[#e0b24d]
lg:text-2xl
text-xl
flex 
flex-grow 
h-auto
`}
`;

const ProjectText = styled.div`
  ${tw`
flex 
flex-col 
pt-10 px-10 
flex-grow 
text-gray-200 
text-base 
lg:text-xl 
lg:w-96 
self-center 
mb-10
h-auto
background-size[cover]
`};
`;

const ImageWrapper = styled.div`
  ${tw`
w-3/5
flex
items-center
justify-center
`}
`;

const MyProjects: FC = () => {
  const handleClick = () => {
    window.open("https://zvieratkuj.sk", "_blank");
  };

  return (
    <section id="projects">
      <Container>
        <Title>
          <p>_My Projects</p>
        </Title>
        <Flex>
          <Wrapper>
            <ProjectText>
              <ProjectTitle>
                <p>Zvieratkuj</p>
              </ProjectTitle>
              <p>
                As a dog lover, I&apos;m trying to build a webpage for pet
                lovers. Why we shouldn&apos;t make our life easier?
              </p>
              <p>
                For this purpose, I created my project &apos;Zvieratkuj&apos;,
                where you can find a lot of useful features. Everything at one
                place. Have a better overview of medical records, vaccination
                dates, tasks or costs.
              </p>
              <div className="btnZvieratkuj">
                <Button onClick={handleClick}>ZVIERATKUJ</Button>
              </div>
            </ProjectText>
            <ImageWrapper>
              <Image
                src="/images/Zvieratkuj.png"
                alt=""
                layout="intrinsic"
                width={1500}
                height={1200}
              />
            </ImageWrapper>
          </Wrapper>
        </Flex>
      </Container>
    </section>
  );
};

export default MyProjects;
