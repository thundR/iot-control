import React from "react"

export default class Test extends React.Component {

  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/developit/preact')
    const json = await res.json()
    return { stars: json }
}
render() {
    return (
      <div>
        <p> testerino  {this.props.stars} </p>
      </div>
    )
  }
}