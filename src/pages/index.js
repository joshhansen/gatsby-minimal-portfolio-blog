import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import DisplayImage from './../assets/images/main_image.jpg'

class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <p>
	    To me everything is craft; everything is creative.
        </p>
        <p>
	    My name is Josh Hansen and I've been in the tech world from QBASIC at age 11 to TensorFlow today. I'm a data scientist and machine educator---I apply modern machine learning techniques to enable computers to do incredible things. My preferred mode is diving deep on technical problems, pushing the boundaries of what's possible, and building software that is both beautiful and innovative. I also love the outdoors, am working on my second novel, and cook a mean quesadilla.
        </p>
        <img src={DisplayImage} alt={siteTitle} />
      </Layout>
    );
  }
}

export default SiteIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
