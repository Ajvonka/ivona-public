import type { NextPage } from "next";
import tw, { styled } from "twin.macro";
import Image from "next/image";

const Flex = styled.div`
  ${tw`
flex
flex-grow
flex-wrap
w-full
flex-col
pt-10
pb-6
`}
`;

const WrapperLogo = styled.div`
  ${tw`
flex 
flex-grow 
font-bold text-gray-900 
items-center 
3xl:max-w-[650px] 
max-w-[500px] 
min-w-[400px] 
self-center 
px-10 
pt-20
bg-[#ffffff]
`}
`;
const Logo = styled.div`
  ${tw`
flex 
justify-center 
w-full 
flex-grow-0
`}
`;

const LogoText = styled.div`
  ${tw`
flex 
flex-col 
w-1/2
ml-4
`};
`;

const LogoPage: NextPage = () => {
  return (
    <section id="logo">
      <Flex>
        <WrapperLogo>
          <Logo>
            <a href="https://zvieratkuj.sk" target="_blank" rel="noreferrer">
              <Image
                src="/images/logo.png"
                alt=""
                layout="intrinsic"
                width={800}
                height={900}
              />
            </a>
          </Logo>
          <LogoText>
            <p className="text-lg">Hey there,</p>
            <p className="text-5xl">I&apos;m Ivona.</p>
          </LogoText>
        </WrapperLogo>
      </Flex>
    </section>
  );
};

export default LogoPage;
