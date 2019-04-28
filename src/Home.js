import React from 'react'
import { Link } from 'react-router'
export default React.createClass({
  render() {
    return (
      <div>
        <h1>Title</h1>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/app">App</Link></li>
        </ul>
        Home
      </div>
    )
  }
})