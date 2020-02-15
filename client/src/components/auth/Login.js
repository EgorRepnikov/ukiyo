import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { navigate } from 'hookrouter'

import { login } from '../../actions/auth'

const Login_ = ({ auth, login }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/')
    }
  }, [auth])

  const onSubmit = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <React.Fragment>
      <div class="sidenav">
        <div class="login-main-text">
          <h2>Ukiyo<br /> Log In</h2>
          <p>Log In to start listening.</p>
        </div>
      </div>
      <div class="main">
        <div class="col-md-6 col-sm-12">
          <div class="login-form">
            <form onSubmit={onSubmit}>
              <div class="form-group">
                <label>Email</label>
                <input
                  class="form-control"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  pattern=".{5,30}"
                  required
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  class="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  pattern=".{6,30}"
                  required
                />
              </div>
              <button type="submit" class="btn btn-black">Login</button>
              {/* <button type="submit" class="btn btn-secondary">Register</button> */}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({ auth: state.auth })

export const Login = connect(mapStateToProps, { login })(Login_)
