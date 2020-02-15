import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { navigate } from 'hookrouter'

import { register } from '../../actions/auth'

const Register_ = ({ auth, register }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/')
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    register({ email, password })
  }

  return (
    <React.Fragment>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Ukiyo<br /> Registration</h2>
          <p>Register to start listening.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  pattern=".{5,30}"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  pattern=".{6,30}"
                  required
                />
              </div>
              <button type="submit" className="btn btn-black">Register</button>
              {/* <button type="submit" className="btn btn-secondary">Register</button> */}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({ auth: state.auth })

export const Register = connect(mapStateToProps, { register })(Register_)
