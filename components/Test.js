import React from "react"
import 'isomorphic-unfetch'
import Link from 'next/link'

export default class Test extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }



    async getData() {
        const res = await fetch('https://api.github.com/repos/zeit/next.js')
        const json = await res.json()
        this.setState({
            blah: json.stargazers_count
        })
    }

    constructor(props) {
        super(props)

        this.getData()
        this.state = {}
    }

    render() {
        return (
            <div>
              <p> testerino  {this.state.blah} </p>
            </div>
        )
    }
}

