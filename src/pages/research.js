import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {Tag, ContainerLayout, ResearchPost, Period, Venue, Category, Intro, SubTitle, Title, Text} from "../components/common"

const ResearchIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges

  return (
      <Layout> 
        <SEO title="Research" />
        <Intro>
          <ContainerLayout>

            <SubTitle className="text-dark">
              Research Work
            </SubTitle>

            <ContainerLayout className="wrapper">
              {works.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
                return (
                  <ResearchPost key={node.fields.slug}>
                    <div className="content">
                      <header>
                        <div style={{lineHeight: '40px'}}>
                          {node.frontmatter.authors.map((tag, index) => (<Category key={index}>{tag}</Category>))}
                        </div>
                        <Title>
                          <a className="text-primary lined-link" style={{ boxShadow: `none` }} href={node.frontmatter.url}>
                            {title}
                          </a>
                        </Title>
                        <Venue>{node.frontmatter.venue}</Venue>
                        <Period>{node.frontmatter.period}</Period>
                      </header>
                      <br/>
                        <Text
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                        <div>
                          {node.frontmatter.tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
                        </div>
                    </div>
                  </ResearchPost>
                )
              })}
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
  )
}

export default ResearchIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(research)/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            authors
            venue
            period
            url
            description
          }
        }
      }
    }
  }
`