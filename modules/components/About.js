import React from 'react'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>
          This little app is rendered on the server, and then
          lazily loaded on the client. Go ahead and refresh here
          with the web inspector open. You should not get the
          React warning about reusing markup.
        </p>
      </div>
    )
  }
}


