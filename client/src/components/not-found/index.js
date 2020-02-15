import React from 'react'
import { A } from 'hookrouter'

import './styles.css'

export const NotFound = () => (
  <React.Fragment>
    <section className="error-container">
      <span className="four"><span className="screen-reader-text">4</span></span>
      <span className="zero"><span className="screen-reader-text">0</span></span>
      <span className="four"><span className="screen-reader-text">4</span></span>
    </section>
    <div className="link-container">
      <A href="/" className="more-link">To Home</A>
    </div>
  </React.Fragment>
)
