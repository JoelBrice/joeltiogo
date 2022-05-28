import React, { useRef, useState } from "react";
import { Canvas, render, useFrame } from "react-three-fiber";
import { useSpring, animated } from '@react-spring/three'
import photo from '../assets/images/photo.jpg';
import styled from 'styled-components/';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Header = styled.div`
display: flex;
padding: 1em;
margin-top: 1em;
`;
const Intro = styled.div`
display: block;
width: 60%;
margin-left: 2em;
`;
const Profile = styled.div`
    display: block;
    width: 40%;
    padding: 1em;
`;
const Img = styled.img`
    width: 300px;
    border-radius: 150px;
`;
const Head = styled.div`
font-size:32px;
fontweight: 800;
font-color: #12EDAF;
text-transform: uppercase;
padding: 1vmin;
`;
const Message = styled.div`
font-size: 16px; 
font-weight: 800; 
color: #FF2276; 
`;
const Social = styled.div`
display: flex;
text-align: justify; 

`;
const Stack = styled.div`
justify-content:center; 
text-align:center;
`;

const Education = styled.div`
display: block; 
padding: .5em;
`;

export default function About() {

    const Box = () => {

        const [hovered, setHover] = useState(false);
        const [active, setActive] = useState(false);
        const props = useSpring({
            scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
            color: active ? 'red' : "gray"
        });

        const meshRef = useRef();

        useFrame((state, delta) => (meshRef.current.rotation.x += 0.01))

        return (
            <animated.mesh onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                onClick={() => setActive(!active)}
                scale={props.scale}
                color={props.color}
                ref={meshRef}
            >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshBasicMaterial attach="material" color={hovered ? "green" : "gray"} />
            </animated.mesh>
        )
    }
    return (
        <>
            <Header className="container">
                <Profile>
                    <Img src={photo} className="profile-pic" />
                </Profile>
                <Intro className='grow'>
                    <Head> Welcome to my Personal website!</Head>
                    <Message> This portfolio site is still under construction...</Message>
                    <br />
                    <h3> I am CEO & Lead engineer at
                        <b><a className="expotech" href="https://www.expotechindustries.com"> Expotech Industries</a></b></h3>
                    <p>I have a diverse background going from Electrical to Software Engineering and many more. This  gives me an excellent perspective in tackling complex programming and real-world problems.
                    </p>
                    <Social>
                        <h3>Find me on these platforms</h3>
                        <a href="https://www.linkedin.com/in/joeltiogo/">
                            <LinkedInIcon />
                        </a>
                        <a href="https://twitter.com/Joel1208199">
                            <TwitterIcon />
                        </a>
                    </Social>
                </Intro>
            </Header>
            <Stack>
                <h2 className="tech-title"> Tech stacks</h2>
                <p> I am a fullstack web developer with focus on the Frontend development. I am currently swithcing to Machine Learning.</p>
                <p>Here are some of the tools I use to build projects.</p>
                

            </Stack>
            <Education>
                <Canvas>
                    <Box />
                </Canvas>
            </Education>
        </>
    )
}
