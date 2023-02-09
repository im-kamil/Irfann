import React from 'react'
// import { Link } from 'react-router-dom'
import {  Github, LinkedIn, Twitter} from '../components/AllSvgs'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'



const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
// position: absolute;
position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;
/* transform: scale(1); */
&>*:not(last-child){
    margin: 0.5rem 0;
}
svg {
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.4);
    }
    &:active{
        transform: scale(0.9);
    }
}
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
`

const SocialIcons = (props) => {
  return (
    <Icons>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1,5,1]}}
        transition= {{type:'spring', duration:1, delay:1}}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"//https://github.com/im-kamil"}}>
                <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </NavLink>
        </motion.div>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1,5,1]}}
        transition= {{type:'spring', duration:1, delay:1.2}}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"//https://www.linkedin.com/in/md-kamil-nasar-6b3b19200//"}}>
                <LinkedIn width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </NavLink>
        </motion.div>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1,5,1]}}
        transition= {{type:'spring', duration:1, delay:1.4}}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"//https://twitter.com/kamil_nasar"}}>
                <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </NavLink>
        </motion.div>

        <Line color={props.theme}
        initial={{height: 0}}
        animate={{height: '8rem'}}
        transition={{type:'spring', duration:1, delay:0.8}}
        />
    </Icons>
  )
}

export default SocialIcons