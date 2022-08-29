
import { React } from "react";
import styled from 'styled-components'
import photo from '../assets/images/photo.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import hackathon from '../assets/images/intel.jpg';
import { device } from './device';

const Header = styled.div`
${'' /* display: block; */}
padding: 2em;
margin-top: 1em;
`;
const Intro = styled.div`
display: flex;
flex-direction: row;
margin: 2em;
font-size: 18px;
@media (max-width: 638px) {
    display: flex;
    flex-direction: column-reverse;
    ${'' /* display:block; */}
    font-size: 14px;
    margin:0;
    padding:0;
    max-with: 638px;
    justify-content: center;
}

@media(max-width: device.tablet){
    display:block;
    font-size: 14px;
    margin:0;
    padding: 0;

}
`;


const Description = styled.div`
    background-color: #f2f2f2;
    padding: 2em;
    tex-align: justify;
`;

const Profile = styled.div`
    display: block;
    ${'' /* min-width: 400px; */}
    padding: 1em;
    margin-left: 2em;
    @media (max-width: 638px) {
    margin:0;
    padding:0;
    max-with: 638;
    justify-content: center;

}
`;

const Img = styled.img`
    ${'' /* width: 400px; */}
    padding: 0;
    min-width:400px; 
    margin-top: -3m;

    @media (max-width:325px){
        max-width: 100px;
    }
`;

const Body = styled.div`

@media (max-width:638px){
    display: block;
    font-size:14px;
}

`;

const Link = styled.a`
    text-decoration: underline;
`;

const Content = styled.div`
    margin:0;
  @media ${device.laptop} { 
    display: block;
  }

  @media ${device.desktop} {
    display: block;
  }

  @media $(device.mobileS){
    margin: 0;
    padding: 0;
    display: block;
  }
  @media $(device.mobileL){
    margin: 0;
    padding: 0;
    display: block;
  }


`;


export default function Home() {

    return (
        <Content>
            <Intro className='home'>

                <Description className='description'>
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
                    <p> On the news when at a hackathon: <a href="https://www.belgiumcampus.ac.za/2019/10/16/bcmusketeers-participate-in-wrc-symposium-hackathon/">WRC hackathon</a> </p>
                </Description>
                <Header class="header">
                    <Profile>
                        <Img src={photo} className="profile-pic" />

                    </Profile>
                </Header>
                <br />
            </Intro>
            <Body>
                <p>My hackathon days started long from university.</p>
                <Img src={hackathon} className="hackathon"></Img>
            </Body>
        </Content>
    );
}