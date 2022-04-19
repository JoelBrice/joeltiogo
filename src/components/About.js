import React, { useRef, useState } from "react";
import { Canvas, render, useFrame } from "react-three-fiber";
import { useSpring, animated } from '@react-spring/three'
import photo from '../assets/images/photo.jpg';
import './About.css';


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
        <div className="about">
            <div className='flex main'>
                <div className='contents'>
                    <div className='flex-1'>
                        <h1> Welcome to my Personal website!</h1>
                        <br />
                        <h3> I am CEO & Lead engineer at
                            <b><a className="expotech" href="https://www.expotechindustries.com"> Expotech Industries</a></b></h3>
                        <p>I have a diverse background going from Electrical to Software Engineering.
                        </p><p> This  gives me an excellent perspective in tackling complex problems.
                            <p>You can check out my <b><a className='cv' href='https://docs.google.com/document/d/1BsLlXRjWIyOuWyiV160slcSjBAcXMZRVJi0LagYobzU/edit?usp=sharing'>Curiculum vitae</a> to learn more about my career path</b></p>
                            Are you still interested to learn more about me? you can <a className='mail' href='mailto:joel.tiogo@xpotechindustries.com'>email me</a>
                        </p>
                    </div>
                    <div className='flex-2 profile'>
                        <img src={photo} className="profile-pic" />
                    </div>
                </div>
            </div>
            <div className="education" id="canvas-container">
                <Canvas>
                    <Box />
                </Canvas>
            </div>
        </div>
    )
}
