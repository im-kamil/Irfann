import React from 'react'
import styled from 'styled-components'
import configDark from "../config/particlesjs-config.json"
import configLight from '../config/particlesjs-config-light.json'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
// import { loadFull } from "tspar";

const Box = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;
`


const ParticleComponent = (props) => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Box>
        <Particles 
        style={{position: 'absolute', top: 0}}  
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={props.theme === 'light' ? configLight : configDark}/>
    </Box>
  )
}

export default ParticleComponent