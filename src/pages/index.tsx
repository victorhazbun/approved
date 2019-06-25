import { graphql } from "gatsby"
import * as React from "react"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        appName: string,
        description: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        appName
        description
      }
    }
  }
`

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  readonly hello = `Hello`
  public render() {
    const { appName } = this.props.data.site.siteMetadata
    const { description } = this.props.data.site.siteMetadata
    return (
      <Layout>
        <h1>{description}</h1>
        <p>
          Here at <strong>{appName}</strong>
        </p>

        <ContactForm />
      </Layout>
    )
  }
}