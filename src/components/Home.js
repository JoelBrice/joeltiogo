
import { React } from "react";
import styled from 'styled-components'
import photo from '../assets/images/photo.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import hackerton from '../assets/images/intel.jpg';

const Header = styled.div`
${'' /* display: block; */}
padding: 2em;
margin-top: 1em;
`;
const Intro = styled.div`
display: flex;
flex-flow: column-wrap;
margin: 2em;
font-size: 18px;
`;


const Description = styled.div`
    background-color: #f2f2f2;
    padding: 2em;
    tex-align: justify;
`;

const Profile = styled.div`
    display: block;
    min-width: 400px;
    padding: 1em;
    margin-left: 2em;
`;

const Img = styled.img`
    ${'' /* width: 400px; */}
    padding: 0;
    margin-top: -3m;
`;

const Body = styled.div`

:&Img{
    height: 400px;
}

`;

const Link = styled.a`
    text-decoration: underline;
`;

const Content = styled.div`
    margin:0;
`;


export default function Home() {

    return (
        <Content>
            <Intro className='grow'>

                <Description>
                    <p> JB Voumo Tiogo is the Founder, CEO & Lead engineer at
                        <Link href="https://www.expotechindustries.com"> Expotech Industries </Link>
                        with experience in both the electrical engineering and software industry.
                    </p>
                    <br />
                    <p>With a diverse academic background going from Electrical Engineering, Computer Science, and Physics.
                        With professional experience spanning accross the software and electrical engineering industry.
                    </p>
                    <br />
                    <p>He has various interests but  currently spends most of his time in AI, software architecture,  Entrepreneurship, and Data Privacy.
                    </p>
                    <br />
                    <p> In his hobby, he likes developing embedded systems, playing chess, football, computer games, and reading.</p>
                    <br />
                    <a href="https://www.linkedin.com/in/joeltiogo" ><LinkedInIcon /></a>
                    <a href="https://twitter.com/Joel1208199"><TwitterIcon /></a>
                    <a href="https://github.com/JoelBrice"><GitHubIcon /></a>
                </Description>
                <Header>
                    <Profile>
                        <Img src={photo} className="profile-pic" />

                    </Profile>
                </Header>
                <br />
            </Intro>
            <Body>
                <p>My hackerton days started long from university.</p>
                <Img src={hackerton} className="hackerton"></Img>
            </Body>
        </Content>
    );
}