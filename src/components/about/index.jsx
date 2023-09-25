import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              {/* <SubTitle><div style={{color:'#ff2d2d'}}>PhD student</div> in <b className="text-secondary lined-link">Computer Science</b> at <div style={{color: '#ff2d2d'}}>UMass, Amherst</div></SubTitle> */}
            </div> 
            <div>
              <Title> Hello, I’m Kunjal </Title>
              <Text> I'm a PhD student at Manning College of Information and Computer Sciences, Universtiy of Massachusetts - Amherst; hailing from India. </Text>
              <Text> My main area of research is <b className="text-primary lined-link">Personalized Federated Learning</b>, advised by Prof. Hui Guan.</Text>
              <Text> I am currently a part of MLSys lab at UMass.</Text>
              <ResumeButton href="Kunjal_Panchal_CV_Sept_2023_2_page.pdf" target="_blank"> Download Resume / CV </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
