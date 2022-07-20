import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.bgMode} bg-${props.bgMode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>


            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn btn-${props.btnMode}`} type="submit">Search</button>
            </form>
            <div className="btn-group mx-3" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={props.toggleTheme.toggleLight} defaultChecked />
              <label className={`btn btn-outline-${props.btnMode}`} htmlFor="btnradio1">Light</label>

              <input type="radio" className="btn-check" onClick={props.toggleTheme.toggleDark} name="btnradio" id="btnradio2" autoComplete="off" />
              <label className={`btn btn-outline-${props.btnMode}`} htmlFor="btnradio2">Dark</label>

              <input type="radio" onClick={props.toggleTheme.toggleGreen} className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
              <label className={`btn btn-outline-${props.btnMode}`} htmlFor="btnradio3">Green</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title here',
  about: 'About'
}