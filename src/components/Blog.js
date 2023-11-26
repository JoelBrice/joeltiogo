import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal'; // Make sure to install @mui/material and its peer dependencies
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import esg from '../assets/images/esg.jpg';

// Styled components for the grid layout
const BlogGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 2rem;
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`{
  width: 100%;
  height: 200px;
  object-fit: cover;
};`

const CardContent = styled.div`
  padding: 1rem;`;

const CardTitle = styled.h3`
  font-weight: bold;
  margin-top: 0;`;

const ReadMoreButton = styled.button`
  color: #367BFF;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem 0;
`;

// Modal styles
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  maxHeight: '90vh',
  overflowY: 'auto',
};

// Data for the blogs
const blogPosts = [
  {
    image: esg,
    title: "ESG Dynamics: Shaping the Future of European Business",
    content: "As the European Union (EU) forges ahead towards a greener, more sustainable future, the imperative of Environmental, Social, and Governance (ESG) principles is becoming increasingly pronounced. These criteria, central to corporate responsibility, have begun to redefine the business landscape in Europe. Legislation, evolving investor priorities, consumer awareness, and broader social trends are converging to place sustainability at the heart of business strategy.     Legislative currents, marked by directives like the Non-Financial Reporting Directive (NFRD) and the EU Taxonomy for Sustainable Activities, drive significant change. The NFRD demands that large companies provide details on their social and environmental impact, fostering a culture of transparency and ethical conduct (1). This movement towards open disclosure allows all stakeholders, from investors to customers, to make more informed assessments of a company's sustainability practices. The EU Taxonomy serves as a groundbreaking attempt to define “sustainable activity” explicitly, providing a clear classification system guiding investment toward sustainability (2). By creating a common language for sustainability, the Taxonomy helps to mitigate the risk of greenwashing, ensuring that only genuinely sustainable projects and companies attract eco-conscious investment. This framework also encourages businesses to pivot towards green innovation, with benefits that range from access to new markets to improved financial performance driven by ESG metrics. The implications of ESG on access to capital are profound. The Sustainable Finance Disclosure Regulation (SFDR) aims to increase transparency among financial market participants, requiring them to disclose how they integrate ESG risks within their investment processes (3). This regulation signifies a seismic shift: it is no longer sufficient for companies to pursue profitability without concurrently considering their broader societal impact. Consumer dynamics are also evolving; customer loyalty increasingly hinges on corporate sustainability credentials. Research shows that consumers are more willing to patronize brands that stand for positive environmental and social values (4). As a result, companies are not only revamping their business models but also embedding ESG considerations into their value propositions.In conclusion, ESG is a force of transformation within the EU business arena. Embracing these criteria is no mere compliance exercise—it is a strategic imperative that unlocks innovation, builds resilience, and creates sustainable long-term value. Companies that anticipate and respond to these ESG drivers are poised to thrive in the emerging sustainable economy."
  ,summary:"ESG criteria are substantially influencing business operations within the EU, propelled by stringent legislation, informed investors, and socially conscious consumers. The EU's Non-Financial Reporting Directive and Taxonomy for Sustainable Activities compel transparency and responsible practices. The Sustainable Finance Disclosure Regulation mandates ESG risk disclosure, affecting capital access. Companies adapting to these changes stand to gain competitive advantages, consumer trust, and are well-positioned for sustainable, long-term growth.",
  references: "1) European Commission. (2014). *Directive 2014/95/EU of the European Parliament and of the Council of 22 October 2014 amending Directive 2013/34/EU as regards disclosure of non-financial and diversity information by certain large undertakings and groups*. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32014L0095  2) European Commission. (2020). *EU taxonomy for sustainable activities*. https://ec.europa.eu/info/business-economy-euro/banking-and-finance/sustainable-finance/eu-taxonomy-sustainable-activities_en  3) European Commission. (2018). *Regulation (EU) 2019/2088 of the European Parliament and of the Council of 27 November 2019 on sustainability-related disclosures in the financial services sector*. https://eur-lex.europa.eu/eli/reg/2019/2088/oj   4) Nielsen. (2015). *The Sustainability Imperative*. https://www.nielsen.com/eu/en/insights/report/2015/the-sustainability-imperative/"
}
];

function Blog() {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpen = (post) => {
    setSelectedPost(post);setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard key={index}>
            <CardImage src={post.image} alt={post.title} />
            <CardContent>
              <CardTitle>{post.title}</CardTitle>
              <p>{post.summary}</p>
              <ReadMoreButton onClick={() => handleOpen(post)}>Read More</ReadMoreButton>
            </CardContent>
          </BlogCard>
        ))}
      </BlogGrid>

      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="blog-post-modal-title"
          aria-describedby="blog-post-modal-description blog-post-modal-reference"
        >
          <Box sx={modalStyle}>
            <IconButton 
              onClick={handleClose}
              sx={{ position: 'absolute', right: 8, top: 8 }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            {selectedPost && (
              <>
                <h1 id="blog-post-modal-title" className='text-bold'>{selectedPost.title}</h1>
                <p id="blog-post-modal-description">{selectedPost.content}</p>
                <br/>
                <h2> References</h2>
                <p id="blog-post-modal-reference">
                  {selectedPost.references}
                </p>
              </>
            )}
          </Box>
        </Modal>
    </>)
  }
 export default Blog;