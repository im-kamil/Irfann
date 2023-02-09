import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

import Intro from "./Intro";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";


const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,h3,h4,h5,h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.span`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const BLOG = styled.span`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 45%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const WORK = styled.span`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 45%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const Bottombar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled.span`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

const SKILLS = styled.span`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "70%" : "30%")};
  left: ${(props) => (props.click ? "83%" : "43%")};
  transform: tanslate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #000;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 0.5s ease 0.5s;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const [centerText, setCenterText] = useState("click here")

  const handleClick = () => {
    setClick(!click);
    setCenterText('')
  }

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>{centerText}</span>
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: "//mailto:kamilnasar786@gmail.com" }}
        >
          <motion.h2
          initial={{
            y: -200,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
            y: 0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover = {{scale: 1.1}}
          whileTap = {{scale: 0.9}}
          >
            Say hi...
          </motion.h2>
        </Contact>
        <BLOG>
          <motion.h2
          initial={{
            y: -200,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
            y: 0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover = {{scale: 1.1}}
          whileTap = {{scale: 0.9}}>
            <Link to="/blog" >
            Blog
            </Link>
          </motion.h2>
        </BLOG>
        <WORK click={click}>
          <motion.h2
          initial={{
            y: -200,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
            y: 0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          whileHover = {{scale: 1.1}}
          whileTap = {{scale: 0.9}}>
            <Link to="/work" >
            Work
            </Link>
          </motion.h2>
        </WORK>
        <Bottombar>
          <ABOUT click={click}>
            <motion.h2
            initial={{
              y: 200,
              transition: { type:'spring', duration: 1.5, delay:1}
            }}
            animate={{
              y: 0,
              transition: { type:'spring', duration: 1.5, delay:1}
            }}
            whileHover = {{scale: 1.1}}
            whileTap = {{scale: 0.9}}>
              <Link to="/about" >
              About
              </Link>
            </motion.h2>
          </ABOUT>
          <SKILLS >
            <motion.h2
            initial={{
              y: 200,
              transition: { type:'spring', duration: 1.5, delay:1}
            }}
            animate={{
              y: 0,
              transition: { type:'spring', duration: 1.5, delay:1}
            }}
            whileHover = {{scale: 1.1}}
            whileTap = {{scale: 0.9}}>
              <Link to="/skills" >
              My Skills
              </Link>
            </motion.h2>
          </SKILLS>
        </Bottombar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;