import React from 'react'

import Layout from '../../components/Layout'
import WorkflowRoll from '../../components/WorkflowRoll'

export default class WorkflowIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            test
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <WorkflowRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
