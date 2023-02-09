import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "./Themes";

import { Develope } from "../components/AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  p {
    padding-left: 1rem;
  }
  ul {
    padding-left: 2rem;
  }
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkillpage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <PowerButton />
        <SocialIcons theme="light" />
        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <Develope width={40} height={40} /> Front-end Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Js, React, Loco-scroll, gsap, framer-motion etc.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Android Studio , Photoshop XAMPP, Postman, Github etc.</p>
          </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} /> Back-end Developer
          </Title>
          <Description>
            I provide valuable backend software solutions and can work with
            databases and API's
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Java, Spring, Node.js, Express.js, MongoDb, Mongoose, REST API, Nest.js etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github etc.</p>
          </Description>
        </Main>
      </Box>
      <BigTitle text="SKILLS" top="78%" left="47%" />
    </ThemeProvider>
  );
};

export default MySkillpage;