import React from 'react'
import styled from "styled-components";
import Me from '../assests/Images/profile-img.png.png'
import {motion} from 'framer-motion'

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 55vw;
// height: 50vh;
display: flex;
// to create 2 color border :-
background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index: 1;
`

const SubBox = styled.div`
width: 50%;
position: absolute;
display: flex;
.pic{
    position: relative;
    left: 150%;
    bottom: 30.5%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
}
`
const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
cursor: pointer;
h1,h3{
    padding: 1rem 0rem 0.5rem 2rem;}
display: flex;
flex-direction: column;
justify-content: space-evenly;
&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
    padding: 1rem 0rem 0.5rem 2rem;}
`

const Intro = () => {
  return (
    <Box
    initial = {{height: 0}}
    animate= {{height: '48vh'}}
    transition= {{type: 'spring', duration: 2, delay: 1}}
    >
        <SubBox>
            <Text>
                <h1>Hi👋</h1>
                <h3>I'm Md Kamil Nasar</h3>
                <h6>I code and design simple yet beautiful websites.</h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div
            initial = {{opacity: 0}}
            animate= {{opacity: 1}}
            transition= {{duration: 1, delay: 2}}
            >
            <img className="pic" src={Me} alt='Profile Pic' />
            </motion.div>
        </SubBox>
    </Box>
  )
}

export default Intro