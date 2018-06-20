import React from 'react'
import Link from 'gatsby-link'

import CardList from '../components/CardList'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'

import Section from '../components/Section'
import Hr from '../components/Hr'

import SEO from '../components/SEO'
import styled, {css} from 'react-emotion'

import theme from '../utils/theme';

const Index = (props) => {
  const posts = props.data.allContentfulPost.edges
//console.log('home page router = ' + JSON.stringify(props))
  return (
    <div>
      <SEO />

      <Section>
        <p>
          <strong>Welcome</strong> to my personal portfolio site. I'm a front end web engineer that enjoys the simple things in life like man's best friend (dogs)
          and riding motocycles.
        </p>
      </Section>

      <Section>
        <h1>Latest Stories</h1>
        {/*<Hr />*/}
        <p>
          Recent stories discussing general ideas about family life, front end engineering, sports 
          and the joys of raising pit bulls. 
        </p>

        <CardList>
          {posts.map(({ node: post }) => (
            <Card
              key={post.id}
              slug={post.slug}
              image={post.heroImage}
              title={post.title}
              date={post.publishDate}
              excerpt={post.body}
            />
          ))}
        </CardList>
      </Section>
    </div>
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Index
