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
    width: 30%;
    padding: 1em;
    margin-left: 2em;
`;
const Img = styled.img`
    width: 200px;
    border-radius: 100px;
`;
const Head = styled.div`
font-size:32px;
fontweight: 900;
font-color: #12EDAF;
text-transform: uppercase;
padding: 1vmin;
`;

const Social = styled.div`
display: flex;
text-align: justify; 

`;
const Stack = styled.div`
justify-content:center; 
text-align:center;
 background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
 bottom: 0;
 display: block;
 padding: 1em;
 color: #FAFAFA;
 height: 250px;
`;

const Education = styled.div`
display: block; 
padding: .5em;
`;

const Expotech = styled.div`
color: #4BAC66;
`

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
                    <Head> JOEL TIOGO</Head>
                    <br />
                    <h3> I am the CEO & Lead engineer at
                        <b><a className="expotech" href="https://www.expotechindustries.com"> Expotech Industries</a></b></h3>
                    <p>I have a diverse academic background going from Electrical Engineering, Computer Science, and Physics.
                        My professional experiences span accross the renewable energy,  software engineering industry, academia, and entrepreneurship.
                        I am interested many things but some of the few things I work on everyday are: AI, software architecture,  Entrepreneurship, Data Privacy.
                    </p>
                    <br />
                    <Social>
                        <a href="https://www.linkedin.com/in/joeltiogo/">
                            <LinkedInIcon />
                        </a>
                    </Social>
                </Intro>
            </Header>
            <Stack>
                <h1 className="tech-title"><b> SOME TECH STACKS I USE </b> </h1>
                <div className="Software">
                    <br />                    <span> C# ASP.Net </span> |
                    <span> Javascript </span> |
                    <span> Python </span> |
                    <span> Angular </span> |
                    <span> React </span> |
                    <span> Pytorch </span> |
                    <span> Tensorflow </span> |
                    <span> Pandas, Scikit-learn, numpy </span> |
                    <span>Git, github, Trello </span>
                </div>
                <br />
                <div className="Electrical">
                    <span> Digsilent Powerfactory </span> |
                    <span> AUTOCAD </span> |
                    <span> Helioscope </span> |
                    <span> PVSyst</span> |
                    <span> PV*SOL </span>
                </div>


            </Stack>
            {/* <Education>
                <Canvas>
                    <Box />
                </Canvas>
            </Education> */}
        </>
    )
}
