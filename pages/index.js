import React from "react"
import Test from "../components/Test"
import 'isomorphic-unfetch'
import Link from 'next/link'
import "../static/main.css"

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div className="container">
        Hello World {this.props.userAgent}
        <Test />
      </div>
    )
  }
}
