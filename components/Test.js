import React from "react"
import 'isomorphic-unfetch'
import Link from 'next/link'

export default class Test extends React.Component {

    async loadInitialData() {
        const res = await fetch('https://api.github.com/repos/zeit/next.js')
        const json = await res.json()
        this.setState({
            blah: json.stargazers_count
        })
    }

    constructor(props) {
        super(props)

        this.loadInitialData()
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
