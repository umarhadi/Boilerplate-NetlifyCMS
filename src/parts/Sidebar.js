import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PostList from "../components/PostList"

const Sidebar = () => (
  <div className="mt-5">
    <div className="card mb-3">
      <div className="card-header">
        <h5>Featured Post</h5>
      </div>
      <div className="card-body">
        <StaticQuery
          query={graphql`
            {
              allMarkdownRemark(
                limit: 4
                sort: { fields: id }
                filter: { frontmatter: { type: { eq: "blog" } } }
              ) {
                edges {
                  node {
                    frontmatter {
                      path
                      title
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            const _ = require("lodash")
            const randomizePost = data.allMarkdownRemark.edges.map(post => {
              const { title, path } = post.node.frontmatter
              return (
                <PostList key={`${title}`} title={title} path={path}></PostList>
              )
            })
            let result = _.sampleSize(randomizePost, 4)
            return <ul className="list-group post-list">{result}</ul>
          }}
        />
      </div>
    </div>
    {/* Division */}
    <div>
      <h3>Support Us</h3>
      <div className="card bg-light" style={{ marginBottom: "1rem" }}>
        <div className="card-body">
          <a
            type="link"
            className="container-fluid btn btn-info text-white"
            href="https://trakteer.id/umarhadi"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa fa-heart" /> Support Me on Trakteer:)
          </a>
          <a
            type="link"
            className="container-fluid btn btn-warning mt-2"
            href="https://docs.google.com/forms/u/0/?tgif=d"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa fa-flag" /> Report Error Links
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Sidebar
