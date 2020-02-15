import React from 'react'
import { A } from 'hookrouter'

import './styles.css'

export const NotFound = () => (
  <React.Fragment>
    <section class="error-container">
      <span class="four"><span class="screen-reader-text">4</span></span>
      <span class="zero"><span class="screen-reader-text">0</span></span>
      <span class="four"><span class="screen-reader-text">4</span></span>
    </section>
    <div class="link-container">
      <A href="/" class="more-link">To Home</A>
    </div>
  </React.Fragment>
)
