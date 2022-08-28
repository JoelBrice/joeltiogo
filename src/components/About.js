import React from "react";
import hacker from '../assets/images/hacker.jpg';
import styled from 'styled-components/';

const Stack = styled.div`
justify-content:center; 
text-align:center;
${'' /* width: 100%; */}
 ${'' /* background-image: linear-gradient(to top, #09203f 0%, #537895 100%); */}
 bottom: 0;
 display: block;
 flex-start: end;
 padding: 1em;

background-color: #f2f2f2;

`;

const Content = styled.div`
display: block; 
margin: 0;
width: 100%;
`;

// const Intro = styled.div`
// padding:2em;
// background-image: url(${hackathon});
// height: 500px;
// width: 100%;
// &p{
//     background-color:#ffffff;
//     padding:2em;
// }

const Img = styled.img`
height: 400px
width: 100%;
`;

const Expotech = styled.div`
color: #4BAC66;
`

export default function About() {

    // const Box = () => {

    //     const [hovered, setHover] = useState(false);
    //     const [active, setActive] = useState(false);
    //     const props = useSpring({
    //         scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    //         color: active ? 'red' : "gray"
    //     });

    //     const meshRef = useRef();

    //     useFrame((state, delta) => (meshRef.current.rotation.x += 0.01))

    //     return (
    //         <animated.mesh onPointerOver={() => setHover(true)}
    //             onPointerOut={() => setHover(false)}
    //             onClick={() => setActive(!active)}
    //             scale={props.scale}
    //             color={props.color}
    //             ref={meshRef}
    //         >
    //             <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
    //             <meshBasicMaterial attach="material" color={hovered ? "green" : "gray"} />
    //         </animated.mesh>
    //     )
    // }
    return (
        <>
            <Content>
                <Img src={hacker} />
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
            </Content>
        </>
    )
}
