/**
 * App entry-point
 */
'use strict'

const React = require('react')
const render = require('react-dom').render

const Main = ({ name }) => {
  return <div>
    <h1>Hello, {name}!</h1>
  </div>
}

render(<Main name='Josh' />, document.getElementById('app'))
