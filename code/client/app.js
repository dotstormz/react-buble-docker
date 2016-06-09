/**
 * App entry-point
 */
'use strict'

// Dependencies
const React = require('react')
const {render} = require('react-dom')
const {PropTypes} = React

const Main = ({name}) => {
  return <div>
    <h1>Hello, {name}!</h1>
    <MyComponent />
  </div>
}

Main.propTypes = {
  name: PropTypes.string.isRequired
}

class MyComponent extends React.Component
{
  render () {
    return <h2>
      Another Thing
    </h2>
  }
}

render(
  <Main name='Josh' />,
  document.getElementById('app')
)
