import React from "react"
import Test from "../components/Test"
import 'isomorphic-unfetch'
import Link from 'next/link'
import "../static/main.css"

export default class extends React.Component {
  render() {
    return (
      <div className="container">
        Hello World {}
        <Test />
      </div>
    )
  }
}
