import React, { useRef, useEffect } from 'react'
import { darkTheme } from './Themes'
import styled, { ThemeProvider } from "styled-components";
import { motion } from 'framer-motion';

import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';

import { Work } from "../data/WorkData";
import Card from '../subComponents/Card';
import { YinYang } from './AllSvgs';
import BigTitle from '../subComponents/BigTitle';


const Box = styled.div`
background-color: ${props => props.theme.body};
background-color: black;
/* background-color: lightblue; */
/* width: 100vw; */
height: 800vh;
position: relative;
/* overflow: hidden; */
display: flex;
align-items: center;
`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;
flex-direction: row-reverse;
color: white;
`

const Rotate = styled.span`
display: block;
position: fixed;
right: 2.5rem;
bottom: 1rem;
z-index: 1;
`

// Framer-motion config here

const container = {
  hidden: {opacity: 0},
  show:  {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}


const WorkPage = () => {


  const ref = useRef(null);
  const yingyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`

      if (window.pageYOffset !== 0) {
        yingyang.current.style.transform = 'rotate(' + -window.pageYOffset + 'deg)'
      }
    }

    window.addEventListener('scroll', rotate)
    return () => window.removeEventListener('scroll', rotate)
  }, [])
  
  
  

  return (

    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <PowerButton />
        <SocialIcons theme='dark'/>    
        {/*<ParticleComponent theme='light' /> */}

        <Main ref={ref} variants={container} initial='hidden' animate='show'>
          {
            Work.map( d =>
              <Card key={d.id} data={d} />
            )
          }
        </Main> 
        <Rotate ref={yingyang}>
          <YinYang width={80} height={80} fill={darkTheme.text}/>
        </Rotate>  
        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  )
}

export default WorkPage